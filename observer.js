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
