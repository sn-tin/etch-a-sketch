/* Creating Grid */
const mainGrid = document.querySelector(".main-grid");
let gridCells = document.querySelectorAll(".grid-element");


function createGrid(rowsCol){
    for(let i = 0; i < rowsCol * rowsCol; i++){
            let createDIVs = document.createElement("div");
            createDIVs.classList.add("grid-element");
            createDIVs.classList.add("cell-color");
            mainGrid.insertAdjacentElement("beforeend", createDIVs);
            mainGrid.style.gridTemplateColumns = `repeat(${rowsCol} , 1fr)`;
            mainGrid.style.gridTemplateRows = `repeat(${rowsCol} , 1fr)`;
    }
}

/* Reset size of grid with user's input */
const inputGridSize = document.querySelector(".input-grid-size");
const setButton = document.querySelector(".set-btn");

function resetGridSize() {
    setButton.addEventListener("click", function() {
        let size = inputGridSize.value;
        
        console.log(size)

        if(size < 2 || size > 80){
            alert("Invalid Number. Please try again!")
        } else {
            gridCells.remove();
            createGrid(size);
        }
    })
}


/* Main Sketching */
function sketch(){
    createGrid(16);
    gridCells.forEach(cells => {
        cells.addEventListener("mouseover", (e) => {
            e.target.classList.replace("cell-color", "mouseover-color")
        })
    })
    resetGridSize();
}

sketch();