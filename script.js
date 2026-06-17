const currentDiv = document.querySelector("#container");
// const gridButton = document.querySelector("#newGridButton");

function createDiv() {
  for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    currentDiv.appendChild(square);
  }
}

createDiv();
