let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let inner = document.querySelector(".inner");

let count = 0;

btn.addEventListener("click", () => {
  btn.style.pointerEvents = "none";

  let num = Math.floor(Math.random() * 100);

  let id = setInterval(() => {
    count++;
    h2.innerHTML = count + "%";
    inner.style.width = count + "%";
    btn.style.opacity = "0.6";
  }, num);

  setTimeout(() => {
    clearInterval(id);
    btn.innerHTML = "Downloaded";
    console.log(`Downloaded in ${num / 10} seconds`);
  }, num * 100);
});

let box = document.querySelector(".box");

box.addEventListener("mousemove", (e) => {
  box.style.setProperty("--x", e.clientX + "px");
  box.style.setProperty("--y", e.clientY + "px");
  console.log(e);

  //The difference between clientX and offsetX is that offsetX is the position inside the element, while clientX is the position in the viewport.
});
