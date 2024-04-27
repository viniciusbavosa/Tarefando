import { deleteTask } from "../task/deleteTask.js";

// This file stores HTML elements that are created dynamically with JavaScript

// Create task card
function createTaskElement(value, id, timestamp) {

    const list = document.querySelector('.list');
    const newElement = document.createElement('li');
    newElement.classList.add('task-container', 'bg-green', 'animate__animated', 'animate__fadeIn');
  
    newElement.innerHTML = `<p
      class="task-title"
      data-id="${id}"
      data-timestamp="${timestamp}"
      contenteditable="true"
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


function displayCollectionInput() {
  const element = 
  `
  <div 
    class="create-collection-input-container animate__animated animate__fadeIn"
    >
      <input type="text" name="collection" class="create-collection-input" autocomplete="off" aria-required="true">
        <button type="submit" style="position: relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus" id="send-bttn" style="position: absolute; bottom: -7px; right: 15px;"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
</div>
`
return element;
};


export {
  createTaskElement,
  animateDeleteBttn,
  displayCollectionInput,
};