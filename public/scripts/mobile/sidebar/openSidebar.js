const menuIcon = document.querySelector('.menu-icon-container');
const mainContainer = document.querySelector('.main-container');
let clicks = 0;


const sidebar = document.createElement('aside');
sidebar.classList.add('sidebar', 'relative');
mainContainer.appendChild(sidebar);

menuIcon.addEventListener('click', () => {
  clicks += 1
  sidebar.classList.toggle('display-sidebar');
  
  if (clicks % 2 === 0) {
    menuIcon.innerHTML = '<button class="pr-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>';
    
  } else {
    menuIcon.innerHTML = '<button class="pr-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>';
  };
});

export default sidebar;