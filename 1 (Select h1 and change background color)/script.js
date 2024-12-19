let btn = document.querySelector("button");
let box = document.querySelector(".box");

let flag = 0;
btn.addEventListener("click", function () {
  if (flag === 0) {
    box.style.backgroundColor = "yellow";
    flag = 1;
  } else {
    box.style.backgroundColor = "transparent";
    flag = 0;
  }
});
