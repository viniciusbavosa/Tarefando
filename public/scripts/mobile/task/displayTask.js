import { deleteTask } from "./deleteTask.js";
export function displayTask(data) {
  const body = document.querySelector('.mobile-body-container');
  const newElement = document.createElement('div');
  
  const styles = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'flex-row',
    backgroundColor: '#798570',
    width: '343px',
    minHeight: '60px',
    borderRadius: '8px',
    padding: '6px 16px',
    margin: '6px auto',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'wrap',
    textWrap: 'wrap',
    wordBreak: 'break-word',
  };
    newElement.classList.add('task-container');
    for (let property in styles) {
      newElement.style[property] = styles[property];
    }
    newElement.innerHTML = data.task;
    body.appendChild(newElement);
    deleteTask();
};