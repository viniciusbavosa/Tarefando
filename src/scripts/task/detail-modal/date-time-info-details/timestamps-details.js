import setTimeStamps from "../../../date-time-info/timeStamps.js";

function displayCreatedDate(task) {
  const createdElement = document.querySelector('.created-timestamp');
  const createdOn = task.firstChild.dataset.timestamp
  createdElement.textContent = `Criado em: ${createdOn}`;
}

function displayUpdateDate(id) {
  const updatedElement = document.querySelector('.update-timestamp');
  const updatedOn = setTimeStamps();
  updatedElement.textContent = `Atualizado em: ${updatedOn}`;
  localStorage.setItem(`${id}-updated-date`, JSON.stringify(updatedOn));
}

export {
  displayCreatedDate,
  displayUpdateDate
}