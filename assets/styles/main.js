function openHamburgerMenu() {
  const open = document.getElementById("hamburger-menu")
  if (open.style.display === "block"){
    open.style.display = "none";
  } else {
    open.style.display = "block";
  }
}