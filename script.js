const DEFAULT_COLOR = '#000000';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

const container = document.querySelector(".container");
const colorPicker = document.getElementById("colorPicker");
const sizeSlider = document.getElementById("sizeSlider");
const gridSize = document.getElementById("gridSize");


function setDrawingColor(color){
  // color (input) should be the new color selected
  currentColor = color;
}
colorPicker.oninput = (e) => setDrawingColor(e.target.value);





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





let mouseClicked = false
document.body.onmousedown = () => (mouseClicked = true)
document.body.onmouseup = () => (mouseClicked = false)

function draw(e){
  if (e.type === 'mouseover' && !mouseClicked) return
  if (mouseClicked) {
    e.target.style.backgroundColor = currentColor;
  }
  
}

window.onload = () => {
  drawGrid(DEFAULT_SIZE);
}