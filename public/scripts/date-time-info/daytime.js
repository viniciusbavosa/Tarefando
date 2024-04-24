export default function getDaytime() {

  const todayDate = new Date();
  const hour = todayDate.getHours();
  const daytimeHTML = document.querySelector('.daytime');
  
  if (hour > 4 && hour <= 12) {
    daytimeHTML.textContent = 'Bom dia';
  } else if (hour > 12 && hour <= 18) {
    daytimeHTML.textContent = 'Boa tarde';
  } else {
    daytimeHTML.textContent = 'Boa noite';
  }
}