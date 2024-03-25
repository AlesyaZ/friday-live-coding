const headerNavigation = document.querySelector(".header__navigation");
const humberger = document.querySelector(".hamburger");

export const addHeaderClickHandler = () => {
  humberger.addEventListener("click", (e) => {
    humberger.classList.toggle("active");
    headerNavigation.classList.toggle("active");
  });
};
