import { openDB } from "../../../boilerplate/openDatabase.js";
export default function deleteAllTasks() {
  const modal = document.querySelector('dialog');
  const trashCan = document.querySelector('#confirm-bttn');
  const cancelBttn = document.querySelector('#cancel-bttn');

  modal.showModal();

  trashCan.addEventListener('click', () => {
    const request = openDB('TasksDatabase');

    request.onerror = () => {
      console.log('Erro ao realizar a requisição ao banco de dados' + request.error);
    };

    request.onsuccess = () => {
      const db = request.result
      .transaction(["Tasks"], "readwrite")
      .objectStore(["Tasks"])
      .clear();
    };
    window.location.reload();
    modal.close();
  });

  cancelBttn.addEventListener('click', () => {
    modal.close();
  });
}