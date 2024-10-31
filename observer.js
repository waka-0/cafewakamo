const objectList = document.querySelectorAll(".object");
function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}
const options = {
  threshold: 0,
  rootMargin: "-200px",
};
const myObserver = new IntersectionObserver(callback, options);
objectList.forEach((targetObject) => {
  myObserver.observe(targetObject);
});

function altRan2() {
	var r = Math.floor(Math.random() * 6) +1; //乱数の発生

  document.getElementById("sai").innerHTML = r; //値の出力
}
