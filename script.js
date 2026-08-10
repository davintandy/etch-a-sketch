const container = document.getElementById("container");

for (let i = 0; i < 16*16; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "square";
    newDiv.addEventListener("mouseover", () => {
        newDiv.style.backgroundColor = "black";
    })
    container.appendChild(newDiv);
}