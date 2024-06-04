import { createFolderModal } from "../../dynamic-content/dynamicHTML.js";
import displaySavedTasks from "./content/displaySavedTasks.js";
import closeCollectionModal from "./closeCollectionModal.js";

export default function displayCollectionModal(id) {
  const folder = document.getElementById(id);
  const folderID = folder.dataset.idCollection;
  const homepageEl = document.querySelector('.homepage-collections-container');
  const overlay = document.querySelector('.overlay-collection-folder-modal');
  let collectionFolder;
 
  const openCollectionHandler = (event) => {
    if (event.target.tagName === "BUTTON" || event.target.tagName === "svg") {
      overlay.classList.toggle('hidden', false);
      overlay.classList.toggle('animate__fadeOut', false);
      overlay.classList.toggle('animate__fadeIn', true);
      
      const title = folder.textContent;
      homepageEl.insertAdjacentHTML('beforeend', createFolderModal(folderID, title));

      collectionFolder = document.querySelector('.folder-contents-modal-container');
      collectionFolder.classList.toggle('hidden', false);
      collectionFolder.classList.toggle('flex', true);
      collectionFolder.classList.toggle('animate__slideOutRight', false);
      collectionFolder.classList.toggle('animate__slideInRight', true);
      displaySavedTasks(folderID);
      closeCollectionModal(collectionFolder, overlay);
      };
  };
  folder.removeEventListener('click', openCollectionHandler);
  folder.addEventListener('click', openCollectionHandler);
}