import { displayUpdateDate } from "./date-time-info-details/timestamps-details.js";

export default function storesDetails() {
  const detailsText = document.querySelector('.detail-modal-text');
  const detailsElement = document.querySelector('.detail-modal-container');

  detailsText.addEventListener('input', () => {
      const detailsTextFormated = detailsText.value.trim();
      const idDetails = detailsElement.dataset.id;
      localStorage.setItem(`${idDetails}`, JSON.stringify(detailsTextFormated));
      displayUpdateDate(idDetails);
    });
}