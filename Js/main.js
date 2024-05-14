let navBar = document.querySelector(".navBar");
let close = document.querySelector(".navBar  .close");
let menu = document.querySelector(".right_container  .menu");
menu.addEventListener("click", () => {
  navBar.classList.add("active");
});
close.addEventListener("click", () => {
  navBar.classList.remove("active");
});
