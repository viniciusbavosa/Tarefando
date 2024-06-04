import { openDB } from "../../../../boilerplate/openDatabase.js";
import deleteTaskInFolder from "./deleteSavedTasks.js";

export default function displaySavedTasks(folderID) {
  const tasklist = document.querySelector('.tasklist');

  // Insert HTML tasks on the DOM
  const getTaskID = (taskID) => {
    const taskIDsArray = taskID;
    taskIDsArray.forEach((task) => {
      const requestTaskTitle = openDB('TasksDatabase');

      requestTaskTitle.onerror = (event) => {
        console.error("An error occurred with IndexedDB", event);
      };
      
      requestTaskTitle.onsuccess = () => {
        const db = requestTaskTitle.result
        .transaction('Tasks')
        .objectStore('Tasks')
        .get(task)
        .onsuccess = (event) => {
          const taskTitle = event.target.result.body.title;
          const taskID = event.target.result.id;
          if (taskTitle && taskID) {
            const taskHTML = ` <li class="task-inside-folder-item flex justify-between items-center p-4 border-b border-[#DCD6E0] dark:border-on-surface-light-elevation">
            <span class="text-lg max-w-52">${taskTitle}</span>
            <button
            title="Clique para excluir"
            role="checkbox"
            aria-checked="false"
            tabindex="0" 
            class="
            task-inside-folder-delete-bttn
            bg-transparent
            w-[45px]
            h-[45px]
            outline
            outline-black
            outline-1
            rounded-2xl
            ml-auto
            dark:outline-white
            "
            data-id="${taskID}"
            ></button>
            </li>`;
            
            tasklist.insertAdjacentHTML('beforeend', taskHTML);
            deleteTaskInFolder(folderID);
          };
        };
      };
    });
  };

  // Get tasks inside folder
  const requestTaskInFolder = openDB('TasksInFoldersDB', 2);

  requestTaskInFolder.onerror = (event) => {
    console.error("An error occurred with IndexedDB", event);
  };

  requestTaskInFolder.onsuccess = () => {
    const db = requestTaskInFolder.result
      .transaction('TasksInFolder')
      .objectStore('TasksInFolder')
      .get(folderID)
      .onsuccess = (event) => {
        const id = event.target.result;
        if (id) {
          getTaskID(id.taskID);
        };
      };
  };
}