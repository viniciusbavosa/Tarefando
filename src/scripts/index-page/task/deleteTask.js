import { animateDeleteBttn } from "../../dynamic-content/dynamicHTML.js";
import { openDB } from "../../../boilerplate/openDatabase.js";

export function deleteTask() {
  const checkBttns = document.querySelectorAll('.check-bttn');

  if(checkBttns) {
    // Iterates through each check button and apply hover efect
    checkBttns.forEach((checkBttn) => {
      checkBttn.addEventListener('mouseenter', () => {
        checkBttn.style.backgroundColor='#FFFFFF65'
      });

      checkBttn.addEventListener('mouseleave', () => {
        checkBttn.style.backgroundColor='transparent'
      });

      // Remove task from localStorage and from screen
      checkBttn.addEventListener('click', () => {
        const id = checkBttn.dataset.id;
        const request = openDB('TasksDatabase');
        const requestTaskInFolderDB = openDB('TasksInFoldersDB', 2);

        request.onerror = (event) => {
          console.error("An error occurred with IndexedDB", event);
        };

        request.onsuccess = (event) => {
          const db = request.result
            .transaction(["Tasks"], "readwrite")
            .objectStore(["Tasks"])
            .delete(id);
            };

        requestTaskInFolderDB.onerror = (event) => {
        console.error("An error occurred with IndexedDB", event);
          };

        requestTaskInFolderDB.onsuccess = (event) => {
          const db = requestTaskInFolderDB.result;
          const transaction = db.transaction("TasksInFolder", "readwrite");
          const objectStore = transaction.objectStore("TasksInFolder");
          const getRequest = objectStore.getAll();

          getRequest .onsuccess = (event) => {
            let data = event.target.result;
            data.forEach((folder, index) => {
              const updatedTaskIDs = folder.taskID.filter(taskID => taskID !== id);
              data = { ...data[index], taskID: updatedTaskIDs};
              const updateRequest = objectStore.put(data);
            });
          };
        };
        animateDeleteBttn(checkBttn);
      });
    });
  };
};