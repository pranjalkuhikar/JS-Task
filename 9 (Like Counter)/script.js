let like = document.querySelector(".like");
let p = document.querySelector("p");

let count = 0;
like.addEventListener("click", () => {
  count++;
  p.textContent = count;
});
