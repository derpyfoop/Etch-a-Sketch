// DOM cache
const selectors = document.querySelector(".selectors");
const colorPicker = document.getElementById("#colorPicker");
const selectorBtns = document.querySelectorAll(".selectorBtns");
const setColorBtn = document.getElementById("#setColorBtn");
const RainbowBtn = document.getElementById("#RainbowBtn");
const earserBtn = document.getElementById("#earserBtn");
const resetBtn = document.getElementById("#resetBtn");
const gridCrt = document.querySelector(".gridCrt");

function changeSize(input) {
    populateGrid(input)
}

function populateGrid(size) {
    gridCrt.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    gridCrt.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "blue";
        gridCrt.insertAdjacentElement("beforeend", square);
    }
}

populateGrid(16);
