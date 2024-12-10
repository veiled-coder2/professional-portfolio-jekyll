// THEME
const themeBtn = document.getElementById("theme-id");
const body = document.body;
themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  body.classList.contains("dark-theme")
    ? (themeBtn.textContent = "light mode")
    : (themeBtn.textContent = "dark mode");
});

// NAV
const nav = document.getElementById("main-nav");
const hamburger = document.getElementById("main-hamburger");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("visible-nav");
  hamburger.classList.toggle("transform-hamburger");
});
