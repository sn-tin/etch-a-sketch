/* Creating Grid */
let mainGrid = document.querySelector(".main-grid");
let gridCells = mainGrid.querySelector("div");
let setGridSize = document.querySelector(".input-grid-size");

function createGrid(rowsCol){
    for(let i = 0; i < rowsCol * rowsCol; i++){
            let createDIVs = document.createElement("div");
            createDIVs.classList.add("grid-element");
            mainGrid.insertAdjacentElement("beforeend", createDIVs);
            mainGrid.style.gridTemplateColumns = `repeat(${rowsCol}, 1fr)`;
            mainGrid.style.gridTemplateRows = `repeat(${rowsCol}, 1fr)`;
    }
}

createGrid(16);

/* Reset size of grid with user's input */
function resetGridSize(input){
    if(input >= 2 && input <= 100){
        createGrid(input)
    } else {
        alert("Number shouldn't be lower than 2 and greater than 100. Please try again.")
    }
}