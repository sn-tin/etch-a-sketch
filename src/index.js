/* Creating Grid */
const mainGrid = document.querySelector(".main-grid");
let gridElement = document.querySelectorAll(".grid-element");

function createGrid(boxes){
    for(let rows = 0; rows < boxes; rows++){
        for(let columns = 0; columns < boxes; columns++){
            let createDIVs = document.createElement("div");
            createDIVs.classList.add("grid-element");
            mainGrid.insertAdjacentElement("beforeend", createDIVs);
            gridElement.forEach(grid => {
                grid.addEventListener("mouseover", function(e){
                    e.target.backgroundColor = "black";
                })
            })
        }
    }
}

/* Size for grid rows and columns */
function rowColumnSize(size){
    mainGrid.style.gridTemplateRows = `(repeat(${size}), 1fr)`;
    mainGrid.style.gridTemplateColumns = `(repeat(${size}), 1fr)`;
}

/* Input size of grid from user */
const inputGridSize = document.querySelector(".grid-size");

function changeSize(){
    let setValue = inputGridSize.value;
    rowColumnSize(setValue);
    gridElement.remove();
    createGrid(setValue);
}

/* Main sketching */
function sketch(){
    createGrid(16);
    let setButton = document.querySelector(".set-btn");
    setButton.addEventListener('click', changeSize);
    fillColor();
}

sketch();