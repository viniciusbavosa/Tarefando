import { openDB } from "../../boilerplate/openDatabase.js";
export default function deleteAllCollections() {
  const modal = document.querySelector('dialog');
  const trashCan = document.getElementById('confirm-bttn');
  const cancelBttn = document.querySelector('#cancel-bttn');

  modal.showModal();

  trashCan.addEventListener('click', (event) => {

    event.preventDefault();
    
    // Access database
    const request = openDB('CollectionsDatabase');

    request.onerror = (event) => {
      console.error("An error occurred with IndexedDB", event);
    };

    request.onsuccess = () => {
      const db = request.result
        .transaction("Collections", "readwrite")
        .objectStore("Collections")
        .clear();
    };

    const requestTaskInFolderDB = openDB('TasksInFoldersDB', 2);

    requestTaskInFolderDB.onerror = (event) => {
      console.error("An error occurred with IndexedDB", event);
    };

    requestTaskInFolderDB.onsuccess = () => {
      const db = requestTaskInFolderDB.result
      .transaction("TasksInFolder", "readwrite")
      .objectStore("TasksInFolder")
      .clear()
      .onsuccess = () => {
        window.location.reload();
        modal.close();
        };
    };
    
  });
  
  cancelBttn.addEventListener('click', () => {
    modal.close();
  });
}