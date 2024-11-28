let btn = document.querySelector("button");
let box = document.querySelector(".boxes");

let flag = 0;
btn.addEventListener("click", function () {
  if (flag === 0) {
    box.style.scale = "1.5";
    flag = 1;
  } else {
    box.style.scale = "1";
    flag = 0;
  }
});
