import showInput from "./input/showInput.js"
import displaySidebar from "./sidebar/displaySidebar.js";
import toggleMode from "./dark-mode/toggleMode.js";
import toggleSound from "./audio-functios/toggleSound.js";

document.addEventListener('DOMContentLoaded', () => {
  
  // Display main input
  showInput();
  
  // Display sidebar when clicked
  displaySidebar();
  toggleMode();
  toggleSound();
});