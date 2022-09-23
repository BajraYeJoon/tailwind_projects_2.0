const btn = document.getElementById("menu-btn");
const display = document.getElementById("menu");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  display.classList.toggle("flex");
  display.classList.toggle("hidden");
}
