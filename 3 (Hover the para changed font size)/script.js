let p = document.querySelector("p");

p.addEventListener("mouseover", () => {
  p.style.fontSize = "1.3em";
});

p.addEventListener("mouseleave", () => {
  p.style.fontSize = "1em";
});
