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

$(document).ready(function() {
    
})