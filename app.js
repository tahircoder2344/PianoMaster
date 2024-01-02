const pianoKeys = document.querySelectorAll(".piano-keys .key"),
  volumeSlider = document.querySelector(".volume-slider input"),
  keysCheck = document.querySelector(".keys-check input");

let allKeys = [],
  audio = new Audio("tunes/a.wav");
const playTune = (key) => {
  audio.src = `tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key=${key}] `);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
});
const handleVol = (e) => {
  audio.volume = e.target.value;
};
const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};
const pressedKey = (e) => {
  if (allKeys.includes(e.key)) playTune(e.key);
};
keysCheck.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVol);
document.addEventListener("keydown", pressedKey);
