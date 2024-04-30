const menuIcon = document.querySelector('.menu-icon-container');
const mainContainer = document.querySelector('.main-container');
const sidebar = document.querySelector('.sidebar');

export default function displaySidebar() {

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  mainContainer.insertAdjacentElement('afterbegin',  overlay);
  let clicks = 0;
  
  // Handles sidebar close/open icon behavior
  menuIcon.addEventListener('click', () => {
    clicks++
    sidebar.classList.toggle('display-sidebar');
    
    if (clicks % 2 === 0) {
      menuIcon.innerHTML = '<button class="pr-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] stroke-green dark:stroke-white feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>';
      document.querySelector('.overlay').style.display = 'none';
    } else {
      menuIcon.innerHTML = '<button class="pr-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>';
      document.querySelector('.overlay').style.display = 'block';
    };
  });
}