import { sendTask } from "../task/sendTask.js";

// Checks if the devide has a max-width of 639px
const mediaQuery = window.matchMedia('(max-width: 639px)');
const newTaskBttn = document.querySelector('.js-new-task-bttn');
const newTaksBttnContainer = document.querySelector('.new-task-bttn-container');


if (mediaQuery.matches) {
  showInput();
} else {
  console.log('Tamanho da tela maior que 639px')
};


function showInput() {
  newTaskBttn.addEventListener('click', () => {
    newTaksBttnContainer.classList.add('animate__animated', 'animate__fadeOut');
    newTaksBttnContainer.outerHTML = `
    <div 
      class="new-task-input-container animate__animated animate__fadeIn"
      style="
        margin: 0px auto;
        margin-bottom: 45px;
        position: fixed;
        top: 91%;
        left: 10%;
        "
      >
        <input type="text" name="task" class="new-task-input" autocomplete="off"
          style="
            background-color: #3F3F3F;
            color: white;
            outline: none;
            border-radius: 12px;
            padding: 8px 35px 8px 8px;
            width: 19rem;
          "
          aria-required="true"
          >
          <button type="submit" style="position: relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="sendBttn" class="feather feather-send" style="position: absolute; bottom: -7px; right: 15px;"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
  </div>`

  sendTask();
  });
};