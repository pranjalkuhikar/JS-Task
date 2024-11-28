let btn = document.querySelector("button");
let box = document.querySelector(".box");
btn.addEventListener("click", () => {
  box.style.position = "absolute";
  box.style.left = `${Math.random() * 100}%`;
  box.style.top = `${Math.random() * 100}%`;
});
