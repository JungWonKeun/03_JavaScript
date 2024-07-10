document.addEventListener("DOMContentLoaded", () => {
  const basket = document.getElementById("basket");
  const fruit = document.getElementById("fruit");
  const gameContainer = document.getElementById("game-container");
  const scoreDisplay = document.getElementById("score");
  const timeDisplay = document.getElementById("time");
  const startButton = document.getElementById("start-button");

  let basketPosition = gameContainer.offsetWidth / 2 - basket.offsetWidth / 2;
  let fruitPosition = { top: -30, left: Math.random() * (gameContainer.offsetWidth - fruit.offsetWidth) };
  let score = 0;
  let time = 0;
  let speed = 2;  // Initial speed
  let gameInterval, timeInterval;

  basket.style.left = `${basketPosition}px`;

  document.addEventListener("keydown", (event) => {
      const step = 20;
      if (event.key === "ArrowLeft" && basketPosition > 0) {
          basketPosition -= step;
      } else if (event.key === "ArrowRight" && basketPosition < gameContainer.offsetWidth - basket.offsetWidth) {
          basketPosition += step;
      }
      basket.style.left = `${basketPosition}px`;
  });

  const updateScoreAndTime = () => {
      time++;
      scoreDisplay.textContent = `Score: ${score}`;
      timeDisplay.textContent = `Time: ${time}s`;
  };

  const dropFruit = () => {
      fruitPosition.top += speed;
      if (fruitPosition.top > gameContainer.offsetHeight) {
          fruitPosition.top = -30;
          fruitPosition.left = Math.random() * (gameContainer.offsetWidth - fruit.offsetWidth);
          score++;
          speed += 0.1;  // Gradually increase the speed
      }
      fruit.style.top = `${fruitPosition.top}px`;
      fruit.style.left = `${fruitPosition.left}px`;

      if (
          fruitPosition.top + fruit.offsetHeight > gameContainer.offsetHeight - basket.offsetHeight &&
          fruitPosition.left + fruit.offsetWidth > basketPosition &&
          fruitPosition.left < basketPosition + basket.offsetWidth
      ) {
          clearInterval(gameInterval);
          clearInterval(timeInterval);
          alert(`Game Over! Final Score: ${score}, Time: ${time}s`);
          startButton.style.display = 'block';  // Show start button again
          return;
      }

      requestAnimationFrame(dropFruit);
  };

  startButton.addEventListener('click', () => {
      score = 0;
      time = 0;
      speed = 2;
      fruitPosition = { top: -30, left: Math.random() * (gameContainer.offsetWidth - fruit.offsetWidth) };
      scoreDisplay.textContent = `Score: ${score}`;
      timeDisplay.textContent = `Time: ${time}s`;
      startButton.style.display = 'none';
      gameInterval = setInterval(dropFruit, 20);
      timeInterval = setInterval(updateScoreAndTime, 1000);
  });
});
