let ranNum = 0;
let timmer = 60;
let score = 0;

const lowerPannel = document.querySelector(".lowerPannel");

lowerPannel.addEventListener("click", (event) => {
  if (event.target.classList.contains("bubble")) {
    const clickedBubble = Number(event.target.textContent);
    if (clickedBubble === ranNum) {
      increaseScore();
      createBubble();
      changeHit();
    }
  }
});

function increaseScore() {
  score += 10;
  document.querySelector(".score").textContent = score;
}

function changeHit() {
  ranNum = Math.floor(Math.random() * 10);
  document.querySelector(".hit").textContent = ranNum;
}

function changeTimmer() {
  const finishGame = setInterval(() => {
    if (timmer > 0) {
      timmer--;
      document.querySelector(".timmer").textContent = timmer;
    } else {
      clearInterval(finishGame);
      displayScore();
    }
  }, 1000);
}

function createBubble() {
  let bubbleHTML = "";
  for (let i = 1; i <= 192; i++) {
    const num = Math.floor(Math.random() * 10);
    bubbleHTML += `<div class="bubble">${num}</div>`;
  }
  lowerPannel.innerHTML = bubbleHTML;
}

function displayScore() {
  let message = "";
  if (score >= 500) {
    message = `You Hacker 😱😱!`;
  } else if (score >= 320) {
    message = `Congratulations!!! You win 🥳🥳`;
  } else if (score > 250) {
    message = `Very close, champ! 🔥🔥`;
  } else if (score > 150) {
    message = `You tried your best, buddy! 👍👍`;
  } else {
    message = `You need more practice! 💩💩`;
  }

  lowerPannel.innerHTML = `
    <div class="game-over-message">
      <h1>Game Over</h1>
      <h2>${message}</h2>
      <h3>Your Score: ${score}/500</h3>
     <h2>‼️ Refresh to Start New Game</h2>

    </div>`;
}

// Start the game
changeTimmer();
createBubble();
changeHit();
