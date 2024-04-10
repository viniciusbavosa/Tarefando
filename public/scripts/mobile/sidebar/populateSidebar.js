import sidebar from "./openSidebar.js";
import { showCollectionInput } from "./showCollectionInput.js";
  sidebar.innerHTML = `
  <ul 
    class="
    flex
    flex-col
    flex-nowrap
    overflow-hidden
    w-full
    absolute
    justify-between
  text-white
    "
    style="
    font-size: 25px;
    height: 20%;
    top: 80px;
    left: 16px;
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
