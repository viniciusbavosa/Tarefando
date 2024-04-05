import { styleCheckBttn } from "./deleteTask.js";
export function displayTask(data) {
  const body = document.querySelector('.mobile-body-container');
  const newElement = document.createElement('div');
    newElement.classList.add('task-container');
    newElement.style.backgroundColor = '#798570';
    newElement.style.display = 'flex';
    newElement.style.flexDirection = 'flex-row';
    newElement.style.width = '343px';
    newElement.style.height = '0';
    newElement.style.minHeight = '60px'
    newElement.style.borderRadius = '8px';
    newElement.style.padding = '6px 16px';
    newElement.style.margin = '6px auto'
    newElement.style.justifyContent = 'center';
    newElement.style.alignItems = 'center';
    newElement.style.overflow = 'auto';
    newElement.innerHTML = data.task
    body.appendChild(newElement);
    styleCheckBttn(newElement);
};