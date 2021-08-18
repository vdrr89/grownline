// ------------------- FUNCION LOGIN -------------------

let login = document.getElementById("login-form");
let allTabs = document.getElementById("gestion-tabs");
let productos = document.getElementById("gestion-productos");
let usuarios = document.getElementById("gestion-usuarios");
let mensajes = document.getElementById("gestion-mensajes");
let ventas = document.getElementById("gestion-ventas");

let emailInput = document.getElementById("floatingInput");
let passwordInput = document.getElementById("floatingPassword");

// ENVIAR FORMULARIO
function okLogin(e){
    // e.preventDefault();
    login.style.display = "none";
    allTabs.style.display = "block";
    productos.style.display = "block";
    usuarios.style.display = "none";
    mensajes.style.display = "none";
    ventas.style.display = "none";
    console.log("okLogin")
}
//agregar en okLogin enviar formulario y verificar

//BORRAR FORMULARIO
function deleteLoginForm(){
    emailInput.value = "";
    passwordInput.value = "";
    console.log("deleteLoginForm");
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
    descBreve: 'Descripción Breve',
    descLarga: 'Descripción Larga', 
    comp: 'Composición'
};

//hacer un inner solo para el titulo
var prodTitle = document.getElementById("prod-title");
prodTitle.innerHTML = '<tr><th>' + prodTableTitle.cod + '</th><th>' + prodTableTitle.img + '</th><th>' + prodTableTitle.title + '</th><th>' + prodTableTitle.cantidad + '</th><th>stock</th><th>' + prodTableTitle.precio + '</th><th></th></tr>';

var prodTableContent = [
    {
        img: 'img\top-crop\top-crop-01.jpg',
        video: 'https://youtu.be/EqeYE2Ms_U0',
        cod: '001',
        titulo: 'Cromplete Mix',
        categoria: 'Top Crop',
        precio: '500',
        cantidad: '50',
        med: 'l',
        stock: '10',
        medida: 'u', 
        descripcionBreve: 'Complete Mix de Top Crop es un sustrato de primerísima calidad que proporciona excelentes resultados para la fase vegetativa de tu planta, facilitando un desarrollo radicular óptimo.',
        descripcionLarga: 'Complete Mix de Top Crop es un sustrato de primerísima calidad que proporciona excelentes resultados para la fase vegetativa de tu planta, facilitando un desarrollo radicular óptimo. <br><br> Complete Mix presume de ser uno de los sustratos más esponjosos del mercado gracias a su composición, muy rica en fibra de coco. Además, contiene humus de lombriz, ideal para el crecimiento de raíces fuertes y sanas.<br><br>Gracias a su composición especial te evitarás el uso de fertilizantes durante las tres primeras semanas de vida de la planta.<br><br>Complete Mix es un sustrato con un buen aireado y retención de humedad media ideal para climas templados (ni mucho frío ni mucho calor) y cultivos de interior. Además, la retención de agua es duradera contribuyendo a una mayor velocidad de desarrollo de la planta en comparación con otros sustratos.<br><br>Puedes añadir en tu Complete Mix otros sustratos como Nitroguano, Superguano y Top Vulcan.<br><br>FORMATO<br><br>Encontrarás Complete MIX en el formato de 50 litros.',
        composicion: 'Fibra de coco, Turba de Sphagnum (H2-H4)-Rubia y Compost Vegetal, con:<br><br>Perlita (5g/l)<br><br>Mezcla sólida de macro y micro nutrientes (3g/l)Leonardita (2g/l)<br><br>Materia orgánica sobre materia seca 76.2%<br><br>Conductividad eléctrica en agua (1:5 V/V)<br><br>CE: 520 µS/cm (25ºC). [(1:1.5 V/V) CE: 1000 µS/cm]<br><br>Densidad aparente seca: 135.3g/L<br><br>pH en agua (1/5 V/V): 6.5'
    }
];

var prodContent = document.getElementById("prod-content");
var prodTableContentLength = prodTableContent.length;

for( let i = 0; i < prodTableContentLength; i++ ){
    prodContent.innerHTML +=
    '<tr><td>' + prodTableContent[i].cod + '</td><td><img src="' + prodTableContent[i].img + '" alt="' + prodTableContent[i].titulo + '"></td><td>' + prodTableContent[i].titulo + '</td><td>' + prodTableContent[i].cantidad + '</td><td>' + prodTableContent[i].stock + '</td><td>' + prodTableContent[i].precio + '</td><td><button class="btn btn-outline-info"><i class="fas fa-plus"></i></button><button class="btn btn-outline-success"><i class="fas fa-edit"></i></button><button class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button></td></tr><tr><div class="prod-grid-item"><table><tr><th>' + prodTableTitle.cod + '</th><td>' + prodTableContent[i].cod + '</td></tr><tr><th>' + prodTableTitle.title + '</th><td>' + prodTableContent[i].titulo + '</td></tr><tr><th>' + prodTableTitle.cat + '</th><td>' + prodTableContent[i].categoria + '</td></tr><tr><th>' + prodTableTitle.precio + '</th><td>' + prodTableContent[i].precio + '</td></tr><tr><th>' + prodTableTitle.cantidad + '</th><td>' + prodTableContent[i].cantidad + '</td></tr><tr><th>' + prodTableTitle.med + '</th><td>' + prodTableContent[i].med + '</td></tr><tr><th>' + prodTableTitle.stock + '</th><td>' + prodTableContent[i].stock + '</td></tr><tr><th>' + prodTableTitle.medida + '</th><td>' + prodTableContent[i].medida + '</td></tr><tr><th>' + prodTableTitle.descBreve + '</th><td>' + prodTableContent[i].descripcionBreve + '</td></tr><tr><th>' + prodTableTitle.descLarga + '</th><td>' + prodTableContent[i].descripcionLarga + '</td></tr><tr><th>' + prodTableTitle.comp + '</th><td>' + prodTableContent[i].composicion + '</td></tr></table></div><div class="prod-grid-item"><table><tr><td><img src="' + prodTableContent[i].img + '" alt="' + prodTableContent[i].titulo + '"></td></tr><tr><td>Imagen Link: ' + prodTableContent[i].img + '</td></tr><tr><td><video src="' + prodTableContent[i].video + ' alt="' + prodTableContent[i].titulo + '""></video></td></tr><tr><td>Video Link: ' + prodTableContent[i].video + '</td></tr></table></div><div class="prod-grid-item">btns</div></div></tr>' 
}

//table 
//tr cod01 
//trcod01det

//for tabla cod(01) cod(01)det repeat

//function open cod(01) click open cod(01)det ;
