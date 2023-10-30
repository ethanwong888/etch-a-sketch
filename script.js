const DEFAULT_COLOR = '#000000';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

const container = document.querySelector(".container");
const colorPicker = document.getElementById("colorPicker");
const color = document.getElementById("colorBtn");
const rainbow = document.getElementById("rainbowBtn");
const erase = document.getElementById("eraserBtn");
const clear = document.getElementById("clearBtn");
const sizeSlider = document.getElementById("sizeSlider");
const gridSize = document.getElementById("gridSize");



function setMode(mode) {
  currentMode = mode;
}

function setDrawingColor(color){
  currentColor = color;
}
colorPicker.oninput = (e) => setDrawingColor(e.target.value);
color.onclick = () => setMode("color");
rainbow.onclick = () => setMode("rainbow");
erase.onclick = () => setMode("eraser");
clear.onclick = () => changeSize(currentSize);





sizeSlider.onmousemove = (e) => setGridSize(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value)


// master function when user wants to change size of the drawing grid
function changeSize (newSize) {
  clearGrid();
  setGridSize(newSize);
  updateDisplayedSize(newSize);
  drawGrid(newSize);
}

function clearGrid() {
  container.innerText = "";
}

function setGridSize(newSize) {
  currentSize = newSize;
}

function updateDisplayedSize(size) {
  gridSize.innerHTML = `${size} x ${size}`;
}

function drawGrid(currentSize) {
  container.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`;

  for (let i = 0; i < (currentSize * currentSize); i++) {
    let pixelDiv = document.createElement("div");
    pixelDiv.setAttribute("id", "pixel");
    pixelDiv.addEventListener('mouseover', draw);
    pixelDiv.addEventListener('mousedown', draw);
    container.appendChild(pixelDiv);
  }
}

function reloadGrid() {
  clearGrid();
  drawGrid(currentSize);
}





let mouseClicked = false
document.body.onmousedown = () => (mouseClicked = true)
document.body.onmouseup = () => (mouseClicked = false)

function draw(e){
  if (e.type === 'mouseover' && !mouseClicked) return
  else if (currentMode == "color") {
    e.target.style.backgroundColor = currentColor;
  }
  else if (currentMode == "rainbow") {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
  }
  else if (currentMode == "eraser") {
    e.target.style.backgroundColor = '#FFFFFF';
  }
  
}

window.onload = () => {
  drawGrid(DEFAULT_SIZE);
}