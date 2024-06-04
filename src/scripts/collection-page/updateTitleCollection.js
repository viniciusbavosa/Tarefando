import { openDB } from "../../boilerplate/openDatabase.js";
import limitCollectionTitleLength from "./limitCollectionTitleLength.js";
export default function updateTitleCollection() {
  const parentElement = document.querySelector('.list-folder-collection-container');
  
  const options = { characterData: true, subtree: true };

  const observer = new MutationObserver((mutations) => {
  
    mutations.forEach((mutation) => {
      const wordToRemove = ["collection-name-"];
       const id = `${mutation.target.parentElement.id}`;
       const regex = new RegExp(`\\b(${wordToRemove.join('|')})\\b`, 'gi');
       const idRaw = id.replace(regex, '');
       const idFormated = idRaw.replace(/\s+/g, '').trim();
       const updatedTitleCollection = `${mutation.target.textContent}`;
       const updatedTitleCollectionFormated = updatedTitleCollection.trim();
       const request = openDB('CollectionsDatabase');
 
       request.onerror = () => {
         console.log('Erro ao editar tarefa' + request.error);
       };
       
       request.onsuccess = () => {
         const db = request.result;
         const transaction = db.transaction(["Collections"], "readwrite");
         const objectStore = transaction.objectStore("Collections");
         const collectionRequest =  objectStore.get(idFormated);
         
         collectionRequest.onsuccess = () => {
           const collection = collectionRequest.result;
           if (collection) {
             const newTitle = {...collection, nameFormated: updatedTitleCollectionFormated }
             objectStore.put(newTitle);
           };
         };
 
         collectionRequest.onerror = () => {
           console.log('Erro ao acessar objetos da loja' + collectionRequest.error);
         };
       };
    });
   });
 
   observer.observe(parentElement, options);
}