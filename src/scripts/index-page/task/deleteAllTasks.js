export default function deleteAllTasks() {
  const modal = document.querySelector('dialog');
  const confirmBttn = document.querySelector('#confirm-bttn');
  const cancelBttn = document.querySelector('#cancel-bttn');

  modal.showModal();

  confirmBttn.addEventListener('click', () => {
    localStorage.clear();
    window.location.reload();
    modal.close();
  });

  cancelBttn.addEventListener('click', () => {
    modal.close()
  })
}