import { createDetailModal } from "../../../dynamic-content/dynamicHTML.js";
import manipulateDetailsModal from "./manipulateDetailsModal.js";
import { displayCreatedDate } from "./date-time-info-details/timestamps-details.js";
import { openDB } from "../../../../boilerplate/openDatabase.js";
import getTaskDetail from "./getTaskDetail.js";
import displayFoldersAvailable from "./save-task-to-folder/displayChipsModal.js";
import { displayUpdatedDate } from "./date-time-info-details/timestamps-details.js";

export default function displayDetails() {
  const homepage = document.querySelector('.homepage-container');
  const tasks = document.querySelectorAll('.task-container');
  const overlay = document.querySelector('.overlay-detail-modal');

  // Checks if there's any task in the DOM, if true, iterates through it and adds an event listener to each one
  if (tasks) {
    tasks.forEach((task) => {
      task.addEventListener('click', (event) => {

        // Checks if the clicked element was 'li' and not its children
        if (event.target.tagName === "LI") {

          // Stores task's id
          const taskId = task.firstChild.dataset.id;
          const callbackDetails = (details) => {
            homepage.insertAdjacentHTML('beforeend', createDetailModal(taskId, details));
            displayCreatedDate(taskId);
          };
          
          getTaskDetail(taskId, callbackDetails);

          const request = openDB('TasksDatabase');
          
          request.onerror = () => {
            console.log("Erro ao abrir DB" + request.error)
          };
          
          request.onsuccess = () => {
            const db = request.result
              .transaction("Tasks", "readwrite")
              .objectStore("Tasks")
              .get(taskId)
              .onsuccess = (event) => {
                const { title } = event.target.result.body;
                manipulateDetailsModal(taskId, title);
                displayFoldersAvailable();
                displayUpdatedDate()
              };
            };
        
          // Display overlay
          overlay.classList.remove('animate__fadeOut', 'hidden');
          overlay.classList.add('animate__fadeIn', 'block');
        };
      }); 
    });
  };
}