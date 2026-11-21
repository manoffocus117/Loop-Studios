const navbar = document.getElementById("navbar");
const menu = document.querySelector("menu");
const path = document.querySelector("path");

const handle_scroll = () => {
      if (window.scrollY > 75) {
            navbar.classList.add("scrolled");
            menu.classList.remove("text-white");
            path.setAttribute("fill", "#000000");
      } else {
            navbar.classList.remove("scrolled");
            menu.classList.add("text-white");
            path.setAttribute("fill", "#FFFFFF");
      }
};

window.addEventListener("scroll", handle_scroll, { passive: true });
handle_scroll();
