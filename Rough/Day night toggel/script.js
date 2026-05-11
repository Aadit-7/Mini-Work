const btn = document.getElementById("themeToggle");

btn.addEventListener("click", () => {
  document.body.classList.toggle("night");

  if (document.body.classList.contains("night")) {
    btn.innerHTML = '<i class="ri-sun-fill"></i> Day';
  } else {
    btn.innerHTML = '<i class="ri-moon-fill"></i> Night';
  }
});
