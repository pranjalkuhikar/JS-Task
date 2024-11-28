const follower = document.querySelector(".follower");

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  follower.style.left = `${mouseX}px`;
  follower.style.top = `${mouseY}px`;
});
