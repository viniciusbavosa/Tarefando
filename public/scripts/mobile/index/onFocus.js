import { showInput } from "./showInput.js";

export function onFocus() {
  const taskInput = document.querySelector('.new-task-input');
  const taskInputContainer = document.querySelector('.new-task-input-container');
  taskInput.addEventListener('focusin', () => {
    taskInput.classList.add('onfocus');
  });

  taskInput.addEventListener('focusout', () => {
    taskInput.classList.remove('onfocus');
  //   taskInputContainer.outerHTML = `<div 
  //   class="
  //     new-task-bttn-container
  //     bg-black
  //     inline-flex
  //     flex-row
  //     flex-nowrap
  //     outline
  //     outline-1
  //     outline-white
  //     absolute
  //     w-[46px]
  //     h-[46px]
  //     top-[90%]
  //     rounded-xl
  //     justify-center
  //     self-center
  //     shadow-md
  //     shadow-black
  //     "
  // >
  //   <button
  //     type="button"
  //     class="js-new-task-bttn"
  //     >
  //     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
  //   </button>
  // </div>`;
  // const newTaskBttnContainer = document.querySelector('.new-task-bttn-container');
  // newTaskBttnContainer ? showInput() : console.log('erro')
});
};