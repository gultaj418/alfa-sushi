//defining variables

const search = document.querySelector("#search");
const searchBar = document.querySelector(".search-bar");
const plusOrder = document.querySelectorAll(".plus");
const minusOrder = document.querySelectorAll(".minus");
const langChanger = document.querySelector("#lang");
const langSection = document.querySelector(".language-section");
const svgRotator = document.querySelector(".svg-class");
const languages = document.querySelectorAll(".language");
const hamburger = document.querySelector(".hamburger-menu");
const blackMobileMenu = document.querySelector(".black-menu");
const bagCounter = document.querySelector("#bag");
const downIcon = document.querySelector(".arrow-down-icon");
const upIcon = document.querySelector(".arrow-up-icon");
const upIconOffset = upIcon.offsetHeight;
let hamburgerHeavy = document.querySelector(".hamburger-heavy");
let mobileHeavy = document.querySelector(".mobile-heavy");
let mql = window.matchMedia("(max-width: 768px)");

//haburger menu
hamburger.addEventListener("click", () => {
  blackMobileMenu.classList.add("btn-active");
  mobileHeavy.classList.add("heavy-background");
  hamburgerHeavy.classList.add("btn-active");
  document.body.style.overflowY = ["hidden"];
});

hamburgerHeavy.addEventListener("click", () => {
  blackMobileMenu.classList.remove("btn-active");
  mobileHeavy.classList.remove("heavy-background");
  hamburgerHeavy.classList.remove("btn-active");
  document.body.style.overflowY = ["scroll"];
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
  let searchInput = searchBar.querySelector(".search-input");
  search.classList.add("deactive");
  searchBar.classList.add("active");
  searchInput.classList.add("active");
});
searchBar.addEventListener(
  "focusout",
  () => {
    let searchInput = searchBar.querySelector(".search-input");

    search.classList.remove("deactive");
    searchBar.classList.remove("active");
    searchInput.classList.remove("active");
  },
  false
);

//add Order

plusOrder.forEach(function (el) {
  let num = 0;
  // let counter = 0;

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

    // counter += countSpan.innerHTML;
    // bagCounter.textContent = `Bag (${counter})`;
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

//slider responsive

$(document).ready(function () {
  if (window.matchMedia("(max-width: 768px)").matches) {
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
  }
});

var owl = $("ul.owl-carousel");
owl.owlCarousel({
  items: 5,

  loop: true,
  // margin: 10,
  autoplay: true,
  autoplayTimeout: 1500,
  autoplayHoverPause: true,
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
    downIcon.classList.add("active");
  } else if (
    window.scrollY == 0 ||
    (window.scrollY > 1850 && window.scrollY < 1900)
  ) {
    downIcon.classList.remove("active");
  }
});
