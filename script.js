const navbar = document.getElementById("navbar");
const menu = document.querySelector("menu");
const path = document.querySelector("path");
const open_menu = document.getElementById("open-menu");
const close_menu = document.getElementById("close-menu");
const mobile_menu = document.getElementById("mobile-menu");
const desktop_menu = document.getElementById("desktop-menu");
const hamburger_icon = document.getElementById("hamburger-icon");

const handle_scroll = () => {
      if (window.scrollY > 75) {
            navbar.classList.add("scrolled");
            menu.classList.remove("text-white");
            path.setAttribute("fill", "#000000");
            hamburger_icon.setAttribute("fill", "#000000");
      } else {
            navbar.classList.remove("scrolled");
            menu.classList.add("text-white");
            path.setAttribute("fill", "#FFFFFF");
            hamburger_icon.setAttribute("fill", "#FFFFFF");
      }
};

window.addEventListener("scroll", handle_scroll, { passive: true });
handle_scroll();

open_menu.addEventListener("click", () => {
      mobile_menu.classList.remove("hidden");
      desktop_menu.classList.add("hidden");
});

close_menu.addEventListener("click", () => {
      mobile_menu.classList.add("hidden");
      desktop_menu.classList.remove("hidden");
});
