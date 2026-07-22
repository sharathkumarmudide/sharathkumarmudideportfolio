const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "#020617";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
    } else {
        header.style.background = "rgba(15,23,42,.85)";
        header.style.boxShadow = "none";
    }
});

const revealElements = document.querySelectorAll(
    ".hero-content, .hero-image, .about-container, .skill-card, .project-card, form"
);

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(element => {
        const top = element.getBoundingClientRect().top;

        if (top < triggerBottom) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const roles = [
    "Python Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer"
];

const roleElement = document.querySelector(".hero-content h2");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    let currentRole = roles[roleIndex];

    if (!deleting) {
        roleElement.textContent = currentRole.substring(0, charIndex++);
    } else {
        roleElement.textContent = currentRole.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentRole.length + 1) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex++;

        if (roleIndex === roles.length) {
            roleIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.clientHeight;

        if (scrollY >= top) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function(e){

        const circle = document.createElement("span");

        const x = e.clientX - this.offsetLeft;
        const y = e.clientY - this.offsetTop;

        circle.style.left = x + "px";
        circle.style.top = y + "px";

        circle.classList.add("ripple");

        this.appendChild(circle);

        setTimeout(()=>{
            circle.remove();
        },600);

    });

});

console.log("Portfolio Loaded Successfully 🚀");