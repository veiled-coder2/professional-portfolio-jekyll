// THEME
const themeBtn = document.querySelectorAll(".theme");
const body = document.body;
themeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    body.classList.contains("dark-theme")
      ? (btn.textContent = "light mode")
      : (btn.textContent = "dark mode");
  });
});

// NAV
const nav = document.getElementById("main-nav");
const hamburger = document.getElementById("main-hamburger");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("visible-nav");
  hamburger.classList.toggle("transform-hamburger");
});
