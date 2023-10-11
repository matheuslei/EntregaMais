document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.getElementById("menu-icon");
  var nav = document.getElementById("nav");

  menuIcon.addEventListener("click", function () {
    nav.style.display =
      nav.style.display === "flex" || nav.style.display === ""
        ? "none"
        : "flex";
  });

  window.addEventListener("resize", function () {
    nav.style.display = window.innerWidth > 768 ? "flex" : "none";
  });
});
