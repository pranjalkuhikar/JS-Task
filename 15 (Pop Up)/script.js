let btn = document.querySelector("button");
let popup = document.querySelector(".popup");
let close = document.querySelector(".popup button");

btn.addEventListener("click", () => {
  popup.style.display = "flex";
});

popup.addEventListener("click", () => {
  popup.style.display = "none";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});
