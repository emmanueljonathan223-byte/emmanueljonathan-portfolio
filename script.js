// ==============================
// MOBILE MENU TOGGLE
// ==============================
const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
});

// ==============================
// SMOOTH SCROLLING
// ==============================
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
        // Close mobile menu after clicking
        if(window.innerWidth <= 768){
            navLinks.style.display = "none";
        }
    });
});

// ==============================
// TYPING EFFECT IN HERO
// ==============================
const heroText = document.querySelector(".hero p");
const phrases = [
    "I build responsive and modern websites.",
    "I solve real problems with clean code.",
    "I create seamless user experiences."
];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let speed = 100;

function type(){
    if(i >= phrases.length) i = 0;
    currentPhrase = phrases[i].split("");

    if(!isDeleting && j <= currentPhrase.length){
        heroText.textContent = currentPhrase.slice(0,j).join("");
        j++;
        setTimeout(type, speed);
    } else if(!isDeleting && j > currentPhrase.length){
        isDeleting = true;
        setTimeout(type, 1500);
    } else if(isDeleting && j >= 0){
        heroText.textContent = currentPhrase.slice(0,j).join("");
        j--;
        setTimeout(type, speed/2);
    } else if(isDeleting && j < 0){
        isDeleting = false;
        i++;
        setTimeout(type, 500);
    }
}
type();

// ==============================
// SCROLL REVEAL
// ==============================
const scrollElements = document.querySelectorAll("section, .project-card, .skill");

const elementInView = (el, offset = 150) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
    );
};

const displayScrollElement = (el) => {
    el.classList.add("scrolled");
};

const hideScrollElement = (el) => {
    el.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
        if(elementInView(el, 150)){
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

window.addEventListener("scroll", handleScrollAnimation);
// Animate skill bars when page loads
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");
    progressBars.forEach(bar => {
        const width = bar.getAttribute("data-progress");
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});
// Open modal
const projectCards = document.querySelectorAll(".project-card");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".close");

projectCards.forEach(card => {
    card.addEventListener("click", () => {
        const modalId = card.getAttribute("data-modal");
        document.getElementById(modalId).style.display = "block";
    });
});

// Close modal
closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.parentElement.parentElement.style.display = "none";
    });
});

// Close when clicking outside modal
window.addEventListener("click", (e) => {
    modals.forEach(modal => {
        if(e.target == modal){
            modal.style.display = "none";
        }
    });
});
// COPY TO CLIPBOARD FUNCTIONALITY
const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const text = btn.getAttribute("data-copy");
        navigator.clipboard.writeText(text).then(() => {
            btn.textContent = "Copied!";
            setTimeout(() => {
                btn.textContent = "Copy";
            }, 2000);
        }).catch(err => {
            alert("Failed to copy!");
        });
    });

});
