let tar = document.querySelector(".tar");
let box = document.querySelector(".box");
let box2 = document.querySelector(".box2");
let sco = document.querySelector(".sco");
let score = 0;

function makeBubble() {
  let str = "";
  for (let i = 1; i <= 72; i++) {
    str += ` <div class="bubble">${Math.floor(Math.random() * 9) + 1}</div>`;
  }
  box2.innerHTML = str;
}
makeBubble();

function target() {
  tar.innerHTML = `${Math.floor(Math.random() * 9) + 1}`;
}
target();

function timer() {
  let time = 10;
  let timer = document.querySelector(".tim");
  let interval = setInterval(() => {
    timer.innerHTML = time--;
    if (time < 0) {
      clearInterval(interval);
      alert(`Time is up! Game Over! Your Score is  ${score}`);
      let str = "";
      str += ` <div class="game">Game Over</div>`;
      box.style.pointerEvents = "none";
      box2.innerHTML = str;
    }
  }, 1000);
}

timer();

function Logic() {
  let count = 0;
  box.addEventListener("click", (event) => {
    if (tar.innerText === event.target.innerText) {
      makeBubble();
      target();
      score = ++count * 10;
      sco.innerHTML = score;
    } else {
      alert("Wrong! Try again");
    }
  });
}
Logic();
