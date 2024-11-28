let heart = document.querySelector(".heart");
let img = document.querySelector("img");

img.addEventListener("dblclick", () => {
  heart.style.fontSize = "6em";
  heart.style.opacity = 1;

  setTimeout(() => {
    heart.style.transition = "opacity 0.5s ease";
    heart.style.opacity = 0;
  }, 100);
});
