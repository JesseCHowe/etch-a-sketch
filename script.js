const gridContainer = document.getElementById("container");

let gridDimensions = 16;
let setOpac = 0;
function initGrid(gridDimensions) {
    setGrid(gridDimensions);
    setHover();
}
function setGrid(gridDim) {
    for(let i = 0; i < gridDimensions**2; i++) {
        let grid = document.createElement("div");
        grid.classList.add("square");
        gridContainer.appendChild(grid);
    }
}

function setHover() {
    document.querySelectorAll('.square').forEach(function(element){
        element.addEventListener('mouseover', highlight);
    })
}

function highlight(e) {
    let compStyles = window.getComputedStyle(this);
    let currentOpacity = +compStyles.getPropertyValue('opacity');
    currentOpacity+= 0.1;
    console.log(currentOpacity);
    this.style.setProperty('opacity', currentOpacity);
}

const resetButton = document.getElementById("resetButton");

resetButton.addEventListener('click', resetGrid);

function resetGrid(e) {
    resizeGrid();
    clearGrid();
}

function resizeGrid() {
    gridDimensions = prompt('what size?');
    document.documentElement.style.setProperty('--gridDimension', gridDimensions);
    initGrid(gridDimensions);
}

function clearGrid() {
    document.querySelectorAll('.square').forEach(function(element){
        element.style.background = "var(--defaultColor)";
        element.style.opacity = 0;
    })
}

initGrid();