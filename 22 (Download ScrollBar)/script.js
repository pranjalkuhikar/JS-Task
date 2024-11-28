var btn = document.querySelector(".btn");
var progress = document.querySelector(".growth");
var h1 = document.querySelector("h1");
var grow = 0;
var val = null;
btn.addEventListener("click", () => {
  val = setInterval(() => {
    grow++;
    h1.innerHTML = `${grow}%`;
    progress.style.width = `${grow}%`;
  }, 50);
  setTimeout(() => {
    clearInterval(val);
    h1.textContent = "Done!";
    btn.style.pointerEvents = "none";
  }, 5000);
});
