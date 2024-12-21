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
const projects = document.querySelectorAll(".project-item");
document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll("[data-filter]");

  // FILTER LOGIC
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
          project.style.display = "block";
          novisibleProject++;
        } else {
          project.style.display = "none";
        }

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

    // MODAL LOGIC
  });
});
// PROJECT MODAL
const projectContainer = document.querySelector(".main-project-container");
const projectModal = document.querySelector(".project-modal");
// MODAL
const viewProjectBtns = document.querySelectorAll(".view-project");

projects.forEach((project) => {
  const viewBtn = project.querySelector(".view-project");
  viewBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const projectId = project.getAttribute("data-projectId");
    const matchedProject = Array.from(projects).find(
      (currentProject) =>
        currentProject.getAttribute("data-projectId") === projectId
    );
    const projectUrl = matchedProject.getAttribute("data-projectUrl");
    console.log(projectUrl);

    // FETCH PROJECT URL CONTENT
    fetch(projectUrl)
      .then((response) => response.text())
      .then((html) => {
        projectModal.style.display = "flex";
        projectContainer.innerHTML = "";
        projectContainer.innerHTML = html;
        // Close modal logic
        const closeModalBtn = document.querySelector(".close-modal");
        if (closeModalBtn) {
          closeModalBtn.addEventListener("click", () => {
            projectModal.style.display = "none";
          });
        }
      })
      .catch((e) => console.log("error getting details", e));
  });
});

// console.log(projects);
