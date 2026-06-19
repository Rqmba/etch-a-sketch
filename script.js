const currentDiv = document.querySelector("#newDiv");
// const gridButton = document.querySelector("#newGridButton");

function createDiv() {
  for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    currentDiv.appendChild(square);
  }
}

createDiv();
