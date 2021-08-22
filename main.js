// ------------------- INFO -------------------

// BUSCAR 
// busca mientras escribe y filtros: https://github.com/vdrr89/pagApiFil/blob/master/pag%20con%20api%20y%20filtro%202/vr-api.js

// ------------------- TITULO -------------------

// SUBTITULO
var tituloSubtitulo = document.getElementById("titulo-subtitulo");
tituloSubtitulo.innerHTML = "Tu tienda de cultivo online!";

// ------------------- ABOUT -------------------
var aboutTxt = document.getElementById("about");
aboutTxt.innerHTML = '<h3>Sobre Nosotros</h3><p><b>Grownline</b> surge de la idea de que a tod@s nos interesa el cultivo, y por lo tanto acceder a insumos, asesoría, experiencia de gente <span style="color: #1abc9c;">"delaplanta"</span>.<br><br>Como cultivador tuve dificultades para encontrar un "Grow" de cabecera, es entonces cuando decidí convertirme en uno.<br><br>Con más de 15 años de experiencia en el cultivo de Ganjah, decidí acercarme a los cultivadores con precios accesibles, interés real, y respuestas a sus necesidades. Sin local comercial, por vía digital.<br><br>Quienes han confiado en <b>Grownline</b> saben y recomiendan la calidad de nuestros servicios. En resumen, todos somos <b>Grownline</b>. Gracias por apoyar y ser parte de esto.<br><br>Buenos Humos...!</p>';

// ------------------- PRODUCTOS: ICONOS -------------------
// serie de iconos
var iconsProducts = [
    { 
        nombre: "cannabis", 
        icon: "fas fa-cannabis", 
        function: "openCannabisSlides"
    },
    { 
        nombre: "tierra", 
        icon: "fas fa-mountain", 
        function: "openTierraSlides"
     },
    { 
        nombre: "complementos", 
        icon: "fas fa-cloud-meatball", 
        function: "openComplementosSlides" 
    },
    { 
        nombre: "comida", 
        icon: "fas fa-utensils", 
        function: "openComidaSlides"
     }
]; 

var iconProducts = document.getElementById("icon-productos");
var iconsProductsLength = iconsProducts.length;

for( let i = 0; i < iconsProductsLength; i++ ){
    iconProducts.innerHTML +=
    '<div class="cat-btn"><i onclick="' + iconsProducts[i].function + '()" class="cat-i ' + iconsProducts[i].icon + '"></i></div>'
  }

// secciones 
// grupo de secciones desplegable
var sectionGroup = document.getElementById("section-group");

// cada seccion 
var cannabisSection = document.getElementById("cannabis-section");
var tierraSection = document.getElementById("tierra-section");
var complementosSection = document.getElementById("complementos-section");
var comidaSection = document.getElementById("comida-section");
// var scrollBar = document.querySelector("#cannabis-section::-webkit-scrollbar, #tierra-section::-webkit-scrollbar, #complementos-section::-webkit-scrollbar, #comida-section::-webkit-scrollbar, .section-group::-webkit-scrollbar, #cannabis-section::-webkit-scrollbar-track, #tierra-section::-webkit-scrollbar-track, #complementos-section::-webkit-scrollbar-track, #comida-section::-webkit-scrollbar-track, .section-group::-webkit-scrollbar-track, #cannabis-section::-webkit-scrollbar-thumb, #tierra-section::-webkit-scrollbar-thumb, #complementos-section::-webkit-scrollbar-thumb, #comida-section::-webkit-scrollbar-thumb,.section-group::-webkit-scrollbar-thumb, #cannabis-section::-webkit-scrollbar-button, #tierra-section::-webkit-scrollbar-button, #complementos-section::-webkit-scrollbar-button, #comida-section::-webkit-scrollbar-button, .section-group::-webkit-scrollbar-button ");

var cannabisSlides = [
    { name:'cannabis1', src: 'img/img1.jpg' },
    { name:'cannabis2', src: 'img/img2.jpg' }, 
    { name:'cannabis3', src: 'img/img3.jpg' },
]

var tierraSlides = [
    { name:'tierra1', src: 'img/img1.jpg' },
    { name:'tierra2', src: 'img/img2.jpg' }, 
    { name:'tierra3', src: 'img/img3.jpg' },
]

var complementosSlides = [
    { name:'complementos1', src: 'img/img1.jpg' },
    { name:'complementos2', src: 'img/img2.jpg' }, 
    { name:'complementos3', src: 'img/img3.jpg' },
]

var comidaSlides = [
    { name:'comida1', src: 'img/img1.jpg' },
    { name:'comida2', src: 'img/img2.jpg' }, 
    { name:'comida3', src: 'img/img3.jpg' },
]

for( let i = 0; i < cannabisSlides.length; i++ ){
    cannabisSection.innerHTML += 
    '<div class="products-slide"><img src="' + cannabisSlides[i].src + '" alt="' + cannabisSlides[i].name + '"></div>'
}

for( let i = 0; i < tierraSlides.length; i++ ){
    tierraSection.innerHTML += 
    '<div class="products-slide"><img src="' + tierraSlides[i].src + '" alt="' + tierraSlides[i].name + '"></div>'
}

for( let i = 0; i < complementosSlides.length; i++ ){
    complementosSection.innerHTML += 
    '<div class="products-slide"><img src="' + complementosSlides[i].src + '" alt="' + complementosSlides[i].name + '"></div>'
}

