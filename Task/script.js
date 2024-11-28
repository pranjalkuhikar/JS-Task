let btn = document.querySelector("button");
let box = document.querySelector(".box");
let p = document.querySelector("p");
let img = document.querySelector("img");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");

// btn.addEventListener("click", () => {
//   let h1 = document.createElement("h1");
//   h1.textContent = "Hello World";
//   box.appendChild(h1);
// });

// btn.addEventListener("click", () => {
//   let h1 = document.createElement("div");
//   h1.style.height = "100px";
//   h1.style.width = "100px";
//   h1.style.backgroundColor = "red";
//   h1.style.border = "1px solid black";
//   h1.style.margin = "10px";
//   box.appendChild(h1);
// });

// p.addEventListener("mouseover", () => {
//   p.style.fontSize = "21px";
// });

// let flag = 0;
// btn.addEventListener("click", () => {
//   if (flag == 0) {
//     img.style.opacity = "0";
//     flag = 1;
//   } else {
//     img.style.opacity = "1";
//     flag = 0;
//   }
// });

// img.addEventListener("mouseenter", () => {
//   h1.innerHTML = "Stay away from her";
//   h1.fontSize = "30px";
//   box.appendChild(h1);
//   body.style.backgroundColor = "red";
// });
// img.addEventListener("mouseleave", () => {
//   h1.innerHTML = "That's Good";
//   h1.fontSize = "30px";
//   box.appendChild(h1);
//   body.style.backgroundColor = "transparent";
// });

// function getRandomColor() {
//   let r = Math.floor(Math.random() * 256);
//   let g = Math.floor(Math.random() * 256);
//   let b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// }
// box.addEventListener("click", () => {
//   box.style.backgroundColor = getRandomColor();
// });

const iplTeams = [
  "Chennai Super Kings",
  "Delhi Capitals",
  "Gujarat Titans",
  "Kolkata Knight Riders",
  "Lucknow Super Giants",
  "Mumbai Indians",
  "Punjab Kings",
  "Rajasthan Royals",
  "Royal Challengers Bangalore",
  "Sunrisers Hyderabad",
];

btn.addEventListener("click", () => {
  let randomTeam = iplTeams[Math.floor(Math.random() * iplTeams.length)];
  h1.textContent = `Current IPL Team: ${randomTeam}`;
  box.appendChild(h1);
});
