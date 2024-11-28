let btn = document.querySelector("button");
let box = document.querySelector("#box");
let circle = document.querySelector("#circle");

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

btn.addEventListener("click", function () {
  box.style.backgroundColor = getRandomColor();
});

circle.addEventListener("mouseenter", function () {
  circle.style.backgroundColor = getRandomColor();
  let h5 = document.createElement("h5");
  h5.textContent = getRandomColor();
  circle.appendChild(h5);
});
