const newTaskBttn = document.querySelector('.js-new-task-bttn');
const newTaskBttnContainer = document.querySelector('.new-task-bttn-container');
const newTaskInputContainer = document.querySelector('.new-task-input-container');
const input = document.querySelector('.new-task-input');

export default function showInput() {
  newTaskBttn.addEventListener('click', () => {
    newTaskBttnContainer.classList.add('invisible');
    newTaskInputContainer.classList.remove('invisible');
    input.focus();

  // After 10 seconds without changes, returns to original state
  setTimeout(() => {
    newTaskBttnContainer.classList.remove('invisible');
    newTaskInputContainer.classList.add('invisible');
  }, 10000);
  });
}