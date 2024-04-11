export function onFocus() {
  const collectionInput = document.querySelector('.create-collection-input');
  collectionInput.addEventListener('focusin', () => {
    collectionInput.classList.add('onfocus');
  });

  collectionInput.addEventListener('focusout', () => {
    collectionInput.classList.remove('onfocus');
  });
};