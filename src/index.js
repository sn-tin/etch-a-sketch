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

            let gridCells = document.querySelectorAll(".grid-element");

            gridCells.forEach(cells => {
                cells.addEventListener("mouseover", (e) => {
                    e.target.style.backgroundColor = "black";
                })
            })
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

function colorBtn(){
    let blackBtn = document.querySelector("black-btn");
    let rainbowBtn = document.querySelector("rainbow-btn");
    let eraserBtn = document.querySelector("white-btn");
    let coloredBtn = [blackBtn, rainbowBtn, eraserBtn];

    coloredBtn.forEach(colors => {
        colors.addEventListener("click", (e) => {

        switch(e.className){
            case "black-btn":
                e.target.style.backgroundColor = "black";
            break;
            case "rainbow-btn": 
                e.target.style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
            break;
            case "white-btn":
                e.target.style.backgroundColor = "white";
            break;
            default:
                e.target.style.backgroundColor = "black";
            break;
        }
        })
    })
}
