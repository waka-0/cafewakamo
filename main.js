
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

function altRan2() {
	var r = Math.floor(Math.random() * 6) +1; //乱数の発生

  document.getElementById("sai").innerHTML = r; //値の出力
}
