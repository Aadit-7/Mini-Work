let userSeq = [];
let gameSeq = [];
let btns = ["yellow", "red", "green", "blue"];

let highScore = 0;
let started = false;
let level = 0;
let acceptingInput = false; // 🔒 controls when user can click

let h3 = document.querySelector("h3");
let startBtn = document.querySelector("button");

// ================= START GAME =================
startBtn.addEventListener("click", function () {
  if (!started) {
    started = true;
    level = 0;
    gameSeq = [];
    userSeq = [];

    h3.style.display = "block";
    startBtn.style.display = "none";

    levelUp();
  }
});

// ================= LEVEL UP =================
function levelUp() {
  userSeq = [];
  level++;
  acceptingInput = false; // 🔒 lock clicks

  h3.innerHTML = `Level ${level} <br> High Score is ${highScore}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`#${randColor}`); // ID selector

  gameSeq.push(randColor);
  btnFlash(randBtn);

  // 🔓 unlock input after animation
  setTimeout(() => {
    acceptingInput = true;
  }, 400);
}

// ================= FLASH (GAME) =================
function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}

// ================= FLASH (USER) =================
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 250);
}

// ================= USER CLICK =================
function btnPressed() {
  // ❌ block invalid clicks
  if (!started || !acceptingInput) return;

  let btn = this;
  let userColor = btn.getAttribute("id");

  userFlash(btn);
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

// ================= ADD EVENTS =================
let allBtns = document.querySelectorAll(".btn");
allBtns.forEach((btn) => {
  btn.addEventListener("click", btnPressed);
});

// ================= CHECK ANSWER =================
function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      highScore = Math.max(highScore, level);
      acceptingInput = false;

      setTimeout(levelUp, 1000);
    }
  } else {
    gameOver();
  }
}

// ================= GAME OVER =================
function gameOver() {
  h3.innerHTML = `Game Over ❌<br>
    Your Score: <b>${level}</b><br>
    High Score: ${highScore}<br>
    Tap Start to Play Again`;

  document.body.style.backgroundColor = "red";
  setTimeout(() => {
    document.body.style.backgroundColor = "black";
  }, 200);

  reset();
}

// ================= RESET =================
function reset() {
  started = false;
  acceptingInput = false;
  userSeq = [];
  gameSeq = [];
  level = 0;

  startBtn.style.display = "";
}
