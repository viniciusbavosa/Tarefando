// import { json } from "express";
import { createTaskElement } from "../../dynamic-content/dynamicHTML.js";
import setTimeStamps from "../date-time-info/timeStamps.js";
import playSuccessAudio from "../../audio-functios/sucessAudio.js";
import playErrorAudio from "../../audio-functios/errorAudio.js";

const newTaskBttnContainer = document.querySelector('.new-task-bttn-container');
const newTaskInputContainer = document.querySelector('.new-task-input-container');
const inputTask = document.querySelector('.new-task-input');

// Allows users to send input pressing 'Enter'
inputTask.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    createAndStoreTask(event);
  }
});

export default function createAndStoreTask(event) {

  // Stores user input
  const inputTaskValue = inputTask.value

  // Validate input preventing users from sending an empty input
  if (!inputTaskValue) {
    inputTask.classList.add('input-invalid');
    playErrorAudio();
    event.preventDefault();
    return;
  } else {
    inputTask.classList.remove('input-invalid');
  }
  
  playSuccessAudio();
  // Generates random ID
  const id = crypto.randomUUID();

  // Stores timestamps
  const timestamp = setTimeStamps();

  // Stores new task in localStorage
  localStorage.setItem(`${id}`, JSON.stringify(inputTaskValue));
  localStorage.setItem(`${id}-created-date`, JSON.stringify(timestamp));

  createTaskElement(inputTaskValue, id, timestamp);
  // Reset the input field to blank
  inputTask.value = '';

  // Displays and hides button and input
  newTaskBttnContainer.classList.remove('invisible');
  newTaskInputContainer.classList.add('invisible');

};

