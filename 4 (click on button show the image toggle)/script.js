let btn = document.querySelector("button");
let img = document.querySelector("img");

let flag = 0;
btn.addEventListener("click", function () {
  if (flag === 0) {
    img.style.display = "none";
    flag = 1;
  } else {
    img.style.display = "block";
    flag = 0;
  }
});
