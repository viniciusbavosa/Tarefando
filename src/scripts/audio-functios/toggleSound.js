export default function toggleSound() {
  const soundIconConteiner = document.querySelector('.toggle-sound-bttn-container');
  const soundOnIcon = document.querySelector('.soundon-icon');
  const soundOffIcon = document.querySelector('.soundoff-icon');

  const toggleSoundHandler = () => {
    const isSoundEnabled = JSON.parse(localStorage.getItem('isSoundEnabled') || 'true');
    localStorage.setItem('isSoundEnabled', !isSoundEnabled);
    soundOnIcon.classList.toggle('invisible', !isSoundEnabled);
    soundOffIcon.classList.toggle('invisible', isSoundEnabled);
  };

  soundIconConteiner.removeEventListener('click', toggleSoundHandler);
  soundIconConteiner.addEventListener('click', toggleSoundHandler);
}
