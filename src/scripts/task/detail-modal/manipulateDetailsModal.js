import { createDetailModal } from "../../dynamic-content/dynamicHTML.js";

export default function manipulateDetailsModal(taskId, taskValue, detailsValue) {
  const detailsElement = document.querySelector('.detail-modal-container');
  const closeModal = document.querySelector('.detail-modal-close-bttn');
  const homepage = document.querySelector('.homepage-container');
  const overlay = document.querySelector('.overlay-detail-modal');

  if (!detailsElement) {
    const detailElementHTML = createDetailModal(taskId, detailsValue);
    homepage.insertAdjacentHTML('beforeend', detailElementHTML);
    manipulateDetailsModal(taskId, taskValue, detailsValue); // Recursion
  } else {
    detailsElement.classList.remove('invisible', 'animate__slideOutRight');
    detailsElement.classList.add('animate__slideInRight');

    // Display task value as title
    detailsElement.children[0].children[0].textContent = taskValue;
    
    // Hide detail modal
    closeModal.addEventListener('click', () => {
      detailsElement.classList.remove('animate__slideInRight');
      detailsElement.classList.add('animate__slideOutRight');
      
      overlay.classList.add('animate__fadeOut');
      overlay.classList.remove('animate__fadeIn', 'block');
      
      setTimeout(() => {
        detailsElement.remove();
        overlay.classList.add('hidden');
      }, 1000);
    });
  };
}
