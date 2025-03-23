const menuIcon = document.getElementById("menu-icon");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("overlay-left");
const overlaySelectedWork = document.getElementById("overlay-selected-work");
const options = document.querySelectorAll(".option"); // Dùng querySelectorAll()
const menuIconSelectedWork = document.getElementById("menu-icon-selected-work");
const navbarLeft = document.getElementById("navbar-left");


menuIcon.addEventListener("click", () => {
    overlay.classList.add("active");
});

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


menuIconSelectedWork.addEventListener("click", () => {
    overlay.classList.add("active");
});

navbarLeft.addEventListener("click", () => {
    overlaySelectedWork.classList.remove("active");
});

