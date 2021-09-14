// ------------------- FUNCION LOGIN -------------------

// let login = document.getElementById("login-form");

let allTabs = document.getElementById("gestion-tabs");

let productos = document.getElementById("gestion-productos");
let usuarios = document.getElementById("gestion-usuarios");
let mensajes = document.getElementById("gestion-mensajes");
let ventas = document.getElementById("gestion-ventas");
let posts = document.getElementById("gestion-posts");
let pagina = document.getElementById("gestion-pagina");


// let emailInput = document.getElementById("floatingInput");
// let passwordInput = document.getElementById("floatingPassword");

// // ------------------- FORMULARIO -------------------
// //  ENVIAR FORMULARIO
// function okLogin(e){
//    login.style.display = "none";
//     allTabs.style.display = "block";
//     productos.style.display = "block";
//     usuarios.style.display = "none";
//     mensajes.style.display = "none";
//     ventas.style.display = "none";
//     console.log("okLogin")
//     console.log("mierda")
// }
// // agregar en okLogin enviar formulario y verificar

// // BORRAR FORMULARIO
// function deleteLoginForm(){
//     emailInput.value = "";
//     passwordInput.value = "";
//     console.log("deleteLoginForm");
//     // VDRR89 mostrar boton con flecha para ir para atras el cual tendria link para ir para atras
// }
// ------------------- FUNCIONES TABS -------------------

// TAB PRODUCTOS
function tabProductos(){
    login.style.display = "none";
    allTabs.style.display = "block";
    productos.style.display = "block";
    usuarios.style.display = "none";
    ventas.style.display = "none";
    posts.style.display = "none";
    pagina.style.display = "none";
    postsFilterAdd.style.display = "none";
    paginaFilterAdd.style.display = "none";
    console.log("tabProductos")
    // VDRR89 modificar estilo de fuente y background de tab
}

// TAB USUARIOS
function tabUsuarios(){
    login.style.display = "none";
    allTabs.style.display = "block";
    productos.style.display = "none";
    usuarios.style.display = "block";
    ventas.style.display = "none";
    posts.style.display = "none";
    pagina.style.display = "none";
    console.log("tabUsuarios")
}

// TAB MENSAJES
function tabMensajes(){
    login.style.display = "none";
    allTabs.style.display = "block";
    productos.style.display = "none";
    usuarios.style.display = "none";
    ventas.style.display = "none";
    posts.style.display = "none";
    pagina.style.display = "none";
    console.log("tabMensajes")
}

// TAB VENTAS
function tabVentas(){
    login.style.display = "none";
    allTabs.style.display = "block";
    productos.style.display = "none";
    usuarios.style.display = "none";
    ventas.style.display = "block";
    posts.style.display = "none";
    pagina.style.display = "none";
    console.log("tabVentas")
}

// TAB POSTS
function tabPosts(){
    login.style.display = "none";
    allTabs.style.display = "block";
    productos.style.display = "none";
    usuarios.style.display = "none";
    ventas.style.display = "none";
    posts.style.display = "block";
    pagina.style.display = "none";
    console.log("tabPosts")
}

// TAB PAGINA
function tabPagina(){
    login.style.display = "none";
    allTabs.style.display = "block";
    productos.style.display = "none";
    usuarios.style.display = "none";
    ventas.style.display = "none";
    posts.style.display = "none";
    pagina.style.display = "block";
    console.log("tabPagina")
}

// ------------------- CONTENIDO PRODUCTOS -------------------

// titulos
var prodTableTitle = {
    codigo: 'codigo',
    lnkimg: 'lnk_img',
    imgprod: 'imgprod',
    videoProdUrl: 'video_prod_url',
    videoprod: 'videoprod',
    nombre: 'nombre',
    categoria: 'categoria',
    precio: 'precio',
    stock: 'stock',
    descripcion: 'descripcion'
};

var prodTitle = document.getElementById("prod-title");
prodTitle.innerHTML = '<div class="prod-title"><ul class="gestion-titles"><li>' + prodTableTitle.codigo + '</li><li>' + prodTableTitle.lnkimg + '</li><li>' + prodTableTitle.imgprod + '</li><li>' + prodTableTitle.videoProdUrl + '</li><li>' + prodTableTitle.videoprod + '</li><li>' + prodTableTitle.nombre + '</li><li>' + prodTableTitle.categoria + '</li><li>' + prodTableTitle.precio + '</li><li>' + prodTableTitle.stock + '</li><li>' + prodTableTitle.descripcion + '</li></ul></div>';



