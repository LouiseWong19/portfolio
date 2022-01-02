const menu = document.querySelector(".nav__menu");
const menuItems = document.querySelectorAll(".nav__menu--item");
const hamburgerMenu = document.querySelector(".hamburger__btn");
const open = document.querySelector(".hamburger__btn--menu");
const close = document.querySelector(".hamburger__btn--cancel");

const openHamburgerMenu = () => {
  if (menu.classList.contains("showMenu")){
    menu.classList.remove("showMenu");
    close.style.display = "none";
    open.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    close.style.display = "block";
    open.style.display = "none";
  }
}   

hamburgerMenu.addEventListener("click", openHamburgerMenu);

menuItems.forEach((item)=>{
  item.addEventListener("click", openHamburgerMenu)
})
