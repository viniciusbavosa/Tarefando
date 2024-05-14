export default function editTask() {
  const parentList = document.querySelector('.list');

  const options = { characterData: true, subtree: true };

  const observer = new MutationObserver((mutations) => {
  
   mutations.forEach((mutation) => {
      const id = `${mutation.target.parentElement.dataset.id}`;
      const changedValue = `${mutation.target.textContent}`;
      const changedValueFormated = changedValue.trim();
      localStorage.setItem(id, JSON.stringify(changedValueFormated));
   });
  });

  observer.observe(parentList, options);
}
  