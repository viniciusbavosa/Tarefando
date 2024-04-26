import showInput from "./input/showInput.js"
import { displayAllTasks } from "./task/displayAllTasks.js";
import displayCurrentDate from "./date-time-info/todayDate.js";
import getDaytime from "./date-time-info/daytime.js";
import createAndStoreTask from "./task/createAndStoreTask.js";
import displaySidebar from "./sidebar/displaySidebar.js";
import displaySVG from "./task/displaySVG.js";
import toggleMode from "./light-mode/toggleMode.js"

const sendButton = document.querySelector('#sendBttn');

// Checks if the devide has a max-width of 768px
const mediaQuery = window.matchMedia('(max-width: 1024px)');

// Display main input
showInput();

// When the page loads, calls the function
window.onload = displayAllTasks();

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

// Display sidebar when clicked
displaySidebar();
toggleMode();