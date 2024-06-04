import { openBookmarkModal } from "../../../../dynamic-content/dynamicHTML.js";
import { openDB } from "../../../../../boilerplate/openDatabase.js";
import addTaskToFolder from "./addTaskToFolder.js";

export default function displayFoldersAvailable() {
  const bookmarksIcons = document.querySelectorAll('.bookmark-collection');

  bookmarksIcons.forEach((bookmark) => {
    bookmark.addEventListener('click', () => {
      openBookmarkModal();
      const taskID = bookmark.dataset.task;

      // Busca os dados das pastas no IndexedDB
      const request = openDB('CollectionsDatabase');
      request.onerror = (event) => {
        console.error("An error occurred with IndexedDB", event);
      };
      request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction('Collections');
        const objectStore = transaction.objectStore('Collections');
        const folders = objectStore.getAll();

        folders.onsuccess = () => {
          const folderData = folders.result;
          if (folderData) {
            const foldersList = document.getElementById('foldersList');

            if (foldersList) { // Verifica se o elemento existe antes de inserir HTML nele
              folderData.forEach((folder) => {
                const folderHTML = `<li><button class="chip" data-folder="${folder.idCollection}">${folder.nameFormated}</button></li>`;
                foldersList.insertAdjacentHTML('beforeend', folderHTML);
              });
              // Adiciona evento de clique para os botões de pasta
              foldersList.querySelectorAll('.chip').forEach(button => {
                button.addEventListener('click', () => {
                  addTaskToFolder(button.dataset.folder, taskID);
                  // Aplica a classe .chip-confirmed ao chip clicado
                  button.classList.add('chip-confirmed');
                });
              });
            };
          };
        };
      };
    });
  });
}