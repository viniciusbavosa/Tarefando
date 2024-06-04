import { openDB } from "../../../../boilerplate/openDatabase.js";

export default function getTaskDetail(taskId, callback) {
  const requestDetails = openDB('TasksDatabase');

  requestDetails.onerror = () => {
    console.log('Erro ao requerer detalhes da tarefa ' + requestDetails.error);
  };

  requestDetails.onsuccess = () => {
    const db = requestDetails.result
      .transaction('Tasks', "readonly")
      .objectStore('Tasks')
      .get(taskId)
      .onsuccess = (event) => {
        const { details } = event.target.result.body;
        callback(details);
      };
  };
}