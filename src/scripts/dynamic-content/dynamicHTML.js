import { deleteTask } from "../index-page/task/deleteTask.js";
import displayDetails from "../index-page/task/detail-modal/displayDetails.js";
import { closeBookmarkModal } from "../index-page/task/detail-modal/save-task-to-folder/closeBookmarkModal.js";

// This file stores HTML elements that are created dynamically with JavaScript

function createTaskElement(value, id, timestamp) {
    const illustration = document.querySelector('.illustration-homepage');
    const list = document.querySelector('.list');
    const newElement = document.createElement('li');
    newElement.classList.add('task-container', 'bg-green', 'animate__animated', 'animate__fadeIn');
    newElement.setAttribute('title', 'Clique para abrir detalhes da tarefa');
  
    newElement.innerHTML = `<p
      class="task-title"
        title="Clique para editar"
        contenteditable="plaintext-only"
        data-id="${id}"
        data-timestamp="${timestamp}"
      >${value}</p>
      <button
        title="Clique para excluir"
        data-id="${id}"
        role="checkbox"
        aria-checked="false"
        tabindex="0" 
        class="check-bttn"
      ></button>`;

    list.insertAdjacentElement('beforeend', newElement);

    if (illustration) {
      illustration.remove();
      window.location.reload();
    };
    displayDetails();
    deleteTask();  
};

function animateDeleteBttn(checkBttn) {
  const svgCheckMark = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position: absolute; right:25px;" class="feather feather-check"><polyline points="20 6 9 17 4 12"/></svg>'
  
  checkBttn.style.backgroundColor="#F3F3F3";
  checkBttn.insertAdjacentHTML("afterend", svgCheckMark);
  const parentElement = checkBttn.closest('.task-container');

  const taskContent = checkBttn.previousElementSibling;
  taskContent.style.textDecoration = 'line-through';

  parentElement.style.backgroundColor ='#92929280';
  parentElement.classList.add('animate__animated', 'animate__fadeOut')
  setTimeout(() => {
    parentElement.remove();
  }, 1000);
};

function createDetailModal(id, value) {
  if (!value) {
    value = '';
  }

  const modal = `
  <aside 
    class="
      detail-modal-container
      flex
      flex-col
      justify-between
      rounded-xl
      bg-light
      shadow-md
      w-[88%]
      h-[93%]
      md:w-[95%]
      absolute
      z-50
      m-6
      dark:bg-black
      dark:text-white
      animate__animated
      invisible
    "
    data-id="${id}-details"
>
  <header 
    class="
      detail-modal-header 
      flex
      h-16
      w-full
      justify-between
      items-center
      border-b-[1px]
      border-[#DCD6E0]
      dark:border-[#565559]
    "
  >
    <p
      class="
        detail-modal-title
        text-[24px]
        md:text-[32px]
        truncate
        m-6
      "
    ></p>
    <button class="detail-modal-close-bttn" title="Fechar detalhes da tarefa">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
      class="
        m-6 
        feather 
        feather-x
        w-[24px] 
        h-[24px]
        sm:w-[32px]
        sm:h-[32px]
        "
    ><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
  </header>
  <section 
    class="
      detail-modal-text-container
      flex
      flex-col
      justify-center
      h-[85%]
      overflow-clip
      "
  >
    <textarea 
      class="
        detail-modal-text
        h-[94%]
        lg:pt-2
        mx-6
        bg-light
        placeholder:p-1
        outline-none
        resize-none
        md:text-[20px]
        dark:bg-black
        dark:placeholder:text-white
      "
      placeholder="Compartilhe mais sobre a tarefa aqui..."
      name="details-text-area"
      autocomplete="off"
      title="Escreva detalhes sobre a tarefa"
    >${value}</textarea>
    <div 
      class="
        timestamps-container
        flex
        justify-between
        mx-6
        mt-2
        sm:mt-4
        lg:mt-6
        text-[#49454F]
        dark:text-white
        "
    >
      <span
        class="
          created-timestamp
          text-[10px]
          md:text-[14px]
          "
      ></span>
      <span
        class="
          update-timestamp
          text-[10px]
          md:text-[14px]
          "
      ></span>
    </div>
  </section>
  <footer 
    class="
      bttn-actions 
      flex
      justify-between
      items-center
      w-full
      h-16
      rounded-b-lg 
      border-t-[1px]
      border-[#DCD6E0]
      dark:border-[#565559]
      "
  >
    <button class="bookmark-collection" title="Agrupar em uma coleção" data-task="${id}">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
      class="
        m-6 
        feather 
        feather-bookmark
        w-[24px] 
        h-[24px]
        sm:w-[32px]
        sm:h-[32px]
        "
      ><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
    </button>
    <button class="reminder" title="Definir lembrete">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
      class="
        m-6 
        feather 
        feather-bell
        w-[24px] 
        h-[24px]
        sm:w-[32px]
        sm:h-[32px]
        "
      ><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
    </button>
  </footer>
</aside>`;

return modal;
}

