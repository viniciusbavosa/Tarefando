const sidebar = document.querySelector('.sidebar');
const pageIndicator = document.querySelector('.page-indicator-bg');

export default function togglePageIndicator() {
  const isVisible = sidebar.checkVisibility();
  if (pageIndicator) {
    pageIndicator.classList.toggle('animate__fadeIn', !isVisible);
    pageIndicator.classList.toggle('animate__fadeOut', isVisible);
  };
}