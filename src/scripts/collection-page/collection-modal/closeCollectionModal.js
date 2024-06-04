export default function closeCollectionModal(collectionFolder, overlay) {
  const closeCollectionFolder = document.querySelector('.folder-contents-modal-close-bttn');

  const closeCollectionHandler = () => {
    collectionFolder.classList.toggle('animate__slideInRight', false);
    collectionFolder.classList.toggle('animate__slideOutRight', true);
    overlay.classList.toggle('animate__fadeIn', false);
    overlay.classList.toggle('animate__fadeOut', true);
    setTimeout(() => {
      collectionFolder.classList.toggle('flex', false);
      collectionFolder.classList.toggle('hidden', true);
      overlay.classList.toggle('hidden', true);
      collectionFolder.remove();
    }, 800);
  };
  // Removes any old event listener to avoid memory leaks
  closeCollectionFolder.removeEventListener('click', closeCollectionHandler);
  closeCollectionFolder.addEventListener('click', closeCollectionHandler);
}