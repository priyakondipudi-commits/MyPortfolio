console.log("Welcome to Durga Bhavani's Portfolio!");

// Highlight the navigation link for the section being viewed
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.style.color = "";

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.style.color = "#7dd3fc";
        }
    });
});

// Display a message when the project button is clicked
const projectButton = document.querySelector(".btn");

projectButton.addEventListener("click", () => {
    console.log("The visitor is exploring the projects section.");
});