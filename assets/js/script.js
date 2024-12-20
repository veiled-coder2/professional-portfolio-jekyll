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

//PROJECT FILTER
console.log("ok");
document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll("[data-filter]");
  const projects = document.querySelectorAll(".project-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((button) => {
        button.style.backgroundColor = "";
      });

      btn.style.backgroundColor = "green";
      let novisibleProject = 0;
      const filtertype = btn.getAttribute("data-filter");
      projects.forEach((project) => {
        const stack = project.getAttribute("data-stack");
        if (filtertype === "all" || stack.includes(filtertype)) {
          // project.style.width = "100%";
          project.style.display = "block";
          novisibleProject++;
        } else {
          project.style.display = "none";
        }
      });

      if (novisibleProject === 1 && window.innerWidth >= 725) {
        projects.forEach((project) => {
          project.style.width = "30%";
        });
      } else {
        projects.forEach((project) => {
          project.style.width = "100%";
        });
      }
    });
  });
});
