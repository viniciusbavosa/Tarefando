import { createFolderElement } from "../dynamic-content/dynamicHTML.js";
import storeCollection from "./storeCollection.js";
import updateTitleCollection from "./updateTitleCollection.js";
import displayCollectionModal from "./collection-modal/displayCollectionModal.js";
import playSuccessAudio from "../audio-functios/sucessAudio.js";

/*
# This function has 3 main behaviors:
- Creates ID for each collection folder
- Creates and inserts the folder's html element into the DOM
- Stores the collection title
*/
export default function createCollection() {
  const createCollectionBttn = document.querySelector('.js-new-collection-bttn');

  const createCollectionHandler = () => {
    const idCollection = crypto.randomUUID();
    createFolderElement(idCollection, '');
    playSuccessAudio();
    
    const collectionName = document.getElementById(`collection-name-${idCollection}`);
    
    collectionName.focus();
    collectionName.removeEventListener('focusout', focusOutHandler);
    collectionName.addEventListener('focusout', () => focusOutHandler(collectionName, idCollection));
  };

  const focusOutHandler =  (collectionName, idCollection) => {
    const collectionTitle = collectionName.textContent;
    storeCollection(idCollection, collectionTitle);
    updateTitleCollection(idCollection, collectionTitle);
    displayCollectionModal(idCollection);
  };

  createCollectionBttn.removeEventListener('click', createCollectionHandler);
  createCollectionBttn.addEventListener('click', createCollectionHandler);
}