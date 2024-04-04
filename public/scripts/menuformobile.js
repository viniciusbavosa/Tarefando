const menuButton = document.querySelector('#js-menu-bttn');
menuButton.addEventListener('click', () => {
  const sidebar = document.querySelector("#default-sidebar")
  sidebar.classList.toggle('hidden')
})