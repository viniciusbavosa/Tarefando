import { openDB } from "../../../boilerplate/openDatabase.js"
import { createSVGIndex, createSVGCollections, createSidebarSVG } from "../../../assets/svg/createSVG.js";
export default function displaySVG() {
  const homepage = document.querySelector('.homepage-container');
  const illustration = document.querySelector('.illustration-homepage'); 
  const homeCollections = document.querySelector('.homepage-collections-container');
  const sidebar = document.querySelector('.sidebar');
  const requestTasks = openDB('TasksDatabase');
  const requestCollections = openDB('CollectionsDatabase');

  sidebar.insertAdjacentHTML('beforeend', createSidebarSVG());

  requestTasks.onerror = (event) => {
    console.log('Erro ao conectar ao banco de davos' + event);
  };

  requestTasks.onsuccess = () => {
    const db = requestTasks.result
      .transaction('Tasks')
      .objectStore('Tasks')
      .getAll()
      .onsuccess = (event) => {
        const data = event.target.result;
        if (!data.length && homepage) {
          homepage.insertAdjacentHTML('beforeend', createSVGIndex());
        };
      };
  };

  requestCollections.onerror = (event) => {
    console.log('Erro ao conectar ao banco de davos' + event);
  };

  requestCollections.onsuccess = () => {
    const db = requestCollections.result
      .transaction('Collections')
      .objectStore('Collections')
      .getAll()
      .onsuccess = (event) => {
        const data = event.target.result;
        if (!data.length && homeCollections) {
          homeCollections.insertAdjacentHTML('beforeend', createSVGCollections());
        };
      };
  };
}