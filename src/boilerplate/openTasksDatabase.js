import { openDB } from "./openDatabase.js";

export function openTasksDatabase() {
  const request = openDB('TasksDatabase');
  
  request.onupgradeneeded = (event) => {
    const db = request.result;
    const store = db.createObjectStore('Tasks', { keyPath: 'id' });
    store.createIndex('title', ['body.title'], { unique: false});
    store.createIndex('details', ['body.details'], { unique: false});
    store.createIndex('timestamp', ['body.timestamp'], { unique: false});
    store.createIndex('id', ['id'], { unique: true });
  };
}