// ------------------- CONTENIDO USUARIOS -------------------

// titulos
var usuTableTitle = {
    username: 'img',
    nombre: 'video',
    apellido: 'Cod',
    email: 'Titulo',
    profilepic: 'Foto de Perfil',
    telefono: 'Categoria',
    direccion: 'Precio (UYU)',
    pais: 'País',
    fechanac: 'Fecha Nacimiento'
};

var usuTitle = document.getElementById("usu-title");
usuTitle.innerHTML = '<div class="usu-title"><ul class="gestion-titles"><li>' + usuTableTitle.username + '</li><li>' + usuTableTitle.profilepic + '</li><li>' + usuTableTitle.nombre + '</li><li>' + usuTableTitle.apellido + '</li><li>' + usuTableTitle.email + '</li><li>' + usuTableTitle.telefono + '</li><li>' + usuTableTitle.direccion + '</li><li>' + usuTableTitle.pais + '</li><li>' + prodTableTitle.fechanac + '</li></ul></div>';


// ------------------- CONTENIDO VENTAS -------------------

// titulos
var ventasTableTitle = {
    entregado: 'entregado',
    usuario: 'usuario',
    nombre: 'nombre',
    telefono: 'telefono',
    direccion: 'direccion',
    pais: 'pais',
    productos: 'productos',
    fechapedido: 'fechapedido',
    fechaentrega: 'fechaentrega',
    notasenvio: 'notasenvio'
};

var ventasTitle = document.getElementById("ventas-title");
ventasTitle.innerHTML = '<div class="ventas-title"><ul class="gestion-titles"><li>' + ventasTableTitle.entregado + '</li><li>' + ventasTableTitle.usuario + '</li><li>' + ventasTableTitle.nombre + '</li><li>' + ventasTableTitle.telefono + '</li><li>' + ventasTableTitle.direccion + '</li><li>' + ventasTableTitle.pais + '</li><li>' + ventasTableTitle.productos + '</li><li>' + ventasTableTitle.fechapedido + '</li><li>' + ventasTableTitle.fechaentrega + '</li><li>' + ventasTableTitle.notasenvio + '</li></ul></div>';


// ------------------- CONTENIDO POSTS -------------------

// titulos
var postTableTitle = {
    titulo: 'titulo',
    brevedesc: 'brevedesc',
    descripcion: 'descripcion'
};

var postTitle = document.getElementById("posts-title");
postTitle.innerHTML = '<div class="post-title"><ul class="gestion-titles"><li>' + postTableTitle.titulo + '</li><li>' + postTableTitle.brevedesc + '</li></ul></div>';


// ------------------- CONTENIDO PAGINA -------------------

// titulos
var paginaTableTitle = {
    imgfile: 'remitente',
    imgsrc: 'asunto',
    imglink: 'fecha',
    abouttxt: 'mensaje',
    whatsappnumber: 'whatsappnumber',
    mail: 'mail',
    facebook: 'facebook',
    instagram: 'instagram'
};

var paginaTitle = document.getElementById("pagina-title");
paginaTitle.innerHTML = '<div class="pagina-title"><ul class="gestion-titles"><li>' + paginaTableTitle.imgfile + '</li><li>' + paginaTableTitle.imgsrc + '</li><li>' + paginaTableTitle.imglink + '</li><li>' + paginaTableTitle.abouttxt + '</li><li>' + paginaTableTitle.whatsappnumber + '</li><li>' + paginaTableTitle.mail + '</li><li>' + paginaTableTitle.facebook + '</li><li>' + paginaTableTitle.instagram + '</li></ul></div>';


$(document).ready(function() {
    tabProductos()
    /*
    $.ajax({
        url: '../api/usr.php',
        type: 'GET',
        success: function(response)  {
            usr = response.usr
            admin = response.admin
            console.log ("usr: " + usr + "  admin: " + admin)
            if (admin == 'v'){
                okLogin()
            }
        }
    })
    */
})


