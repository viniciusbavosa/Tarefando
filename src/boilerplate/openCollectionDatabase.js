import { openDB } from "./openDatabase.js";

export function openCollectionDatabase() {
  const request = openDB('CollectionsDatabase');

  request.onerror = (event) => {
    console.error("An error occurred with IndexedDB", event);
  };

  request.onupgradeneeded = (event) => {
    const db = request.result;
    const store = db.createObjectStore('Collections', { keyPath: 'idCollection' });
    store.createIndex('title', ['nameFormated'], { unique: false});
    store.createIndex('id', ['idCollection'], { unique: true });
  };
}
