// const menuIcon = document.getElementById("menu-icon");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("overlay-left");
const overlaySelectedWork = document.getElementById("overlay-selected-work");
const options = document.querySelectorAll(".option"); // Dùng querySelectorAll()
// const menuIconSelectedWork = document.getElementById("menu-icon-selected-work");
const navbarLeft = document.getElementById("navbar-left");

const contactButton = document.getElementById("contact-click");
const contactContent= document.getElementById("contact");

const aboutMeButton = document.getElementById("about-me-click");
const aboutMeContent= document.getElementById("about-me");


const selectedWorkButton = document.getElementById("selected-work-click");
const selectedWorContent= document.getElementById("selected-work");

const educationButton = document.getElementById("education-click");
const educationContent= document.getElementById("education");


contactButton.addEventListener("click", () => {
    contactContent.scrollIntoView({ behavior: "smooth" });
});


aboutMeButton.addEventListener("click", () => {
    aboutMeContent.scrollIntoView({ behavior: "smooth" });
});


selectedWorkButton.addEventListener("click", () => {
    selectedWorContent.scrollIntoView({ behavior: "smooth" });
});

educationButton.addEventListener("click", () => {
    educationContent.scrollIntoView({ behavior: "smooth" });
});

// menuIcon.addEventListener("click", () => {
//     overlay.classList.add("active");
// });

closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
});


options.forEach((option) => {
    option.addEventListener("click", () => {
        overlaySelectedWork.classList.add("active");
    });
});

closeBtn.addEventListener("click", () => {
    overlaySelectedWork.classList.remove("active");
});


// menuIconSelectedWork.addEventListener("click", () => {
//     overlay.classList.add("active");
// });

navbarLeft.addEventListener("click", () => {
    overlaySelectedWork.classList.remove("active");
});

