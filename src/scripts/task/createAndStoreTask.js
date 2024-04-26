// import { json } from "express";
import { createTaskElement } from "../dynamicContent/dynamicHTML.js";
import setTimeStamps from "../date-time-info/timeStamps.js";

const newTaskBttnContainer = document.querySelector('.new-task-bttn-container');
const newTaskInputContainer = document.querySelector('.new-task-input-container');
const inputTask = document.querySelector('.new-task-input');

// Allows users to send input pressing 'Enter'
inputTask.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    createAndStoreTask(event)
  }
});

export default function createAndStoreTask(event) {

  // Stores user input
  const inputTaskValue = inputTask.value

  // Validate input preventing users from sending an empty input
  if (!inputTaskValue) {
    inputTask.classList.add('input-invalid');
    event.preventDefault();
    return;
  } else {
    inputTask.classList.remove('input-invalid');
  }
  
  // Generates random ID
  const id = crypto.randomUUID();

  // Stores timestamps
  const timestamp = setTimeStamps();
  
  // Stores new task in localStorage
  localStorage.setItem(`${id}`, JSON.stringify(inputTaskValue));

  createTaskElement(inputTaskValue, id, timestamp);

  // Reset the input field to blank
  inputTask.value = '';

  // Displays and hides button and input
  newTaskBttnContainer.classList.remove('invisible');
  newTaskInputContainer.classList.add('invisible');

};

