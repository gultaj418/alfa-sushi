//defining variables
const search = document.querySelector("#search");
const searchBar = document.querySelector(".search-bar");
const plusOrder = document.querySelectorAll(".plus");
const minusOrder = document.querySelectorAll(".minus");

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
