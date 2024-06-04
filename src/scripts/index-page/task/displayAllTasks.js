import { createTaskElement } from "../../dynamic-content/dynamicHTML.js";
import { deleteTask } from "./deleteTask.js";
import { openDB } from "../../../boilerplate/openDatabase.js";
import { displayUpdatedDate } from "./detail-modal/date-time-info-details/timestamps-details.js";

export function displayAllTasks() {

  const request = openDB('TasksDatabase');

  request.onerror = (event) => {
    console.error("An error occurred with IndexedDB", event);
  };

  request.onsuccess = (event) => {
    const db = request.result;
    const transaction = db.transaction(["Tasks"]);
    const objectStore = transaction.objectStore(["Tasks"]);
    const tasks = objectStore.openCursor();

    tasks.onsuccess = () => {
      const cursor = tasks.result;
      if (cursor) {
        const { title, details, timestamp } = cursor.value.body;
        const { id } = cursor.value;
        createTaskElement(title, id, timestamp);
        displayUpdatedDate();
        cursor.continue();
      };
    };

    tasks.onerror = () => {
      console.log('Erro ao acessar objetos da loja' + tasks.error);
    };
  };

  deleteTask();
};