const container = document.querySelector(".container")

for (let i = 0; i < 256; i++) {
  let div = document.createElement("div");
  div.setAttribute("id", "pixel");
  container.appendChild(div);
  
}
// let div = document.createElement("div");
// container.appendChild(div);