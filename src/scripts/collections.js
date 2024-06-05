import displaySidebar from "./sidebar/displaySidebar.js";
import toggleMode from "./dark-mode/toggleMode.js";
import createCollection from "./collection-page/createCollection.js";
import displayAllCollections from "./collection-page/displayAllCollections.js";
import updateTitleCollection from "./collection-page/updateTitleCollection.js";
import deleteAllCollections from "./collection-page/deleteAllCollections.js";
import displayCollectionModal from "./collection-page/collection-modal/displayCollectionModal.js";
import toggleSound from "./audio-functios/toggleSound.js";
import displaySVG from "./index-page/task/displaySVG.js";

document.addEventListener('DOMContentLoaded', () => {
  const deleteAllCollectionsBttn = document.querySelector('.delete-all-collections-bttn');
  const body = document.body;
  const SunIcon = document.querySelector('.sun-container');
  const MoonIcon = document.querySelector('.moon-container');

  if (localStorage.getItem('dark-mode')) {
    body.classList.add('dark');
    SunIcon.classList.remove('invisible');
    MoonIcon.classList.add('invisible');
  } else {
    body.classList.remove('dark');
  };

  displayAllCollections();
  displaySVG();
  // Delete all tasks
  deleteAllCollectionsBttn.addEventListener('click', () => {
   deleteAllCollections();
 });
 
  // Listen for a custom Event and update collection titles
  document.addEventListener('allcollectionsloaded', (event) => {
    const collectionDetails = event.detail;
    for (let collection of collectionDetails) {
      const { idCollection } = collection;
      displayCollectionModal(idCollection);
    };
  });

  updateTitleCollection();
  
  // Sidebar and Dark mode
  displaySidebar();
  toggleMode();
  toggleSound();
  createCollection();
});