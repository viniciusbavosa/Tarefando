export default function playCollapseAudio() {
  const audio = new Audio();
  audio.src = './src/scripts/audio/Collapse.m4a';

  // for legacy browser
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContext();

  const track = audioContext.createMediaElementSource(audio);

  if (!track.mediaElement || track.mediaElement !== audio) {
    track = audioContext.createMediaElementSource(audio);
  };

  const gainNode = audioContext.createGain(); // Controls volume 0 = mute 3 = max
  gainNode.gain.value = 3;
  
  track.connect(gainNode).connect(audioContext.destination);
  audio.play();
}