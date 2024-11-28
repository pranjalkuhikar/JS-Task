let div = document.querySelector(".time");

function updatedClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = ` ${hours}:${minutes}:${seconds}`;
  div.textContent = now + time;
}

setInterval(updatedClock, 1000);
updatedClock();
