let btn = document.querySelector("button");
let box = document.querySelector(".box");

let flag = 0;
btn.addEventListener("click", () => {
  if (flag === 0) {
    btn.textContent = "Hello World!";
    flag = 1;
  } else {
    btn.textContent = "Changed";
    flag = 0;
  }
});
