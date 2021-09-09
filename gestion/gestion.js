// ------------------- FUNCION LOGIN -------------------

let login = document.getElementById("login-form");

let allTabs = document.getElementById("gestion-tabs");

let productos = document.getElementById("gestion-productos");
let usuarios = document.getElementById("gestion-usuarios");
let mensajes = document.getElementById("gestion-mensajes");
let ventas = document.getElementById("gestion-ventas");

let emailInput = document.getElementById("floatingInput");
let passwordInput = document.getElementById("floatingPassword");

// ------------------- FORMULARIO -------------------
//  ENVIAR FORMULARIO 
function okLogin(e){
   login.style.display = "none";
    allTabs.style.display = "block";
    productos.style.display = "block";
    usuarios.style.display = "none";
    mensajes.style.display = "none";
    ventas.style.display = "none";
    console.log("okLogin") 
    console.log("mierda")
    $.ajax({
        url: '../api/login.php',
        type: 'POST',
        success: function(response)  {
         // const tasks = JSON.parse(response);
         console.log("devuelto")
         console.log(response)
         //console.log(response.nombre)
        }
      }
    )
}
// agregar en okLogin enviar formulario y verificar

// BORRAR FORMULARIO 
function deleteLoginForm(){
    emailInput.value = "";
    passwordInput.value = "";
    console.log("deleteLoginForm");
    // VDRR89 mostrar boton con flecha para ir para atras el cual tendria link para ir para atras
}

// ------------------- FUNCIONES TABS -------------------

// TAB PRODUCTOS
function tabProductos(){
    login.style.display = "none";
    allTabs.style.display = "block";
    productos.style.display = "block";
    usuarios.style.display = "none";
    mensajes.style.display = "none";
    ventas.style.display = "none";
    console.log("tabProductos")
    // VDRR89 modificar estilo de fuente y background de tab
}

// TAB USUARIOS
function tabUsuarios(){
    login.style.display = "none";
    allTabs.style.display = "block";
    productos.style.display = "none";
    usuarios.style.display = "block";
    mensajes.style.display = "none";
    ventas.style.display = "none";
    console.log("tabUsuarios")
}

// TAB MENSAJES
function tabMensajes(){
    login.style.display = "none";
    allTabs.style.display = "block";
    productos.style.display = "none";
    usuarios.style.display = "none";
    mensajes.style.display = "block";
    ventas.style.display = "none";
    console.log("tabMensajes")
}

// TAB VENTAS
function tabVentas(){
    login.style.display = "none";
    allTabs.style.display = "block";
    productos.style.display = "none";
    usuarios.style.display = "none";
    mensajes.style.display = "none";
    ventas.style.display = "block";
    console.log("tabVentas")
}

// ------------------- CONTENIDO PRODUCTOS -------------------

// titulos 
var prodTableTitle = {
    img: 'img',
    video: 'video',
    cod: 'Cod',
    title: 'Titulo',
    cat: 'Categoria',
    precio: 'Precio (UYU)',
    cantidad: 'Cantidad/u',
    med: 'Medida',
    stock: 'Stock',
    medida: 'Medida',
    descripcion: 'Descripción Breve',
    comp: 'Composición'
};

var prodTitle = document.getElementById("prod-title");
prodTitle.innerHTML = '<div class="prod-title"><ul class="gestion-titles"><li>' + prodTableTitle.cod + '</li><li>' + prodTableTitle.img + '</li><li>' + prodTableTitle.video + '</li><li>' + prodTableTitle.titulo + '</li><li>' + prodTableTitle.cat + '</li><li>' + prodTableTitle.precio + '</li><li>' + prodTableTitle.cantidad + '</li><li>' + prodTableTitle.med + '</li><li>' + prodTableTitle.stock + '</li><li>' + prodTableTitle.medida + '</li><li>' + prodTableTitle.descripcion + '</li><li>' + prodTableTitle.comp + '</li></ul></div>';

// contenidos
$(document).ready(
    function() {

        var prodTableContent = new Array();

        var prodContent = document.getElementById("prod-content");   
        var clickeable = new Array(prodTableContent.length);
        var collapsable = new Array(prodTableContent.length);
        console.log(clickeable.length);
        $.ajax(
            {
                url: '../api/productos.php',
                type: 'GET',
                success: function(res) {
                    console.log(res)
                    prodTableContent = res

                    res.forEach(function(el, i){
                        prodContent.innerHTML += 
                            '<tr><td><button class="clickeable" id="clickeable' + [i] + '">+</button></td><td>' + el.id + '</td><td><img class="gestion-img" src="' + el.lnk_img + '"></td><td>' + "sin video" + '</td><td>' + el.nombre + '</td><td>' + "sin categoria" + '</td><td>' + el.precio + '</td><td>' + el.cantidad + '</td><td>' + "no hay med"+ '</td><td>' + el.cantidad + '</td><td>' + "no hay medida" + '</td><td class="fixed-col2"><button class="btn btn-outline-success"><i class="fas fa-edit"></i></button></td><td class="fixed-col3"><button class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button></td></tr><tr><td colspan="10"><div id="collapsable' + [i] + '" class="collapsable">' + el.descripcion + "sin composicion" + '</div></td></tr>';
                        }
                    )
        
                    for(let i = 0; i < prodTableContent.length; i++){

                        clickeable[i] = document.getElementById('clickeable' + [i]);
                        collapsable[i] = document.getElementById('collapsable' + [i]);
                        collapsable[i].style.display = "none";

                        clickeable[i].addEventListener(
                            "click", function(){
                                if(collapsable[i].style.display == "none"){
                                    collapsable[i].style.display = "block"; 
                                    console.log("clickeable " + [i] + " if", collapsable[i].style.display)  
                                } else {
                                    collapsable[i].style.display ="none";
                                    console.log("clickeable " + [i] + " else", collapsable[i].style.display)  
                                }
                            }
                        );
                    }
                }
            }
        );
    }
);


