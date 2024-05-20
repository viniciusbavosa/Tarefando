import { animateDeleteBttn } from "../../dynamic-content/dynamicHTML.js";

export function deleteTask() {
  const checkBttns = document.querySelectorAll('.check-bttn');

  if(checkBttns) {
    // Iterates through each check button and apply hover efect
    checkBttns.forEach((checkBttn) => {
      checkBttn.addEventListener('mouseenter', () => {
        checkBttn.style.backgroundColor='#FFFFFF65'
      });

      checkBttn.addEventListener('mouseleave', () => {
        checkBttn.style.backgroundColor='transparent'
      });

      // Remove task from localStorage and from screen
      checkBttn.addEventListener('click', () => {
        const id = checkBttn.dataset.id
        localStorage.removeItem(id);
        localStorage.removeItem(`${id}-details`);
        localStorage.removeItem(`${id}-created-date`);
        localStorage.removeItem(`${id}-details-updated-date`);



        animateDeleteBttn(checkBttn);
      });
    });
  };
};