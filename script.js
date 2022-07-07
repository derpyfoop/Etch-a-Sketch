// DOM cache.
const selectors = document.querySelector(".selectors");
let selectorBtns = document.querySelectorAll(".selectorBtns");
let setBlackBtn = document.getElementById("#setBlackBtn");
let setGrayBtn = document.getElementById("#setGrayBtn");
let rainbowBtn = document.getElementById("#rainbowBtn");
let earserBtn = document.getElementById("#earserBtn");
let resetBtn = document.getElementById("#resetBtn");
let gridCrt = document.querySelector(".gridCrt");

let color = "black";

//Gets grid size.
function changeSize(input) {
    if (input >= 2 && input <= 100) {
        populateGrid(input)
    } else {
        console.log("Too many or too little squares.");
    }  
}

//Creates and fills the grid.
function populateGrid(size) {
    gridCrt.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    gridCrt.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.addEventListener("click", colorSquare);
        square.style.backgroundColor = "white";
        gridCrt.insertAdjacentElement("beforeend", square);
    }
}

populateGrid(16);

function colorSquare() {
    if ((color === 'random')) {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
    this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice
}

function resetGrid() {
    gridCrt = document.querySelector(".gridCrt");
    let squares = document.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = 'white');
}



