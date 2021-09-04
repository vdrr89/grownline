
console.log("prueba");
// ----------------- MENU -----------------
var hamburguerBtn = document.getElementById("hamburguer-menu-icon");
var xBtn = document.getElementById("x-menu-icon");

var responsiveMenu = document.getElementById("responsive-menu");

function openMenu(){
    hamburguerBtn.style.display = "none";
    xBtn.style.display = "block";
    responsiveMenu.style.display = "block";
    console.log("openMenu()");
}

function closeMenu(){
    hamburguerBtn.style.display = "block";
    xBtn.style.display = "none";
    responsiveMenu.style.display = "none";
    console.log(closeMenu());
}