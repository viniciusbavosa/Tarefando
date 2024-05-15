import manipulateDetailsModal from "./manipulateDetailsModal.js";
import storesDetails from "./storesDetail.js";
import { displayCreatedDate, displayUpdateDate } from "./date-time-info-details/timestamps-details.js";

export default function displayDetails() {
  const tasks = document.querySelectorAll('.task-container');
  const overlay = document.querySelector('.overlay-detail-modal');
  

 
  // Checks if there's any task in the DOM, if true, iterates through it and adds an event listener to each one
  if (tasks) {
    tasks.forEach((task) => {
      task.addEventListener('click', (event) => {
        // Checks if the clicked element was 'li' and not its children
        if (event.target.tagName === "LI") {

          // Stores the id of its task
          const taskId = task.firstChild.dataset.id;
          
          // Stores the value of the task
          const taskValue = localStorage.getItem(`${taskId}`);
          const taskValueFormated = JSON.parse(taskValue); // Converts from JSON to string
          
          // Display overlay
          overlay.classList.remove('animate__fadeOut', 'hidden');
          overlay.classList.add('animate__fadeIn', 'block');
          
          // Stores details modal value
          const detailsValue = localStorage.getItem(`${taskId}-details`);
          const detailsValueFormated = JSON.parse(detailsValue);

          // Display update date if exists
          function hasValueInLocalStorage() {
            const updatedElement = document.querySelector('.update-timestamp');
            const updatedOn = localStorage.getItem(`${taskId}-details-updated-date`);
            const updateOnFormated = JSON.parse(updatedOn);
            
            if (updateOnFormated) {
              updatedElement.textContent = `Atualizado em: ${updateOnFormated}`;
            } else {
              updatedElement.textContent = `Atualizado em: -`;
            };
          }

          manipulateDetailsModal(taskId, taskValueFormated, detailsValueFormated);
          storesDetails();
          displayCreatedDate(task);
          displayUpdateDate(taskId);
          hasValueInLocalStorage();
        };
      }); 
    });
  };
}