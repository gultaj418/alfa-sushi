//defining variables
const search = document.querySelector("#search");
const searchBar = document.querySelector(".search-bar");
const plusOrder = document.querySelectorAll(".plus");
const minusOrder = document.querySelectorAll(".minus");
const langChanger = document.querySelector("#lang");
const langSection = document.querySelector(".language-section");
const svgRotator = document.querySelector(".svg-class");
// const languageSection = document.querySelectorAll(".language-section");
const hamburger = document.querySelector(".hamburger-menu");
const blackMobileMenu = document.querySelector(".black-menu");

console.log(hamburger);
//haburger menu
hamburger.addEventListener("click", () => {
  console.log(hamburger);
  blackMobileMenu.classList.toggle("active");
});

//Language changer
langChanger.addEventListener("click", () => {
  langSection.classList.add("active");
  svgRotator.classList.add("active");
  langChanger.classList.add("active");
  langSection.addEventListener("click", (e) => {
    lang = langSection.querySelector(".language.active");
    if (lang !== null) {
      lang.classList.remove("active");
    }
    e.target.classList.add("active");
    langChanger.textContent = e.target.textContent;
  });
});

//EventListeners
search.addEventListener("click", () => {
  search.classList.add("deactive");
  searchBar.classList.add("active");
});
searchBar.addEventListener(
  "focusout",
  () => {
    search.classList.remove("deactive");
    searchBar.classList.remove("active");
  },
  false
);

//add Order

plusOrder.forEach(function (el) {
  let num = 0;

  el.addEventListener("click", () => {
    let addOrder = el.parentNode.nextElementSibling;
    let orderPrice = addOrder.querySelectorAll("span")[1];
    let countRegulator = el.parentNode;
    let countNum = el.previousElementSibling;
    let minusOrder = el.previousElementSibling.previousElementSibling;
    let countSpan = countNum.querySelector("span");

    addOrder.classList.add("active");
    countNum.classList.add("active");
    countRegulator.classList.add("active");
    el.classList.add("active");
    minusOrder.classList.add("active");
    countSpan.innerHTML = parseInt(countSpan.innerHTML) + 1;
    addOrder.textContent = `${countSpan.textContent * 20} AZN`;
  });
});
minusOrder.forEach(function (el) {
  el.addEventListener("click", () => {
    let countNum = el.nextElementSibling;
    let addOrder = el.parentNode.nextElementSibling;
    let countSpan = countNum.querySelector("span");
    let countRegulator = el.parentNode;
    let plusOrder = countNum.nextElementSibling;

    if (countSpan.textContent > 1) {
      countSpan.textContent -= 1;
      addOrder.textContent = `${parseInt(addOrder.textContent) - 20} AZN`;

      console.log(addOrder.textContent);
    } else {
      countSpan.textContent = 0;
      countNum.classList.remove("active");
      countRegulator.classList.remove("active");
      addOrder.classList.remove("active");
      plusOrder.classList.remove("active");
      el.classList.remove("active");

      console.log("object");
    }
  });
});

//Owl carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 40,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });
});

//smooth beahvior scroll
downIcon.addEventListener("click", () => {
  window.scrollTo({
    top: 2000,
    behavior: "smooth",
  });
});

upIcon.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 100 && window.scrollY < 1800) {
    downIcon.classList.add("btn-active");
  } else if (
    window.scrollY == 0 ||
    (window.scrollY > 1850 && window.scrollY < 1900)
  ) {
    downIcon.classList.remove("btn-active");
  }
});
