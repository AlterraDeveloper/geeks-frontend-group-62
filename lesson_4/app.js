

const textBlock = document.querySelector(".rating-text");
const valueBlock = document.querySelector(".rating-value");

const showRating = (event) => {
  const ratingValue = event.target.dataset.value;
  valueBlock.innerText = ratingValue;

  const stars = document.querySelectorAll(".fa-star");
  for (const star of stars) {
    const starValue = star.dataset.value;
    if (starValue <= ratingValue) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  }

  if (ratingValue == 5) {
    boom();
  }
};

const showText = (event) => {
  const star = event.target;
  const value = star.dataset.value;

  if (value == 1) textBlock.textContent = "Piece of shit";
  if (value == 2) textBlock.textContent = "Bad";
  if (value == 3) textBlock.textContent = "Ok";
  if (value == 4) textBlock.textContent = "Good";
  if (value == 5) textBlock.textContent = "Amazing";
};

function hideText() {
  textBlock.textContent = "";
}

function createRating() {
  const container = document.querySelector(".stars");
  container.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const star = document.createElement("div");
    star.classList.add("fa", "fa-star");

    // star.dataset.value = i + 1;
    star.setAttribute("data-value", i + 1);

    star.onmouseenter = showText;
    star.onmouseleave = hideText;
    star.onclick = showRating;

    container.append(star);
  }
}

function boom() {
  // Взрыв слева
  confetti({
    particleCount: 200,
    angle: 60, // Стреляет вверх и направо
    spread: 85,
    origin: { x: 0, y: 0.5 }, // Левый край экрана, чуть ниже середины
  });

  // Взрыв справа
  confetti({
    particleCount: 200,
    angle: 120, // Стреляет вверх и налево
    spread: 85,
    origin: { x: 1, y: 0.5 }, // Правый край экрана, чуть ниже середины
  });
}

createRating();
