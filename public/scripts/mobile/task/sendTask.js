import { displayTask } from "./displayTask.js";

export function sendTask() {
  const sendButton = document.querySelector('#sendBttn')
  const input = document.querySelector('.new-task-input');
    if (input && sendButton) {
      sendButton.addEventListener('click', () => {

        const task = `
        <p
          style="
            white-space: wrap;
            padding: 2px 0;
            width: 221px;
            height: auto;
            color: #F1F1F1;
            font-size: 16px;
            text-wrap: pretty;
            word-break: break-word;
          ">
          ${input.value}
        </p>
        <button
          role="checkbox"
          aria-checked="false"
          tabindex="0" 
          class="check-bttn"
          style="
            background-color: transparent;
            width: 15%;
            height: 95%;
            outline: white solid 1px;
            border-radius: 16px;
            margin-left: auto;
            "
        ></button>`

        input.value = ''

        fetch('/', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ value: task})
        })
        .then(response => response.json())
        .then(data => { displayTask(data) })
        .catch(err => console.log(err));
      });
  }
};
