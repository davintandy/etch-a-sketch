const container = document.getElementById("container");
const button = document.getElementById("grid");

createGrid(16)

button.addEventListener("click", function() {
    let gridSize = prompt("Set Grid Size (1-100)", 16);

    gridSize = parseInt(gridSize);
    
    if (isNaN(gridSize) || gridSize < 1) {
        gridSize = 1;
    }

    if (gridSize > 100) {
        gridSize = 100;
    }

    container.style.setProperty("--grid-size", gridSize);

    createGrid(gridSize);
})

function createGrid(size) {
    container.innerHTML = "";

    const totalSquares = size * size;

    for (let i = 0; i < totalSquares; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "square";
        newDiv.addEventListener("mouseover", () => {
            newDiv.style.backgroundColor = "black";
        })
        container.appendChild(newDiv);
    }
}