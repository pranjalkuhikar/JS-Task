let teams = [
  "Chennai Super Kings",
  "Delhi Capitals",
  "Kings XI Punjab",
  "Kolkata Knight Riders",
  "Mumbai Indians",
  "Rajasthan Royals",
  "Royal Challengers Bangalore",
  "Sunrisers Hyderabad",
];

let btn = document.querySelector("button");
let h3 = document.querySelector("h3");

btn.addEventListener("click", () => {
  h3.textContent = teams[Math.floor(Math.random() * teams.length)];
});
