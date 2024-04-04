// Checks if the devide has a max-width of 639px
const mediaQuery = window.matchMedia('(max-width: 639px)');
const newTaskBttn = document.querySelector('.js-new-task-bttn');
const newTaksBttnContainer = document.querySelector('.new-task-bttn-container');
const body = document.querySelector('.mobile-body-container');
let newTask;

if (mediaQuery.matches) {
  newTaskBttn.addEventListener('click', () => {
    newTaksBttnContainer.classList.add('animate__animated', 'animate__fadeOut')
    newTaksBttnContainer.outerHTML = `<div 
      class="new-task-input-container animate__animated animate__fadeIn"
      style="
        margin: 0px auto;
        margin-bottom: 45px;
        "
      >
        <input type="text" name="task" class="new-task-input" autocomplete="off"
          style="
            background-color: #3F3F3F;
            color: white;
            outline: none;
            border-radius: 12px;
            padding: 8px 8px;
            width: 19em;
            relative
          "
          >
          <button type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="sendBttn" class="feather feather-send" style="position: absolute; bottom: 52px; left: 305px;"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
  </div>`

  
  const sendButton = document.querySelector('#sendBttn')
  const input = document.querySelector('.new-task-input');
  if (input && sendButton) {
    sendButton.addEventListener('click', () => {
      let inputValue = document.querySelector('.new-task-input');
      const task = `
      <p style="font-size: 2em;"
        class="
          line-clamp-4
          whitespace-normal
          text-center
          py-2
          w-[221px]
        text-white
          font-light
        ">
         ${inputValue.value}
      </p>
      <span 
        class="
          check-bttn
          w-[60px]
          h-[60px]
          outline
          outline-1
        outline-white
          rounded-xl
          "
          ></span>`

      inputValue.value = ''

      fetch('/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ value: task})
    
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        data.task.forEach((value) => {
          newTask = value
        const newElement = document.createElement('div');
        newElement.classList.add('task-container', 'bg-[#798570]', 'flex', 'flex-row', 'items-center', 'w-[343px]', 'h-auto', 'gap-[30px]', 'self-center', 'rounded-lg', 'px-[16px]', 'text-sm', 'text-pretty');
          newElement.style.marginTop = '12px';
        newElement.innerHTML = `${newTask}`
        body.appendChild(newElement);
        })
        
      })
      .catch(err => console.log(err));
      
    });
  } else {
    console.log('Erro');
  };

  
 })
} else {
  console.log('Tamanho da tela maior que 639px')
};
