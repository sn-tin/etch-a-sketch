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

            let gridCells = document.querySelectorAll(".grid-element");

            gridCells.forEach(cells => {
                cells.addEventListener("mouseover", (e) => {
                    let grid = e.target;
                    grid.style.backgroundColor = "black";
                })
            })
    }
}

createGrid(16);

/* Reset size of grid with user's input */

// let setBtn = document.querySelector(".set-btn");
// let gridSize = document.querySelector(".input-grid-size");

// gridSize.addEventListener("change", function resetGridSize(){
//     console.log(gridSize);
//     let input = gridSize.value;
//     if(input >= 2 && input <= 80){
//         createGrid(input)
//     } else {
//         alert("Number shouldn't be lower than 2 and greater than 100. Please try again.")
//         input = 16;
//     }
// })