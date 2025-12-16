let box = document.querySelector(".box");

box.addEventListener("mousemove", (e) => {
  box.style.setProperty("--x", e.offsetX + "px");
  box.style.setProperty("--y", e.offsetY + "px");
  console.log(e);

  //The difference between clientX and offsetX is that offsetX is the position inside the element, while clientX is the position in the viewport.
});