function createFolderElement(idCollection, title) {
  const illustration = document.querySelector('.illustration-collection');
  const collectionFolderList = document.querySelector('.list-folder-collection-container');
  
  const newFolder = `<button
      class="
        folder-collection
        bg-on-surface-light-elevation
        flex
        flex-col
        justify-center
        items-center
        w-28
        p-3
        gap-y-2
        mx-4
        mt-4
        text-lg
        rounded-lg
        shadow-lg
        dark:bg-black
        dark:outline
        dark:outline-white
        dark:outline-1
        dark:text-white
        "
        type="button"
        data-id-collection="${idCollection}"
        id="${idCollection}"
        title="Clique para abrir coleção"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="
          feather
          feather-folder
          w-[32px]
          h-[32px]
          stroke-green
        dark:stroke-white
          feather feather-sun
          "
      ><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
      <h1 
        class="
          collection-name
          px-4
          focus:outline-none
          "
        id="collection-name-${idCollection}"
        contenteditable="plaintext-only"
        title="Editar título da coleção">${title}</h1>
  </button>`;
  collectionFolderList.insertAdjacentHTML("beforeend", newFolder);
  if (illustration) {
    illustration.remove();
  };
}

function createFolderModal(id, title) {
  if (!title) {
    title = '';
  }

  const modal = `
    <aside 
      class="
        folder-contents-modal-container
        hidden
        flex-col
        justify-between
        rounded-xl
        bg-light
        shadow-md
        w-[88%]
        h-[93%]
        md:w-[95%]
        absolute
        z-20
        m-6
        dark:bg-black
        dark:text-white
        animate__animated
      "
      data-id="collection-modal-${id}"
  >
    <header 
      class="
        folder-contents-modal-header 
        flex
        h-16
        w-full
        bg-on-surface-light-elevation
        rounded-t-lg
        shadow-md
        justify-between
        items-center
        border-b-[1px]
        dark:bg-black
        dark:border-[#565559]
        dark:text-white
      "
    >
      <p
        class="
          folder-contents-modal-title
          text-[24px]
          md:text-[32px]
          truncate
          m-6
        "
      >${title}</p>
      <button class="folder-contents-modal-close-bttn" title="Fechar coleção" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
        class="
          m-6 
          feather 
          feather-x
          w-[24px] 
          h-[24px]
          sm:w-[32px]
          sm:h-[32px]
          "
      ><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </header>
    <section 
      class="
        folder-contents-tasklist-container
        flex
        flex-col
        h-full
        "
    ><ul 
      class="
        tasklist
        "
      ></ul></section>
  </aside>`;

  return modal;
}

function openBookmarkModal() {
  const homepage = document.querySelector('.homepage-container');
  const modal = `
  <div 
    class="
      chips-overlay
      fixed 
      inset-0 
      bg-black 
      bg-opacity-50 
      flex 
      items-center 
      justify-center 
      z-50 
      animate__animated 
      animate__fadeIn"
  >
    <div 
      class="
        bg-light 
        rounded-lg 
        p-6 
        w-fit
        sm:w-auto
        dark:bg-dark-grey
        animate__animated
        animate__fadeIn
        "
    >
      <ul 
        id="foldersList" 
        class="
          grid 
          grid-cols-2 
          gap-4 
          mb-4 
          justify-center 
          sm:flex
          "
      ></ul>
    </div>
  </div>
  `;
  homepage.insertAdjacentHTML('beforeend', modal);
  closeBookmarkModal();
}

export {
  createTaskElement,
  animateDeleteBttn,
  createDetailModal,
  createFolderElement,
  createFolderModal,
  openBookmarkModal,
};