for( let i = 0; i < comidaSlides.length; i++ ){
    comidaSection.innerHTML += 
    '<div class="products-slide"><img src="' + comidaSlides[i].src + '" alt="' + comidaSlides[i].name + '"></div>'
}

function openCannabisSlides(){
    if(cannabisSection.style.display === "none"){
        cannabisSection.style.display = "inline-block";
        tierraSection.style.display = "none";
        complementosSection.style.display = "none";
        comidaSection.style.display = "none";
        scrollBar.style.display = "block";
        console.log("openCannabisSlides if")
    } else {
        cannabisSection.style.display = "none";
        tierraSection.style.display = "none";
        complementosSection.style.display = "none";
        comidaSection.style.display = "none";
        scrollBar.style.display = "none";
        console.log("openCannabisSlides else")
    }
}

function openTierraSlides(){
    if(tierraSection.style.display === "none"){
        cannabisSection.style.display = "none";
        tierraSection.style.display = "inline-block";
        complementosSection.style.display = "none";
        comidaSection.style.display = "none";
        scrollBar.style.display = "block";
        console.log("openTierraSlides if")
    } else {
        cannabisSection.style.display = "none";
        tierraSection.style.display = "none";
        complementosSection.style.display = "none";
        comidaSection.style.display = "none";
        scrollBar.style.display = "none";
        console.log("openTierraSlides else")
    }
}

function openComplementosSlides(){
    if(complementosSection.style.display === "none"){
        cannabisSection.style.display = "none";
        tierraSection.style.display = "none";
        complementosSection.style.display = "inline-block";
        comidaSection.style.display = "none";
        scrollBar.style.display = "block";
        console.log("openComplementosSlides if")
    } else {
        cannabisSection.style.display = "none";
        tierraSection.style.display = "none";
        complementosSection.style.display = "none";
        comidaSection.style.display = "none";
        scrollBar.style.display = "block";
        console.log("openComplementosSlides else")
    }
}

function openComidaSlides(){
    if(comidaSection.style.display === "none"){
        cannabisSection.style.display = "none";
        tierraSection.style.display = "none";
        complementosSection.style.display = "none";
        comidaSection.style.display = "inline-block";
        scrollBar.style.display = "block";
        console.log("openComidaSlides if")
    } else {
        cannabisSection.style.display = "none";
        tierraSection.style.display = "none";
        complementosSection.style.display = "none";
        comidaSection.style.display = "none";
        scrollBar.style.display = "none";
        console.log("openComidaSlides else")
    }
}

// scroll horizontal para categorias del home  

function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))); // Delta vale 1 en scroll hacia arriba y -1 en scroll hacia abajo
    
    sectionGroup.scrollLeft -= (delta*40); // De cuantos pixeles haremos el scroll lateral;
    console.log("Delta: " + delta); 
    console.log("sectionGroup ScrollLeft: " + sectionGroup.scrollLeft);
    console.log("sectionGroup offsetWidth: " + sectionGroup.offsetWidth);
    console.log("ScrollLeft + offsetWidht: " + (sectionGroup.scrollLeft + sectionGroup.offsetWidth));
    console.log("sectionGroup offsetWidth: " + sectionGroup.offsetWidth);
    console.log("sectionGroup scrollWidth: " + sectionGroup.scrollWidth);
    if ((delta > 0 && sectionGroup.scrollLeft > 0) || (delta < 0 && (sectionGroup.offsetWidth + sectionGroup.scrollLeft) < (sectionGroup.scrollWidth - 1))) {
      e.preventDefault();
    }
  }
  
  // Si hay event listener quiere decir que no estamos en IE
  //if (container.addEventListener) {
    // IE9, Chrome, Safari, Opera
    sectionGroup.addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    sectionGroup.addEventListener("DOMMouseScroll", scrollHorizontally, false);
  // } else {
    // IE 6/7/8
    sectionGroup.attachEvent("onmousewheel", scrollHorizontally);
  // }


// ------------------- FAQ -------------------
var faqList = document.getElementById("faq-list");
var faqListContent = [
    { titulo: "Titulo de faq", respuesta: "Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq v" },
    { titulo: "Titulo de faq", respuesta: "Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq v" },
    { titulo: "Titulo de faq", respuesta: "Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq v" },
    { titulo: "Titulo de faq", respuesta: "Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq Respuesta extensa de faq v" },
];
var faqListContentLength = faqListContent.length;

for( let i = 0; i < faqListContentLength; i++ ){
    faqList.innerHTML +=
    '<li><p class="faq-tit">' + faqListContent[i].titulo + '</p><p>' + faqListContent[i].respuesta + '</p>' 
}

// ------------------- CONTACTO: REDES SOCIALES -------------------
var socialNet = document.getElementById("social-networks");
var socialNetworks = [
    { name: "facebook", icon: "fab fa-facebook", link: "" },
    { name: "instagram", icon: "fab fa-instagram", link: "" },
    { name: "mail", icon: "bi bi-envelope-fill", link: "" },
    { name: "whatsapp", icon: "bi bi-whatsapp", link: "" }
];
var socialNetworksLength = socialNetworks.length;

for( let i = 0; i < socialNetworksLength; i++ ){
    socialNet.innerHTML +=
    '<li><a target="_blank" href="' + socialNetworks[i].link + '"><i class="footer-icon ' + socialNetworks[i].icon + '"></i></a></li>' 
}