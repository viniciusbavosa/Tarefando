import showInput from "./input/showInput.js"
import { displayAllTasks } from "./task/displayAllTasks.js";
import deleteAllTasks from "./task/deleteAllTasks.js";
import editTask from "./task/editTask.js";
import displayCurrentDate from "./date-time-info/todayDate.js";
import getDaytime from "./date-time-info/daytime.js";
import createAndStoreTask from "./task/createAndStoreTask.js";
import displaySidebar from "./sidebar/displaySidebar.js";
import displaySVG from "./task/displaySVG.js";
import toggleMode from "./dark-mode/toggleMode.js";
import displayDetails from "./task/detail-modal/displayDetails.js";

const sendButton = document.querySelector('#sendBttn');
const deleteAllTasksBttn = document.querySelector('.delete-all-tasks-bttn');


// Display main input
showInput();

// When the page loads, display all tasks
window.onload = displayAllTasks();

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
  sessionStorage.setItem('svgHidden', 'true');
});

// Open/close detail modal
displayDetails();

// Display sidebar when clicked
displaySidebar();
toggleMode();