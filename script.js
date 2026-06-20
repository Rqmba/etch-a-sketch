const currentDiv = document.querySelector("#newDiv");
const gridButton = document.querySelector("#newGridButton");

function createDiv(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    currentDiv.appendChild(square);
    let sizeSquare = 960 / gridSize;
    square.style.height = sizeSquare + "px";
    square.style.width = sizeSquare + "px";
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "red";
      // J'ai mis red mais t'as compris l'idée
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

gridButton.addEventListener("click", () => chooseSize());
createDiv(16);
