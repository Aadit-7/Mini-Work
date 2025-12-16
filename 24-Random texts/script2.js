let btn = document.querySelector("button");
let body = document.querySelector("body");

let arr = [
  "Biscuit is rescist",
  "Biscuit is @sshole",
  "Biscuit is pedofile",
  "Biscuit is bitch",
  "Biscuit is mc",
  "Biscuit is bc",
  "Biscuit is nigger",
  "Biscuit is bloody mf",
];

btn.addEventListener("click", function () {
  let div = document.createElement("div");
  let h1 = document.createElement("h1");

  let x = Math.floor(Math.random() * 80);
  let y = Math.floor(Math.random() * 80);
  //   let x = Math.floor(Math.random() * 100);
  //   let y = Math.floor(Math.random() * 100);
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);
  let r = Math.floor(Math.random() * 360);
  let scl = Math.floor(Math.random() * 3);

  h1.innerHTML = arr[Math.floor(Math.random() * arr.length)];
  h1.style.color = `rgb(${c1}, ${c2}, ${c3})`;
  h1.style.position = "absolute";
  h1.style.rotate = r + "deg";
  h1.style.scale = scl;

  h1.style.left = x + "%";
  h1.style.top = y + "%";
  body.appendChild(h1);

  //   div.style.height = "100px";
  //   div.style.width = "100px";
  //   div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
  //   div.style.position = "absolute";
  //   div.style.rotate = r + "deg";
  //   div.style.scale = scl;

  //   div.style.left = x + "%";
  //   div.style.top = y + "%";

  //   body.appendChild(div);
});
