import { createFolderElement } from "../dynamic-content/dynamicHTML.js";
import { openDB } from "../../boilerplate/openDatabase.js";

export default function displayAllCollections() {
  // Access database
  const request = openDB('CollectionsDatabase');

  request.onerror = (event) => {
    console.error("An error occurred with IndexedDB", event);
  };

  request.onsuccess = (event) => {
    const db = request.result;
    const transaction = db.transaction(["Collections"]);
    const objectStore = transaction.objectStore(["Collections"]);
    const titles = objectStore.openCursor();
    const collectionDetails = [];

    titles.onsuccess = () => {
      const cursor = titles.result;
      if (cursor) {
        const value = cursor.value;
          const idCollection = value.idCollection;
          const titleCollection = value.nameFormated;
         createFolderElement(idCollection, titleCollection);
    
         collectionDetails.push({ idCollection, titleCollection });
         cursor.continue();
        } else {
          // Fires a custom event when all is loaded into the DOM
          document.dispatchEvent(new CustomEvent('allcollectionsloaded', { detail: collectionDetails })); 
        };
      };
      
    titles.onerror = () => {
      console.log("Cursor error: " + event);
    };
  };
}