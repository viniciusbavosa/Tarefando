import sidebar from "./openSidebar.js";
import { showCollectionInput } from "./showCollectionInput.js";
  sidebar.innerHTML = `
  <ul 
    style="
      display: flex;
      flex-direction: column;
      color: white;
      overflow: hidden;
      position: absolute;
      font-size: 24px;
      height: 30%;
      top: 80px;
      left: 16px;
      white-space: collapse pretty;
      justify-content: space-evenly;
    "
    >
    <a href="/">
      <li>Início</li>
    </a>
    <a href="#">
      <li>Coleções</li>
    </a>
    <a href="#">
      <li>Calendário</li>
    </a>
    <a href="#">
      <li>Preferências</li>
    </a>
  </ul>
  <button type="button" class="js-create-collection-bttn create-collection-bttn-container">
    <div class="collection-bttn">
      <p> 
      Criar coleção
      </p>
    </div>
  </button>
  `
  const collectionBttn = document.querySelector('.js-create-collection-bttn');
  if (collectionBttn) {
    collectionBttn.addEventListener('click', () => {
      showCollectionInput(collectionBttn);
    });
  }
