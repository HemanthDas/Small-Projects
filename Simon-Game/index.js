const play = ["green", "red", "yellow", "blue"];
let started = false;
let level = 0;
const sequence = [];
const playersSequence = [];

const headElement = document.querySelector("#head");
const bodyElement = document.querySelector("body");
const buttons = document.querySelectorAll(".sqr");

document.addEventListener("keydown", function (e) {
  if (!started) {
    next();
    headElement.innerText = `Level 0`;
    started = true;
  }
});

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (started) {
      playersSequence.push(this.getAttribute("id"));
      animate(this.getAttribute("id"));
      checkAnswer(playersSequence.length - 1);
    }
  });
});

const checkAnswer = function (currentLevel) {
  if (playersSequence[currentLevel] === sequence[currentLevel]) {
    if (playersSequence.length === sequence.length) {
      headElement.innerText = `Level ` + level;
      setTimeout(next, 1000);
      level++;
    }
  } else {
    level = 0;
    playSound("wrong");
    bodyElement.classList.add("lost");
    setTimeout(function () {
      bodyElement.classList.remove("lost");
    }, 200);
    headElement.innerText = `Lost the Game. Press A Key to Start Again`;
    sequence.length = 0;
    started = false;
  }
};

const next = function () {
  playersSequence.length = 0;
  let rand = Math.floor(Math.random() * 4);
  sequence.push(play[rand]);
  animate(play[rand]);
};

const animate = function (color) {
  const buttonElement = document.getElementById(color);
  buttonElement.classList.add("clicked");
  playSound(color);
  setTimeout(function () {
    buttonElement.classList.remove("clicked");
  }, 100);
};

const playSound = function (aud) {
  let sound = new Audio(`./Components/${aud}.mp3`);
  sound.play();
};
