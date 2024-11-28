let img = document.querySelector("img");
let circle = document.querySelector(".circle");
let btn = document.querySelector("button");

let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  if (event.code == "ArrowLeft") {
    x -= 10;
  } else if (event.code == "ArrowRight") {
    x += 10;
  } else if (event.code == "ArrowUp") {
    y -= 10;
  } else if (event.code == "ArrowDown") {
    y += 10;
  }
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;
  if (x > 1160 && y > 560) {
    img.style.opacity = 0;
  } else {
    img.style.opacity = 1;
  }
  btn.addEventListener("click", () => {
    x = 0;
    y = 0;
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
  });
});
