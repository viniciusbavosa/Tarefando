import playClickAudio from "../audio-functios/clickAudio.js";

export default function toggleMode() {
  const body = document.body;
  const SunIcon = document.querySelector('.sun-container');
  const MoonIcon = document.querySelector('.moon-container');
   
  if (localStorage.getItem('dark-mode')) {
    body.classList.add('dark');
    SunIcon.classList.remove('invisible');
    MoonIcon.classList.add('invisible');
  } else {
    body.classList.remove('dark');
  };
  
  SunIcon.addEventListener('click', () => {
    playClickAudio();
    document.body.classList.remove('dark');
    SunIcon.classList.add('invisible');
    MoonIcon.classList.remove('invisible');
    localStorage.removeItem('dark-mode');
  });

  MoonIcon.addEventListener('click', () => {
    playClickAudio();
    document.body.classList.add('dark');
    SunIcon.classList.remove('invisible');
    MoonIcon.classList.add('invisible');
    const isDarkMode = body.classList.contains('dark');
    localStorage.setItem('dark-mode', isDarkMode);
  });
}
