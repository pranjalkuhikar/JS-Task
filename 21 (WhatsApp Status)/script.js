let box = document.querySelector(".box");

let user = [
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    name: "John Doe",
    lastSeen: "1",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    name: "Jane Smith",
    lastSeen: "3",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    name: "Mike Johnson",
    lastSeen: "2",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    name: "Emily Brown",
    lastSeen: "3",
  },
  {
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    name: "David Lee",
    lastSeen: "4",
  },
  {
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    name: "Sarah Taylor",
    lastSeen: "",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1683140840845-073fa9638261?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    name: "Kevin White",
    lastSeen: "3",
  },
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    name: "Lisa Nguyen",
    lastSeen: "9",
  },
  {
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    name: "Tom Harris",
    lastSeen: "2",
  },
  {
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    name: "Amy Martin",
    lastSeen: "5",
  },
];

function Main() {
  let str = "";
  user.forEach((user, index) => {
    str += `<div class="row">
            <img src=${user.img} alt=""/>
            <div>
              <h2>${user.name}</h2>
              <p>Last seen ${user.lastSeen} hour ago</p>
            </div>
          </div>`;
  });
  box.innerHTML = str;
}

Main();

let rows = document.querySelectorAll(".row");

let stateImg = document.querySelector(".state img");
let state = document.querySelector(".state");
let btn = document.querySelector("button");

rows.forEach((row) => {
  row.addEventListener("click", () => {
    let imgSrc = row.querySelector("img").getAttribute("src");
    stateImg.setAttribute("src", imgSrc);
    state.style.display = "flex";
  });
});

btn.addEventListener("click", () => {
  state.style.display = "none";
});
