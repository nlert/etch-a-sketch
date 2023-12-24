const container = document.getElementById("container");

document.addEventListener('DOMContentLoaded', () => {
    for (i = 0; i < 16 * 16; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("gridItem");
        newDiv.style.width = container.clientWidth / 16 + "px";
        container.appendChild(newDiv);
    }
})