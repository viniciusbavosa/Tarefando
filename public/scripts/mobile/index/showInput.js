import { sendTask } from "../task/sendTask.js";
import { onFocus } from "./onFocus.js";

// Checks if the devide has a max-width of 639px
const mediaQuery = window.matchMedia('(max-width: 639px)');
const newTaskBttn = document.querySelector('.js-new-task-bttn');
const newTaskBttnContainer = document.querySelector('.new-task-bttn-container');


if (mediaQuery.matches) {
  showInput();
} else {
  console.log('Tamanho da tela maior que 639px')
};


export function showInput() {
  newTaskBttn.addEventListener('click', () => {
    newTaskBttnContainer.classList.add('animate__animated', 'animate__fadeOut');
    newTaskBttnContainer.outerHTML = `
    <div class="new-task-input-container animate__animated animate__fadeIn">
        <input type="text" name="task" class="new-task-input" autocomplete="off">
          <button type="submit" style="position: relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="sendBttn" class="feather feather-send" style="position: absolute; bottom: -7px; right: 15px;"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
  </div>`
  onFocus(); 
  sendTask();
  });
};