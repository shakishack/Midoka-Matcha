const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

const menuBtn = document.querySelector("#hamburger-menu");
const navLinks = document.querySelector(".navbar-nav");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
