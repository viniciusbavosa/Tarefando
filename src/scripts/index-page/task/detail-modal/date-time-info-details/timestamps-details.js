import setTimeStamps from "../../../date-time-info/timeStamps.js";
import { openDB } from "../../../../../boilerplate/openDatabase.js";

function displayCreatedDate(taskId) {
  const createdElement = document.querySelectorAll('.created-timestamp');
  createdElement.forEach((createdEl) => {
    const request = openDB('TasksDatabase');

    request.onerror = () => {
      console.log('Erro ao abrir uma conexão com o DB ' + request.error);
    };

    request.onsuccess = () => {
      const db = request.result
        .transaction('Tasks', "readonly")
        .objectStore('Tasks')
        .get(taskId)
        .onsuccess = (event) => {
          const createdOn = event.target.result.body.timestamp;
          createdEl.textContent = `Criado em: ${createdOn}`;
        };
    };
  });
}

function displayUpdatedDate() {
  const updatedElement = document.querySelectorAll('.update-timestamp');
  const updatedOn = setTimeStamps();
  updatedElement.forEach((updatedEl) => {
    updatedEl.textContent = `Atualizado em: ${updatedOn}`;
  });
}

export {
  displayCreatedDate,
  displayUpdatedDate
}