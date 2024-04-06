export function styleCheckBttn(taskContainer) {
  const checkBttns = document.querySelectorAll('.check-bttn');
  if(checkBttns) {
    checkBttns.forEach((checkBttn) => {
      checkBttn.addEventListener('mouseenter', () => {
        checkBttn.style.backgroundColor='#FFFFFF65'
      });
      checkBttn.addEventListener('mouseleave', () => {
        checkBttn.style.backgroundColor='transparent'
      })
      checkBttn.addEventListener('click', () => {
  
        const svgCheckMark = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position: absolute; right:25px;" class="feather feather-check"><polyline points="20 6 9 17 4 12"/></svg>'
  
        checkBttn.style.backgroundColor="#F3F3F3";
        checkBttn.insertAdjacentHTML("afterend", svgCheckMark);
        taskContainer.style.backgroundColor ='#92929280';
        setTimeout(() => {
          taskContainer.remove();
        }, 1000)
      });
    });
    
  };
};