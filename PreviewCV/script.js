const menuIcon = document.getElementById("menu-icon");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("overlay-left");

menuIcon.addEventListener("click", () => {
    overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
});