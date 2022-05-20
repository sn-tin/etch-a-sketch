/* Creating Grid */
const mainGrid = document.querySelector(".main-grid");

function createGrid(rowsCol){
    for(let i = 0; i < rowsCol * rowsCol; i++){
            let createDIVs = document.createElement("div");
            createDIVs.classList.add("grid-element");
            mainGrid.insertAdjacentElement("beforeend", createDIVs);
            
            mainGrid.style.gridTemplateRows = `(repeat(${rowsCol}), 1fr)`;
            mainGrid.style.gridTemplateColumns = `(repeat(${rowsCol}), 1fr)`;
    }
}

createGrid(16);
/* Input size of grid from user */
const inputGridSize = document.querySelector(".input-grid-size").value;
const setButton = document.querySelector(".set-btn");

function resetGridSize() {
    setButton.addEventListener("click", () => {
        rowColumnSize(inputGridSize);

        let gridElement = document.querySelectorAll(".grid-element");
        gridElement.remove();

        createGrid(inputGridSize);
    })
}