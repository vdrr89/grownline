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

// titulos productos
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

// inner para el título de productos
var prodTitle = document.getElementById("prod-title");
prodTitle.innerHTML = '<thead><tr><th scope="col">' + prodTableTitle.cod + '</th><th scope="col">' + prodTableTitle.img + '</th><th scope="col">' + prodTableTitle.video + '</th><th scope="col">' + prodTableTitle.titulo + '</th><th scope="col">' + prodTableTitle.cat + '</th><th scope="col">' + prodTableTitle.precio + '</th><th scope="col">' + prodTableTitle.cantidad + '</th><th scope="col">' + prodTableTitle.med + '</th><th scope="col">' + prodTableTitle.stock + '</th><th scope="col">' + prodTableTitle.medida + '</th><th scope="col">' + prodTableTitle.descBreve + '</th><th scope="col">' + prodTableTitle.descLarga + '</th><th scope="col">' + prodTableTitle.comp + '</th><th></th></tr></thead>';

// textos contenidos
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
    '<tr><td>' + prodTableContent[i].cod + '</td><td>' + prodTableContent[i].img + '</td><td>' + prodTableContent[i].video + '</td><td>' + prodTableContent[i].titulo + '</td><td>stock</td><td>' + prodTableContent[i].categoria + '</td><td>' + prodTableContent[i].precio + '</td><td>' + prodTableContent[i].cantidad + '</td><td>' + prodTableContent[i].med + '</td><td>' + prodTableContent[i].stock + '</td><td>' + prodTableContent[i].medida + '</td><td>' + prodTableContent[i].descripcionBreve + '</td><td>' + prodTableContent[i].descripcionLarga + '</td><td>' + prodTableContent[i].composicion + '</td></tr>';
}

var btnsTable = document.getElementById("btns-table");

// al for siguiente hay que ponerle una función para cada contenido
for( let i = 0; i < prodTableContentLength; i++ ){
    btnsTable.innerHTML +=
    '<tr><td><button class="btn btn-outline-success table-buttons"><i class="fas fa-edit"></i></button></td><td><button class="btn btn-outline-success"><i class="fas fa-edit"></i></button></td><td><button class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button></td></tr>'
}

// fetch api json 

fetch('/productos.json')
  .then(response => response.json())
  .then(data => console.log(data));
// hasta acá manda la información al console log, la manda bien

