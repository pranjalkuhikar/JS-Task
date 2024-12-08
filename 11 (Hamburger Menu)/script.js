let inner = document.querySelector(".inner");
let outer = document.querySelector(".outer");
let close = document.querySelector(".close");

outer.addEventListener("click", () => {
  inner.style.right = 0;
});

close.addEventListener("click", () => {
  inner.style.right = `${-30 + "%"}`;
});
