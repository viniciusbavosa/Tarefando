// import { json } from "express";
import { createTaskElement } from "../../dynamic-content/dynamicHTML.js";
import setTimeStamps from "../date-time-info/timeStamps.js";
import playSuccessAudio from "../../audio-functios/sucessAudio.js";
import playErrorAudio from "../../audio-functios/errorAudio.js";
import { openDB } from "../../../boilerplate/openDatabase.js";

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
  const inputTaskValue = inputTask.value;

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

  const taskData = {
    body: {
      title: inputTaskValue,
      details: "",
      timestamp,
    },
    id,
  };

  const request = openDB('TasksDatabase');

  request.onerror = (event) => {
    console.error("An error occurred with IndexedDB", event);
  };

  request.onupgradeneeded = (event) => {
    const db = request.result;
    const store = db.createObjectStore('Tasks', { keyPath: 'id' });
    store.createIndex('title', ['body.title'], { unique: false});
    store.createIndex('details', ['body.details'], { unique: false});
    store.createIndex('timestamp', ['body.timestamp'], { unique: false});
    store.createIndex('id', ['id'], { unique: true });
  };

  request.onsuccess = (event) => {
    const db = request.result;
    const transaction = db.transaction('Tasks', 'readwrite');
    const store = transaction.objectStore('Tasks');
    const idIndex = store.index('id');
    const titleIndex = store.index('title');
    const detailsIndex = store.index('details');
    const timestampIndex = store.index('timestamp');

    store.add(taskData);
  };

  createTaskElement(inputTaskValue, id, timestamp);
  // Reset the input field to blank
  inputTask.value = '';

  // Displays and hides button and input
  newTaskBttnContainer.classList.remove('invisible');
  newTaskInputContainer.classList.add('invisible');

};

