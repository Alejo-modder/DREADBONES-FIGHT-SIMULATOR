const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let heart = {
  x: 300,
  y: 200,
  size: 15,
  color: "red",
  speed: 4
};

let keys = {};

document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

function moveHeart() {
  if (keys["ArrowUp"]) heart.y -= heart.speed;
  if (keys["ArrowDown"]) heart.y += heart.speed;
  if (keys["ArrowLeft"]) heart.x -= heart.speed;
  if (keys["ArrowRight"]) heart.x += heart.speed;
}

function drawHeart() {
  ctx.fillStyle = heart.color;
  ctx.beginPath();
  ctx.moveTo(heart.x, heart.y);
  ctx.arc(heart.x - 5, heart.y - 5, 5, 0, Math.PI * 2);
  ctx.arc(heart.x + 5, heart.y - 5, 5, 0, Math.PI * 2);
  ctx.lineTo(heart.x, heart.y + 10);
  ctx.fill();
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  moveHeart();
  drawHeart();
  requestAnimationFrame(gameLoop);
}

gameLoop();