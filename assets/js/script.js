// script for nav links
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 0);
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    navLinks.forEach((navLink) => {
      navLink.classList.remove("actve");
    });
    navLink.classList.add("actve");
  });
});

$(document).ready(function () {
  // script for owl carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
