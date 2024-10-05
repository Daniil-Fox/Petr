import "./_components.js";

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".header__burger");
const menuBody = menu?.querySelector(".menu__body");
menuBtn?.addEventListener("click", (e) => {
  let isActive = menu.classList.toggle("active");
  menuBtn.classList.toggle("active");

  if (isActive) {
    menu.style.display = "flex";
    setTimeout(() => {
      menu.style.opacity = 1;
      menu.style.zIndex = 100;
    }, 10);

    setTimeout(() => {
      menuBody.style.transform = "translateX(0)";
    }, 310);
  } else {
    menuBody.style.transform = null;
    setTimeout(() => {
      menu.style.opacity = null;
      menu.style.zIndex = null;
    }, 310);
    setTimeout(() => {
      menu.style.display = null;
    }, 320);
  }
});
