let btn = document.querySelector("button");
let div = document.querySelector("div");

let flag = 0;
btn.addEventListener("click", function () {
  if (flag === 0) {
    div.style.backgroundColor = "Yellow";
    flag = 1;
  } else {
    div.style.backgroundColor = "Transparent";
    flag = 0;
  }
});

btn.addEventListener("dblclick", function () {
  if (flag === 0) {
    div.style.backgroundColor = "Red";
    flag = 1;
  } else {
    div.style.backgroundColor = "Transparent";
    flag = 0;
  }
});
