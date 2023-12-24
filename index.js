const container = document.getElementById("container");
const reset = document.getElementById("reset");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const small = document.getElementById("sixteen");
const medium = document.getElementById("thirtytwo");
const large = document.getElementById("sixtyfour");

small.addEventListener("click", () => {
    createCanvas(16);
});

medium.addEventListener("click", () => {
    createCanvas(32);
});

large.addEventListener("click", () => {
    createCanvas(64);
});

// document.addEventListener("DOMContentLoaded", () => {
//     createCanvas();
// });

function createCanvas(canvasSize) {
    let color = "#ff4d4c";
    for (i = 0; i < canvasSize * canvasSize; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("gridItem");
        newDiv.style.width = container.clientWidth / 16 + "px";
        container.appendChild(newDiv);

        reset.addEventListener("click", () => {
            newDiv.style.backgroundColor = "#9e9e9e33";
        });

        red.addEventListener("click", () => {
            color = "#ff4d4c";
        });

        green.addEventListener("click", () => {
            color = "#73ca83";
        });

        blue.addEventListener("click", () => {
            color = "#52aeff";
        });

        newDiv.addEventListener("mouseenter", () => {
            newDiv.style.backgroundColor = color;
        });
    }
}
