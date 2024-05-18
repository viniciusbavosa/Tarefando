import playExpandAudio from "../audio-functios/openModal.js";
import playCollapseAudio from "../audio-functios/closeModal.js";

const menuIconBttn = document.querySelector('.menu-icon-bttn');
const closeIconBttn = document.querySelector('.close-icon-bttn');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

export default function displaySidebar() {

  menuIconBttn.addEventListener('click', () => {
    if (sidebar.classList.contains('hidden')) {
      overlay.classList.remove('animate__fadeOut', 'hidden');
      overlay.classList.add('animate__fadeIn', 'block');

      sidebar.classList.remove('animate__slideOutLeft', 'hidden');
      sidebar.classList.add('animate__slideInLeft', 'flex');
      sidebar.addEventListener('animationstart', () => {
        menuIconBttn.classList.add('hidden');
        closeIconBttn.classList.remove('hidden');
        playExpandAudio();
      }, { once: true })
    }; 
  });

  closeIconBttn.addEventListener('click', () => {
    overlay.classList.add('animate__fadeOut');
    overlay.classList.remove('animate__fadeIn', 'block');

    sidebar.classList.remove('animate__slideInLeft');
    sidebar.classList.add('animate__slideOutLeft');

    sidebar.addEventListener('animationend', () => {
      menuIconBttn.classList.remove('hidden');
      closeIconBttn.classList.add('hidden');
      sidebar.classList.add('hidden');
      overlay.classList.add('hidden');
    }, { once: true});
    playCollapseAudio();
  },);
}