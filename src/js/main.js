import "./_components.js";

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".header__burger");

menuBtn?.addEventListener("click", (e) => {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
});
