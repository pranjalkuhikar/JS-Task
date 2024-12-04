setInterval(function () {
  let sec = document.querySelector(".sec");
  let min = document.querySelector(".min");
  let hour = document.querySelector(".hour");
  let second = new Date().getSeconds();
  let minutes = new Date().getMinutes();
  let hours = new Date().getHours();
  //   console.log(second, minutes, hours);
  sec.style.transform = `rotate(${second * 6}deg) translateY(-50%)`;
  min.style.transform = `rotate(${minutes * 6}deg) translateY(-50%)`;
  hour.style.transform = `rotate(${hours * 6}deg) translateY(-50%)`;
});
