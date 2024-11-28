let btn = document.querySelector(".btn");
let progress = document.querySelector(".growth");
let h1 = document.querySelector("h1");
let grow = 0;
let val = null;
btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * (150 - 40 + 1)) + 40;
  val = setInterval(() => {
    grow++;
    h1.innerHTML = `${grow}%`;
    progress.style.width = `${grow}%`;
  }, random);

  setTimeout(() => {
    clearInterval(val);
    h1.textContent = "Done!";
    btn.style.pointerEvents = "none";
  }, random * 100);
});
