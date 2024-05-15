import playExpandAudio from "../audio-functios/openModal.js";
import playCollapseAudio from "../audio-functios/closeModal.js";

const menuIcon = document.querySelector('.menu-icon-container');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

export default function displaySidebar() {

  let clicks = 0;
  // Handles sidebar close/open icon behavior
  menuIcon.addEventListener('click', () => {
    clicks++
    sidebar.classList.toggle('display-sidebar');
    
    if (clicks % 2 === 0) {
      menuIcon.innerHTML = '<button class="pr-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] z-[3] stroke-green dark:stroke-white feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>';
      overlay.classList.add('animate__fadeOut');
      overlay.classList.remove('animate__fadeIn');

      sidebar.classList.remove('animate__slideInLeft');
      sidebar.classList.add('animate__slideOutLeft');
      
      setTimeout(() => {
      overlay.style.display = 'none';
      sidebar.style.display = 'none';
      }, 1000);
      playExpandAudio();

    } else {
      menuIcon.innerHTML = '<button class="pr-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>';
      overlay.style.display = 'block';
      overlay.classList.remove('animate__fadeOut');
      overlay.classList.add('animate__fadeIn');

      sidebar.style.display = 'flex';
      sidebar.classList.remove('animate__slideOutLeft');
      sidebar.classList.add('animate__slideInLeft');
      playCollapseAudio();
    };
  });
}