import { deleteTask } from "../task/deleteTask.js";

// This file stores HTML elements that are created dynamically with JavaScript

// Create task card
function createTaskElement(value, id, timestamp) {
    
    const list = document.querySelector('.list');
    const newElement = document.createElement('li');
    newElement.classList.add('task-container', 'bg-green', 'animate__animated', 'animate__fadeIn');
  
    newElement.innerHTML = `<p
      class="task-title"
      contenteditable="true"
      data-id="${id}"
      data-timestamp="${timestamp}"
      >
      ${value}
      </p>
      <button
      data-id="${id}"
      role="checkbox"
      aria-checked="false"
      tabindex="0" 
      class="check-bttn"
      ></button>`;

    list.insertAdjacentElement('beforeend', newElement) ;
    deleteTask();  
};
  
  // Animate delete button for tasks
function animateDeleteBttn(checkBttn) {
  const svgCheckMark = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position: absolute; right:25px;" class="feather feather-check"><polyline points="20 6 9 17 4 12"/></svg>'
  
  checkBttn.style.backgroundColor="#F3F3F3";
  checkBttn.insertAdjacentHTML("afterend", svgCheckMark);
  const parentElement = checkBttn.closest('.task-container');

  const taskContent = checkBttn.previousElementSibling;
  taskContent.style.textDecoration = 'line-through';

  parentElement.style.backgroundColor ='#92929280';
  parentElement.classList.add('animate__animated', 'animate__fadeOut')
  setTimeout(() => {
    parentElement.remove();
  }, 1000);
};

export {
  createTaskElement,
  animateDeleteBttn,
};