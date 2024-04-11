import { onFocus } from "./onFocus.js";

export function showCollectionInput(element) {
  element.classList.add('animate__animated', 'animate__fadeOut');
  element.outerHTML = `
  <div 
    class="create-collection-input-container animate__animated animate__fadeIn"
    >
      <form action="#">
        <input type="text" name="collection" class="create-collection-input" autocomplete="off" aria-required="true">
          <button type="submit" style="position: relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus" id="send-bttn" style="position: absolute; bottom: -7px; right: 15px;"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
      </form>
</div>`
onFocus();
};