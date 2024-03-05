const navLinks = document.querySelectorAll(".nav-link");
const btn = document.querySelector(".lets-plan-togeather");
const modal = document.getElementById("qrCodeModel");
const closeBtn = modal.querySelector(".close");
const navbar = document.querySelector(".navbar-nav");
const navbarBtns = document.querySelectorAll(".nav-link");

// script for nav links
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 0);
});

// Function to remove 'active' class from all navbarBtns
function removeActiveClass() {
    navbarBtns.forEach((btn) => {
        btn.classList.remove("actv");
    });
}

// Add event listener to each navbarBtn
navbarBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        // Remove 'active' class from all navbarBtns
        removeActiveClass();
        // Add 'active' class to the clicked navbarBtn
        this.classList.add("actv");
    });
});

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

btn.addEventListener("click", function () {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
