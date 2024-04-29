const newTaskBttn = document.querySelector('.js-new-task-bttn');
const newTaskBttnContainer = document.querySelector('.new-task-bttn-container');
const newTaskInputContainer = document.querySelector('.new-task-input-container');
const input = document.querySelector('.new-task-input');

export default function showInput() {
  newTaskBttn.addEventListener('click', () => {
    newTaskBttnContainer.classList.add('invisible');
    newTaskInputContainer.classList.remove('invisible');
    input.focus();

    let timeoutId;
    
    input.addEventListener('input', () => {
      // Interrupts the 10-second countdown every time the user types something
      clearTimeout(timeoutId);
      
      // After 10 seconds, if nothing was type in, returns to the original state
      timeoutId = setTimeout(() => {
        newTaskBttnContainer.classList.remove('invisible');
        newTaskInputContainer.classList.add('invisible');
      }, 10000);
    });
  });
}