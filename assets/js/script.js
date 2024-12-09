const nav = document.getElementById("main-nav");
const hamburger = document.getElementById("main-hamburger");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("visible-nav");
  hamburger.classList.toggle("transform-hamburger");
});
