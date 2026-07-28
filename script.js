// Smooth scrolling

document.querySelectorAll("a[href^='#']").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});



// Project card animation

const cards=document.querySelectorAll(".project-card");


window.addEventListener("scroll",()=>{

cards.forEach(card=>{

let position=card.getBoundingClientRect().top;

let screen=window.innerHeight;


if(position < screen - 100){

card.style.opacity="1";
card.style.transform="translateY(0)";

}

});


});


// Initial animation

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition="0.6s";

});
