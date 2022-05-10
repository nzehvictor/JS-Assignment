let input = document.querySelector("input");
let display = document.querySelector("#display");
let playBtn = document.querySelector("#play");
let pauseBtn = document.querySelector("#pause");
let counterBtn = document.querySelector("#counter");
let stopBtn = document.querySelector("#stop");
let counter;
let resumeCounter;
let timer;
playBtn.addEventListener("click", () => {
  display.innerText = input.value;
  stopBtn.disabled = false;
  pauseBtn.disabled = false;
  playBtn.style.visibility = "hidden";
  input.style.visibility = "hidden";
  timer = setInterval(() => {
    display.innerText--;
    if (display.innerText == -1) {
      clearInterval(timer);
      playBtn.style.visibility = "visible";
      input.style.visibility = "visible";
      display.innerText = "";
    }

  }, 1000);
});

pauseBtn.addEventListener("click", () => {
  if (pauseBtn.innerText === "resume") {
    resumeCounter = setInterval(() => {
      playBtn.style.visibility = "hidden";
      input.style.visibility = "hidden";
      display.innerText--;
      if (display.innerText == -1) {
        clearInterval(resumeCounter);
        display.innerText = "";
      }
    }, 1000);
    pauseBtn.innerText = "pause";
  } else if (pauseBtn.innerText === "pause") {
    playBtn.style.visibility = "visible";
    input.style.visibility = "visible";
    clearInterval(resumeCounter);
    clearInterval(timer);
    pauseBtn.innerText = "resume";
  }
});
counterBtn.addEventListener("click", () => {
  display.innerText = 0;
  counter = setInterval(() => {
    display.innerText++;
  }, 1000);
});
stopBtn.addEventListener("click", () => {
  stopBtn.disabled = true;
  pauseBtn.disabled = true;
  playBtn.style.visibility = "visible";
  input.style.visibility = "visible";
  clearInterval(counter);
  clearInterval(timer);
  display.innerText = "";
});