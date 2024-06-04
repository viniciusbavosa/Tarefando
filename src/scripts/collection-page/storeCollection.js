import { openDB } from "../../boilerplate/openDatabase.js";
export default function storeCollection(idCollection, name) {
  const nameFormated = name.trim();
    const collectionsData = { idCollection, nameFormated };
 
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

  request.onsuccess = (event) => {
    const db = request.result;
    const transaction = db.transaction('Collections', 'readwrite');
    const store = transaction.objectStore('Collections');
    const idIndex = store.index('id');
    const nameIndex = store.index('title');

    store.add(collectionsData);
  };
}