const menu = document.querySelector(".mobile-menu");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", function () {
  if (menu.style.display == "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});
