import { openDB } from "./openDatabase.js";
export function openTasksInFolderDatabase() {
  const request = openDB('TasksInFoldersDB', 2);

  request.onerror = (event) => {
    console.error("An error occurred with IndexedDB", event);
  };

  request.onupgradeneeded = () => {
    const db = request.result;
    const store = db.createObjectStore('TasksInFolder', { keyPath: 'folderID' });
    store.createIndex('Folder', ['folderID'], { unique: true});
    store.createIndex('Task', ['taskID'], { unique: true });
  };
}