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
var iconProducts = document.getElementById("icon-productos");
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

var cannabisSection = document.getElementById("cannabis-section");
var tierraSection = document.getElementById("tierra-section");
var complementosSection = document.getElementById("complementos-section");
var comidaSection = document.getElementById("comida-section");

function openCannabisSlides(){
    if(cannabisSection.style.display === "none"){
        cannabisSection.style.display = "inline-block";
        tierraSection.style.display = "none";
        complementosSection.style.display = "none";
        comidaSection.style.display = "none";
    } else {
        cannabisSection.style.display = "none";
        tierraSection.style.display = "none";
        complementosSection.style.display = "none";
        comidaSection.style.display = "none";
    }
}

function openTierraSlides(){
    if(tierraSection.style.display === "none"){
        cannabisSection.style.display = "none";
        tierraSection.style.display = "inline-block";
        complementosSection.style.display = "none";
        comidaSection.style.display = "none";
    } else {
        cannabisSection.style.display = "none";
        tierraSection.style.display = "none";
        complementosSection.style.display = "none";
        comidaSection.style.display = "none";
    }
}

function openComplementosSlides(){
    if(complementosSection.style.display === "none"){
        cannabisSection.style.display = "none";
        tierraSection.style.display = "none";
        complementosSection.style.display = "inline-block";
        comidaSection.style.display = "none";
    } else {
        cannabisSection.style.display = "none";
        tierraSection.style.display = "none";
        complementosSection.style.display = "none";
        comidaSection.style.display = "none";
    }
}

function openComidaSlides(){
    if(comidaSection.style.display === "none"){
        cannabisSection.style.display = "none";
        tierraSection.style.display = "none";
        complementosSection.style.display = "none";
        comidaSection.style.display = "inline-block";
    } else {
        cannabisSection.style.display = "none";
        tierraSection.style.display = "none";
        complementosSection.style.display = "none";
        comidaSection.style.display = "none";
    }
}

// for para crear iconos con funcion a abrir sección la cual también se crea en el mismo for
var iconsProductsLength = iconsProducts.length;
var sectionGroup = document.getElementById("section-group");

for( let i = 0; i < iconsProductsLength; i++ ){
    iconProducts.innerHTML +=
    '<div class="cat-btn"><i onclick="' + iconsProducts[i].function + '()" class="cat-i ' + iconsProducts[i].icon + '"></i></div>';
    sectionGroup.innerHTML += 
    '<div id="' + iconProducts[i].nombre + '-section" class="section"></div>'
  }

// crear el contenido de cada seccion



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