const SunIcon = document.querySelector('.sun-container');
const MoonIcon = document.querySelector('.moon-container');
const body = document.body


export default function toggleMode() {
  SunIcon.addEventListener('click', () => {
    body.classList.remove('dark');
    SunIcon.classList.add('invisible');
    MoonIcon.classList.remove('invisible');
  });

  MoonIcon.addEventListener('click', () => {
    body.classList.add('dark');
    SunIcon.classList.remove('invisible');
    MoonIcon.classList.add('invisible');
  });
}
