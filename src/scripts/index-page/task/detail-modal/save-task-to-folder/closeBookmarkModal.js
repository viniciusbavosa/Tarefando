export function closeBookmarkModal() {
  const modal = document.querySelector('.chips-overlay');
  modal.removeEventListener('click', (event) => {
    if (event.target.classList[0] === "chips-overlay") {
      modal.remove();
    };
  });
  document.addEventListener('click', (event) => {
    if (event.target.classList[0] === "chips-overlay") {
      modal.remove();
    };
  });
}