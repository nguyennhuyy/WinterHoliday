const navBar = document.querySelector(".nav-bar");
const close = document.querySelector(".close-bar");
const boxBar = document.querySelector(".box-bar");
const navSearch = document.querySelector(".nav-search");
const boxSearch = document.querySelector(".box-search");
const closeSearch = document.querySelector(".close-search");
const openBar = function () {
  navBar.classList.add(".box-bar");
  boxBar.style.display = "block";
};
const closeBar = function () {
  close.classList.remove(".box-bar");
  boxBar.style.display = "none";
};

const openSearch = function () {
  navSearch.classList.add(".box-search");
  boxSearch.style.display = "block";
};

const closeSearchHeader = function () {
  navSearch.classList.remove(".box-search");
  boxSearch.style.display = "none";
};

navBar.addEventListener("click", openBar);
close.addEventListener("click", closeBar);
navSearch.addEventListener("click", openSearch);
closeSearch.addEventListener("click", closeSearchHeader);
