const inputTask = document.querySelector('.js-input-task');

let placeholderIsEnabled = true

inputTask.addEventListener('click', () => {
  hidePlaceholder()
});

inputTask.addEventListener('blur', () => {
  showPlaceholder()
});


function hidePlaceholder() {
  if (placeholderIsEnabled) {
    inputTask.placeholder = ""
    placeholderIsEnabled = false
    inputTask.style.backgroundColor = 'rgb(120 113 108 / 0.6)'
  }
};

function showPlaceholder() {
  if (!placeholderIsEnabled) {
    inputTask.placeholder = "Adicionar uma tarefa"
    placeholderIsEnabled = true
    inputTask.style.backgroundColor = 'rgb(168 162 158 / 0.6)'
  }
};