// ------------------- CONTENIDO USUARIOS -------------------

// titulos 
var usuTableTitle = {
    username: 'img',
    nombre: 'video',
    apellido: 'Cod',
    email: 'Titulo',
    telefono: 'Categoria',
    direccion: 'Precio (UYU)', 
    fechanac: 'Fecha Nacimiento'
};

var usuTitle = document.getElementById("usu-title");
usuTitle.innerHTML = '<div class="usu-title"><ul class="gestion-titles"><li>' + usuTableTitle.username + '</li><li>' + usuTableTitle.nombre + '</li><li>' + usuTableTitle.apellido + '</li><li>' + usuTableTitle.email + '</li><li>' + usuTableTitle.telefono + '</li><li>' + usuTableTitle.direccion + '</li><li>' + prodTableTitle.fechanac + '</li></ul></div>';

// contenidos
$(document).ready(
    function() {

        var usuTableContent = new Array()

        var usuContent = document.getElementById("usu-content");   
        var usuClickeable = new Array(usuTableContent.length);
        var usuCollapsable = new Array(usuTableContent.length);
        console.log(usuClickeable.length);

        $.ajax(
            {
                url: '../api/usuarios.php',
                type: 'GET',
                success: function(res) {
                    console.log(res)
                    prodTableContent = res

                    res.forEach(function(el, i){
                        usuContent.innerHTML += 
                        '<tr><td><button class="clickeable" id="usu-clickeable' + [i] + '">+</button></td><td>' + el.id + '</td><td><img class="gestion-img" src="' + el.profilepic + '"></td><td>' + el.username + '</td><td>' + el.email + '</td><td>' + el.categoria + '</td><td>' + el.nombre + '</td><td>' + el.apellido + '</td><td>' + el.fechaNac + '</td><td>' + el.pais + '</td><td class="fixed-col2"><button class="btn btn-outline-success"><i class="fas fa-edit"></i></button></td><td class="fixed-col3"><button class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button></td></tr>';
                        }
                    )
                }
            }
        );

    }
);

// ------------------- CONTENIDO MENSAJES -------------------

// titulos 
var mensajesTableTitle = {
    remitente: 'remitente',
    asunto: 'asunto',
    fecha: 'fecha',
    mensaje: 'mensaje'
};

var mensajesTitle = document.getElementById("mensaje-title");
mensajesTitle.innerHTML = '<div class="mensaje-title"><ul class="gestion-titles"><li>' + mensajesTableTitle.remitente + '</li><li>' + mensajesTableTitle.asunto + '</li><li>' + mensajesTableTitle.fecha + '</li><li>' + mensajesTableTitle.mensaje + '</li><div class="mensajes-title-collapsable"><button>Eliminar Todos</button><button>Marcar como Leídos</button><button>Marcar como No Leidos</button></div></ul></div>';

// contenidos
$(document).ready(
    function() {

        var mensajesTableContent = new Array();

        var mensajesContent = document.getElementById("mensaje-content");   
        var mensajesClickeable = new Array(prodTableContent.length);
        var mensajesCollapsable = new Array(prodTableContent.length);
        console.log(mensajesClickeable.length);
        $.ajax(
            {
                url: '../api/productos.php',
                type: 'GET',
                success: function(res) {
                    console.log(res)
                    mensajesTableContent = res

                    res.forEach(function(el, i){
                        mensajesContent.innerHTML += 
                            '<tr><td><button class="clickeable" id="mensajes-clickeable' + [i] + '">+</button></td><td>' + el.remitente + '</td><td>' + el.asunto + '</td><td>' + el.fecha + '</td></tr><tr><td colspan="10"><div id="collapsable' + [i] + '" class="collapsable">' + el.mensaje + "sin composicion" + '</div></td></tr><tr><td><button class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button></td><td><button class="btn btn-outline-success">Responder</button></td></tr>';
                        }
                    )
        
                    for(let i = 0; i < mensajesTableContent.length; i++){

                        mensajesClickeable[i] = document.getElementById('mensajes-clickeable' + [i]);
                        mensajesCollapsable[i] = document.getElementById('mensajes-collapsable' + [i]);
                        mensajesCollapsable[i].style.display = "none";

                        clickeable[i].addEventListener(
                            "click", function(){
                                if(collapsable[i].style.display == "none"){
                                    collapsable[i].style.display = "block"; 
                                    console.log("clickeable " + [i] + " if", collapsable[i].style.display)  
                                } else {
                                    collapsable[i].style.display ="none";
                                    console.log("clickeable " + [i] + " else", collapsable[i].style.display)  
                                }
                            }
                        );
                    }
                }
            }
        );
    }
);
    



// fetch api json 
/*
fetch('/productos.json')
  .then(response => response.json())
  .then(data => console.log(data));
// hasta acá manda la información al console log, la manda bien

*/