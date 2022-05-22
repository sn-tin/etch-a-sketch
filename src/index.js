/* Creating Grid */
let mainGrid = document.querySelector(".main-grid");
let setGridSize = document.querySelector(".input-grid-size");

function createGrid(rowsCol){
    for(let i = 0; i < rowsCol * rowsCol; i++){
            let createDIVs = document.createElement("div");
            createDIVs.classList.add("grid-element");
            mainGrid.insertAdjacentElement("beforeend", createDIVs);
            mainGrid.style.gridTemplateColumns = `repeat(${rowsCol}, 1fr)`;
            mainGrid.style.gridTemplateRows = `repeat(${rowsCol}, 1fr)`;

            let black = document.querySelector(".black-btn");
            let rainbow = document.querySelector(".rainbow-btn");
            let eraser = document.querySelector(".eraser-btn");
            let colorButton = [black, rainbow, eraser];

            colorButton.forEach(color => {
                color.addEventListener('click', colorFill)
            })
    }
}

createGrid(16);

/* Fill grid cells with color */

function colorFill(e){
    let gridCells = document.querySelectorAll(".grid-element");
    let targetColor = e.target;
    if(targetColor.classList.contains("black-btn")){
        gridCells.forEach(cells => {
            cells.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = "black";
            })
        })
    } else if(targetColor.classList.contains("rainbow-btn")){
        gridCells.forEach(cells => {
            cells.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            })
        })
    } else if(targetColor.classList.contains("eraser-btn")){
        gridCells.forEach(cells => {
            cells.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = "white";
            })
        })
    }
}

/* Reset size of grid with user's input */

let gridSize = document.querySelector(".input-grid-size");
let setButton = document.querySelector(".set-btn");

setButton.addEventListener("click", function resetGridSize(){
    let input = gridSize.value;
    if(input >= 2 && input <= 80){
        console.log(input);
        mainGrid.innerHTML = '';
        createGrid(input);
    } else {
        alert("Number shouldn't be lower than 2 and greater than 100. Please try again.")
    }
})