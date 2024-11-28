let body = document.querySelector("body");
let btn = document.querySelector("button");
let light = document.querySelector(".light");
let dark = document.querySelector(".dark");

light.addEventListener("click", () => {
  body.style.backgroundColor = "#fff";
});

dark.addEventListener("click", () => {
  body.style.backgroundColor = "#000";
});

let flag = 0;
btn.addEventListener("click", () => {
  if (flag === 0) {
    body.style.backgroundColor = "#000";
    flag = 1;
  } else {
    body.style.backgroundColor = "#fff";
    flag = 0;
  }
});
