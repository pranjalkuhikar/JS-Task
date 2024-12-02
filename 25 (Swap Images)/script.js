let btn = document.querySelector(".btn");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

btn.addEventListener("click", function () {
  let get1 = img1.getAttribute("src");
  let get2 = img2.getAttribute("src");
  img2.setAttribute("src", get1);
  img1.setAttribute("src", get2);
});
