import showInput from "./index-page/input/showInput.js"
import { displayAllTasks } from "./index-page/task/displayAllTasks.js";
import deleteAllTasks from "./index-page/task/deleteAllTasks.js";
import editTask from "./index-page/task/editTask.js";
import displayCurrentDate from "./index-page/date-time-info/todayDate.js";
import getDaytime from "./index-page/date-time-info/daytime.js";
import createAndStoreTask from "./index-page/task/createAndStoreTask.js";
import displaySidebar from "./sidebar/displaySidebar.js";
import displaySVG from "./index-page/task/displaySVG.js";
import toggleMode from "./dark-mode/toggleMode.js";
import displayDetails from "./index-page/task/detail-modal/displayDetails.js";
import toggleSound from "./audio-functios/toggleSound.js";

document.addEventListener('DOMContentLoaded', () => {
  const sendButton = document.querySelector('#sendBttn');
  const deleteAllTasksBttn = document.querySelector('.delete-all-tasks-bttn');
  
  // Display main input
  showInput();
  
  // display all tasks
 displayAllTasks();
 displaySVG();
  
  // Delete all tasks
  deleteAllTasksBttn.addEventListener('click', () => {
    deleteAllTasks();
  });
  
  // Edit tasks
  editTask();
  
  // Display current date
  const dateHTML = document.querySelector('.today-date');
  dateHTML.textContent = displayCurrentDate();
  
  // Display current daytime
  getDaytime();
  
  // Create and save user's task in localStorage
  sendButton.addEventListener('click', (event) => {
    createAndStoreTask(event);
  });
  
  // Open/close detail modal
  displayDetails();
  
  // Display sidebar when clicked
  displaySidebar();
  toggleMode();
  toggleSound();
});