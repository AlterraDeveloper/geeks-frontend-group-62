const sizeOptions = document.querySelectorAll("input[type=radio]");

for (const sizeOption of sizeOptions) {
  // sizeOption.addEventListener("change", selectSize);
  sizeOption.onchange = selectSize;
}

function selectSize(event) {
  const selectedSize = event.target.value;

  //   if (selectedSize === "S") {
  //     createField(160);
  //   } else if (selectedSize === "M") {
  //     createField(260);
  //   } else if (selectedSize === "L") {
  //     createField(460);
  //   }

  switch (selectedSize) {
    case "S":
      createField(160);
      break;
    case "M":
      createField(260);
      break;
    case "L":
      createField(460);
      break;
  }
}

function switchOn(event){
    const activeItem = event.target;

    const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];


    activeItem.style.background = randomColor;
    activeItem.style.boxShadow = "0 0 10px 0 " + randomColor;
}

function createField(count) {
  const field = document.querySelector("#container");
  field.innerHTML = "";

  for (let i = 0; i < count; i++) {
    const square = document.createElement("div"); // <div></div>
    square.classList.add("square"); // <div class="square"></div>

    square.onmouseenter = switchOn;

    square.onmouseleave = (event) => {
        event.target.style.background = "#1d1d1d";
        event.target.style.boxShadow = "0 0 2px #000";
    }

    field.appendChild(square);
  }
}

createField(160);

