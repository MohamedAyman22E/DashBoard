let navBar = document.querySelector(".navBar");
let close = document.querySelector(".navBar  .close");
let menu = document.querySelector(".right_container  .menu");
menu.addEventListener("click", () => {
  navBar.classList.add("active");
});
close.addEventListener("click", () => {
  navBar.classList.remove("active");
});
// start toggle
let allSpan = document.querySelectorAll(".right_container .top .toggle span");
let sun = document.querySelector(".right_container .top  .sun");
let moon = document.querySelector(".right_container .top .moon");

allSpan.forEach(e => {
  e.addEventListener("click", () => {
    allSpan.forEach(x => {
      x.classList.remove("active");
      document.body.classList = "";
      localStorage.setItem("Background", "");
    });
    e.classList.add("active");
    if (sun.classList.contains("active")) {
      document.querySelector("body").classList.add("sun");
      document.body.classList.add("sun");
      localStorage.setItem("Background", "sun");
    } else {
      document.body.classList.add("moon");
      localStorage.setItem("Background", "moon");
    }
  });
});
document.querySelector("body").classList = localStorage.getItem("Background");
