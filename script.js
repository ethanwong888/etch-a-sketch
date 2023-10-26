const container = document.querySelector(".container")

for (let i = 0; i < 256; i++) {
  let pixelDiv = document.createElement("div");
  pixelDiv.setAttribute("id", "pixel");
  pixelDiv.addEventListener('mouseover', draw)
  pixelDiv.addEventListener('mousedown', draw)
  container.appendChild(pixelDiv);
}


let mouseClicked = false
document.body.onmousedown = () => (mouseClicked = true)
document.body.onmouseup = () => (mouseClicked = false)

function draw(e){
  if (e.type === 'mouseover' && !mouseClicked) return
  if (mouseClicked) {
    e.target.style.backgroundColor = '#333333';
  }
  
}