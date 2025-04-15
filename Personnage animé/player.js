const player = document.getElementById("player");
const game = document.getElementById("gameContainer");

const moveSize = 10; // déplacement par pas de 10px
let moveCount = 0;

document.addEventListener("keydown", (e) => {
  const key = e.key;

  const maxTop = game.clientHeight - player.clientHeight;
  const maxLeft = game.clientWidth - player.clientWidth;

  let top = player.offsetTop;
  let left = player.offsetLeft;

  moveCount++;
  const step = moveCount % 2 === 0 ? "1" : "2"; // animation : alternance

  if (key === "ArrowUp" && top > 0) {
    player.style.top = `${top - moveSize}px`;
    player.style.backgroundImage = `url('sprites/up${step}_clean.png')`;
    checkCollision();
  } else if (key === "ArrowDown" && top < maxTop) {
    player.style.top = `${top + moveSize}px`;
    player.style.backgroundImage = `url('sprites/down${step}_clean.png')`;
    checkCollision();
  } else if (key === "ArrowLeft" && left > 0) {
    player.style.left = `${left - moveSize}px`;
    player.style.backgroundImage = `url('sprites/left${step}_clean.png')`;
    checkCollision();
  } else if (key === "ArrowRight" && left < maxLeft) {
    player.style.left = `${left + moveSize}px`;
    player.style.backgroundImage = `url('sprites/right${step}_clean.png')`;
    checkCollision();
  }
});

const bowl = document.getElementById("bowl");
const winMessage = document.getElementById("winMessage");

// Positionner la gamelle aléatoirement
function placeBowl() {
  const maxTop = game.clientHeight - bowl.clientHeight;
  const maxLeft = game.clientWidth - bowl.clientWidth;
  const top = Math.floor(Math.random() * (maxTop / moveSize)) * moveSize;
  const left = Math.floor(Math.random() * (maxLeft / moveSize)) * moveSize;
  bowl.style.top = `${top}px`;
  bowl.style.left = `${left}px`;
}

// Vérifier si le chat touche la gamelle
function checkCollision() {
  if (
    player.offsetTop === bowl.offsetTop &&
    player.offsetLeft === bowl.offsetLeft
  ) {
    winMessage.textContent = "Bravo ! Le chat a trouvé sa gamelle 😸🍽️";
  }
}

placeBowl(); // placer la gamelle au début
