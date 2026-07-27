// Typing Animation

const roles = [
    "Penetration Tester",
    "Cyber Security Student",
    "IoT Security Researcher",
    "Python Developer"
];


let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;


const typingElement = document.querySelector(".typing");


function typeEffect() {

    const currentRole = roles[roleIndex];


    if (!isDeleting) {

        typingElement.textContent =
        currentRole.substring(0, charIndex++);


        if (charIndex > currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1200);
            return;

        }

    } else {


        typingElement.textContent =
        currentRole.substring(0, charIndex--);


        if (charIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {

                roleIndex = 0;

            }

        }

    }


    setTimeout(typeEffect, isDeleting ? 50 : 100);

}


typeEffect();





// Navbar shadow when scrolling

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");


    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 0 20px rgba(0,255,136,0.3)";

    }

    else{

        header.style.boxShadow = "none";

    }

});





// Reveal animation for sections

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }


    });


},{

    threshold:0.2

});



sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(40px)";
    section.style.transition="0.8s";


    observer.observe(section);

});