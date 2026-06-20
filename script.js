const currentDiv = document.querySelector("#newDiv");
const gridButton = document.querySelector("#newGridButton");

function createDiv(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    currentDiv.appendChild(square);
    square.opacity = 0.1;
    let sizeSquare = 960 / gridSize;
    square.style.height = sizeSquare + "px";
    square.style.width = sizeSquare + "px";
    square.addEventListener("mouseover", () => {
      gridColor(square);
      if (square.opacity < 1) {
        square.opacity = square.opacity + 0.1;
      }
      square.style.opacity = square.opacity;
    });
  }
}

function chooseSize() {
  let size = prompt("Choose your size");

  if (size < 100 && size > 0) {
    currentDiv.innerHTML = "";
    createDiv(size);
  }
}

function gridColor(color) {
  let red = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);

  color.style.backgroundColor = `rgb(${red},${blue}, ${green})`;
}

gridButton.addEventListener("click", () => chooseSize());
createDiv(16);
