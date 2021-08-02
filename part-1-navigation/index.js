const menuBtn = document.querySelector("[data-nav-btn]");
const navigationMenu = document.querySelector("[data-nav]");
const widthForMedia = window.matchMedia("(min-width: 1199px)");

const showNav = function () {
  navigationMenu.classList.remove("navigation__show_hidden");
  menuBtn.innerText = "Скрыть меню";
};

const hideNav = function () {
  navigationMenu.classList.add("navigation__show_hidden");
  menuBtn.innerText = "Показать меню";
};

if (!widthForMedia.matches) {
  hideNav();
}

window.addEventListener("resize", () => {
  widthForMedia.matches ? showNav() : hideNav();
});

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (navigationMenu.classList.contains("navigation__show_hidden")) {
    showNav();
  } else {
    hideNav();
  }
});
