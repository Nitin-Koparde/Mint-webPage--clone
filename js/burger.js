//burger
burger = document.querySelector(".burger");
navlinks = document.querySelector(".nav__links");
btns = document.querySelector(".btns");

burger.addEventListener("click", () => {
  navlinks.classList.toggle("v-class");
  navlinks.classList.toggle("h-nav");
  btns.classList.toggle("v-class");
});
