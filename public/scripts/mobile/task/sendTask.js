import { displayTask } from "./displayTask.js";

export function sendTask() {
  const sendButton = document.querySelector('#sendBttn')
  const input = document.querySelector('.new-task-input');
    if (input && sendButton) {
      sendButton.addEventListener('click', () => {

        const task = `
        <p
          style="
            display: block-flex;
            align-items: center;
            white-space: wrap;
            padding: 2px 0;
            width: 221px;
            height: 40px;
            color: #000;
            font-size: 24px;
            font-weight: 500;
            text-wrap: wrap;
            overflow: scroll;
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
            outline: black solid 1.9px;
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
