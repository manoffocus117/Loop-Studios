const navbar = document.getElementById("navbar");

const handle_scroll = () => {
      if (window.scrollY > 75) {
            navbar.classList.add("scrolled");
      } else {
            navbar.classList.remove("scrolled");
      }
};

window.addEventListener("scroll", handle_scroll, { passive: true });
handle_scroll();
