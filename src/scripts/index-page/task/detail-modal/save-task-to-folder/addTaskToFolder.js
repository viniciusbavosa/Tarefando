import { openDB } from "../../../../../boilerplate/openDatabase.js";

export default function addTaskToFolder(folderID, taskID) {
  const tasksInFolderSchema = {
    folderID,
    taskID: [],
  };
  const request = openDB('TasksInFoldersDB', 2);
  const updateRequest = openDB('TasksInFoldersDB', 2);


  request.onerror = (event) => {
    console.error("An error occurred with IndexedDB", event);
  };

  request.onupgradeneeded = () => {
    const db = request.result;
    const store = db.createObjectStore('TasksInFolder', { keyPath: 'folderID' });
    store.createIndex('Folder', ['folderID'], { unique: true});
    store.createIndex('Task', ['taskID'], { unique: true });
  };

  request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction('TasksInFolder', 'readwrite');
    const objectStore = transaction.objectStore('TasksInFolder')
      .add(tasksInFolderSchema);
  };

  updateRequest.onerror = (event) => {
    console.error("An error occurred with IndexedDB", event);
  };

  updateRequest.onsuccess = () => {
    const db = updateRequest.result;
    const transaction = db.transaction('TasksInFolder', 'readwrite');
    const objectStore = transaction.objectStore('TasksInFolder')
    const folder = objectStore.get(folderID);
    folder.onsuccess = () => {
        const tasksInFolderData = folder.result;
         if (!tasksInFolderData.taskID.includes(taskID)) {
           tasksInFolderData.taskID.push(taskID);
           objectStore.put(tasksInFolderData);
         }; 
      };
  };
}