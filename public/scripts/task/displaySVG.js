export default function displaySVG() {
  const svg = document.querySelector('.svg-container');

  if (sessionStorage.getItem('svgHidden') === 'true') {
    svg.classList.add('animate__animated', 'fade__out');
  
  } else {
    svg.classList.add('visible');
  }
}