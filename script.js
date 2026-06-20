
// Typing Animation


const typingText = document.getElementById("typing-text");

const words = [
    "Full Stack Developer",
    "BCA Student",
    "Web Developer",
    "Machine Learning Enthusiast",
    "Frontend Developer",
    "Tech Explorer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typingText) {
        return;
    }

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 50 : 100
    );
}

typeEffect();



// Dark / Light Mode Toggle


const themeBtn =
    document.getElementById("themeBtn");

function updateThemeButton() {
    if (!themeBtn) {
        return;
    }

    themeBtn.textContent = document.body.classList.contains("light-mode")
        ? "Dark Mode"
        : "Light Mode";
}

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
}

updateThemeButton();

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        localStorage.setItem(
            "portfolio-theme",
            document.body.classList.contains("light-mode") ? "light" : "dark"
        );
        updateThemeButton();
    });
}



// Active Sidebar Link


const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".sidebar nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >= sectionTop
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");
        }
    });

});



// Reveal Animation on Scroll


const cards =
    document.querySelectorAll(
        ".section-card, .project-card"
    );

function revealCards() {

    cards.forEach(card => {

        const cardTop =
            card.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (
            cardTop < windowHeight - 100
        ) {

            card.style.opacity = "1";

            card.style.transform =
                "translateY(0)";
        }

    });
}

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(40px)";

    card.style.transition =
        "all 0.8s ease";
});

window.addEventListener(
    "scroll",
    revealCards
);

revealCards();



// Back To Top Button


const topBtn =
    document.createElement("button");

topBtn.textContent = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#d4af37";
topBtn.style.color = "#000";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});



// Welcome Message


window.addEventListener("load", () => {

    console.log(
        "Welcome to Mayank Rathore Portfolio"
    );

});

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
