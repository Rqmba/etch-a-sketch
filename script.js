const currentDiv = document.querySelector("#newDiv");
// const gridButton = document.querySelector("#newGridButton");

function createDiv() {
  for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    currentDiv.appendChild(square);
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "red";
      // J'ai mis red mais t'as compris l'idée
    });
  }
}

createDiv();
