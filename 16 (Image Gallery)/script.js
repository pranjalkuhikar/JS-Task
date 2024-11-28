let images = document.querySelectorAll(".boxes img");
let modalImg = document.querySelector(".modal img");
let modal = document.querySelector(".modal");

images.forEach((img) => {
  img.addEventListener("click", () => {
    let src = img.getAttribute("src");
    modalImg.setAttribute("src", src);
    modal.style.display = "flex";
  });
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});
