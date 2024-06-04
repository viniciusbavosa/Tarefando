import { openDB } from "../../../../boilerplate/openDatabase.js";
import { displayUpdatedDate } from "./date-time-info-details/timestamps-details.js";

export default function manipulateDetailsModal(taskId, taskValue) {
  const modalElement = document.querySelectorAll('.detail-modal-container');
  const closeModal = document.querySelectorAll('.detail-modal-close-bttn');
  const overlay = document.querySelector('.overlay-detail-modal');
  const detailsText = document.querySelector('.detail-modal-text');

  detailsText.addEventListener('input', () => {
    const detailsTextFormated = detailsText.value.trim();
    const request = openDB('TasksDatabase');
      request.onerror = () => {
        console.log('Erro ao abrir banco de dados ' + request.error);
      };
      
      request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction("Tasks", "readwrite");
        const objectStore = transaction.objectStore("Tasks");
        const task = objectStore.get(taskId);

        task.onsuccess = (event) => {
            const task = event.target.result;
            if (task) {
              const newTaskDetail = { 
                ...task, 
                body: {
                  ...task.body,
                  details: detailsTextFormated,
                }
               };
              objectStore.put(newTaskDetail);
              displayUpdatedDate();
            };
          };
         
          task.onerror = () => {
            console.log('Erro ao acessar loja de objetos ' + task.error);
          };
      };
    });

    modalElement.forEach((detailModal) => {

      detailModal.classList.remove('invisible', 'animate__slideOutRight');
      detailModal.classList.add('animate__slideInRight');
      
      // Display task value as title
      detailModal.children[0].children[0].textContent = taskValue;
      
      // Hide detail modal
      closeModal.forEach((closeBttn) => {
        closeBttn.addEventListener('click', () => {
          detailModal.classList.remove('animate__slideInRight');
          detailModal.classList.add('animate__slideOutRight');
          
          overlay.classList.add('animate__fadeOut');
          overlay.classList.remove('animate__fadeIn', 'block');
          
          setTimeout(() => {
            detailModal.remove();
            overlay.classList.add('hidden');
          }, 900);
        });
      });
    });
    }
