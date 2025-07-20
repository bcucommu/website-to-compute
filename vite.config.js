const box = document.getElementById("box");

box.addEventListener("click", () => {
  const x = Math.random() * (window.innerWidth - 50);
  const y = Math.random() * (window.innerHeight - 50);
  box.style.left = x + "px";
  box.style.top = y + "px";
});

