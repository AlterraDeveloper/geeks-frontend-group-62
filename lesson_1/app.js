// DOM - Document Object Model

// Search - поиск

const counterValue = document.getElementById("counter-value");

const title = document.getElementById("title");

const buttonPlus = document.getElementById("action-plus");

// Events - события

function addCounter() {
  let currentValue = counterValue.textContent;
  currentValue++;
  counterValue.textContent = currentValue;
  setCounterColor();
  title.textContent = "plus";
}

buttonPlus.addEventListener("mousemove", addCounter);

function resetCounter() {
  counterValue.textContent = 0;
  setCounterColor();
  title.textContent = "???????";
  title.style.color = "var(--main-color)";
}

const buttonReset = document.getElementById("action-reset");

buttonReset.addEventListener("click", resetCounter);

function minusCounter() {
  let currentValue = counterValue.textContent;
  currentValue--;
  counterValue.textContent = currentValue;
  setCounterColor();
}

const buttonMinus = document.getElementById("action-minus");

buttonMinus.onmouseenter = minusCounter;

function setCounterColor() {
  let currentValue = counterValue.textContent;

  if (currentValue > 0) {
    counterValue.style.color = "lime";
  } else if (currentValue < 0) {
    counterValue.style.color = "red";
  } else {
    counterValue.style.color = "cyan";
  }
}
