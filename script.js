// ===============================
// Smooth Scrolling Navigation
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ===============================
// Project Card Scroll Animation
// ===============================

const projectCards = document.querySelectorAll(".project-card");


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.2
    }
);


projectCards.forEach(card => {

    observer.observe(card);

});


// ===============================
// Typing Effect (Terminal Style)
// ===============================

const text = "IoT Security Researcher";

let index = 0;

const typingElement = document.querySelector(".typing");


function typeEffect() {

    if (typingElement && index < text.length) {

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 100);

    }

}


typeEffect();


// ===============================
// Mobile Menu Toggle
// ===============================

const menuButton = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav ul");


if(menuButton){

    menuButton.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}


// ===============================
// Update Copyright Year
// ===============================

const year = document.querySelector("#year");


if(year){

    year.textContent = new Date().getFullYear();

}
