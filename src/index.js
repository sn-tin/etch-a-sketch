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

            // gridCells.forEach(cells => {
            //     cells.addEventListener("mouseover", (e) => {
            //         let grid = e.target;
            //         grid.style.backgroundColor = "black";
            //     })
            // })
            gridCells.forEach(cells => {
                cells.addEventListener("mouseover", colorFill);
            })
    }
}

createGrid(16);

/* Color Fill */
// function colorFill(){
//     let black = document.querySelector(".black-btn");
//     let rainbow = document.querySelector(".rainbow-btn");
//     let erase = document.querySelector(".eraser-btn");
//     let colorButton = [black, rainbow, erase];

//     colorButton.forEach(color => {
//         color.addEventListener("click", () => {
//             switch(color.className){
//                 case "black-btn":
//                     this.style.backgroundColor = "black";
//                 break;
//                 case "rainbow-btn":
//                     this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
//                 break;
//                 case "eraser-btn":
//                     this.style.backgroundColor = "white";
//                 break;
//                 default:
//                     this.style.backgroundColor = "black";
//                 break;
//             }
//         })
//     })
// }

function colorFill(){
    let colorButton = document.getElementsByTagName("button");

    for (let i = 0; i < colorButton.length; i++) {
        switch(true){
            case (i === 0):
                this.style.backgroundColor = "black";
            break;
            case (i === 1):
                this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            break;
            case (i === 2):
                this.style.backgroundColor = "white";
            break;
            default:
                this.style.backgroundColor = "black";
            break;
        }
    }
}

/* Reset size of grid with user's input */

let gridSize = document.querySelector(".input-grid-size");

gridSize.addEventListener("change", function resetGridSize(){
    let input = gridSize.value;
    if(input >= 2 && input <= 80){
        mainGrid.innerHTML = '';
        createGrid(input);
    } else {
        alert("Number shouldn't be lower than 2 and greater than 100. Please try again.")
        input = 16;
    }
})