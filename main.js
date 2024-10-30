
const menuBtn = document.querySelector(".menu-btn");
const overlayBox = document.querySelector(".overlay");
const menuLine = document.querySelector(".menu-line");
const navElement = document.querySelectorAll(".nav");

menuBtn.addEventListener("click",() => {
  overlayBox.classList.toggle("show");
  menuLine.classList.toggle("active");
});

navElement.forEach((nav) => {
  nav.addEventListener("click", () => {
    overlayBox.classList.remove("show");
    menuLine.classList.remove("active");
  })
})
