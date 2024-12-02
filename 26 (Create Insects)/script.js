let btn = document.querySelector(".btn");
let arr = [
  "https://plus.unsplash.com/premium_photo-1661872687000-e33a6cbcd379?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5zZWN0fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1516682875804-d707ef367ad8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zZWN0fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1516548935905-c010645ff21d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluc2VjdHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1460400213328-a214131cb764?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluc2VjdHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1470107355970-2ace9f20ab15?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluc2VjdHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1596767317977-a0db58e02be5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluc2VjdHxlbnwwfHwwfHx8MA%3D%3D",
];

btn.addEventListener("click", function () {
  let insect = Math.floor(Math.random() * arr.length);
  let img = document.createElement("img");
  img.setAttribute("src", arr[insect]);
  img.style.position = "absolute";
  img.style.width = "60px";
  img.style.height = "60px";
  img.style.left = Math.random() * 100 + `%`;
  img.style.top = Math.random() * 100 + `%`;
  img.style.transform = `rotate(${Math.random() * 360}deg)`;
  document.body.appendChild(img);
});
