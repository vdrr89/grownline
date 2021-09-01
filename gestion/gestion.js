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
    // mostrar boton con flecha para ir para atras el cual tendria link para ir para atras
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
    // modificar estilo de fuente y background de tab
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
var prodTableContent = [
    {
        img: 'img/top-crop/top-crop-1.jpg',
        video: 'https://youtu.be/EqeYE2Ms_U0',
        cod: '000',
        titulo: 'Cromplete Mix',
        categoria: 'Top Crop',
        precio: '500',
        cantidad: '50',
        med: 'l',
        stock: '10',
        medida: 'u', 
        descripcion: 'Complete Mix de Top Crop es un sustrato de primerísima calidad que proporciona excelentes resultados para la fase vegetativa de tu planta, facilitando un desarrollo radicular óptimo. <br><br> Complete Mix presume de ser uno de los sustratos más esponjosos del mercado gracias a su composición, muy rica en fibra de coco. Además, contiene humus de lombriz, ideal para el crecimiento de raíces fuertes y sanas.<br><br>Gracias a su composición especial te evitarás el uso de fertilizantes durante las tres primeras semanas de vida de la planta.<br><br>Complete Mix es un sustrato con un buen aireado y retención de humedad media ideal para climas templados (ni mucho frío ni mucho calor) y cultivos de interior. Además, la retención de agua es duradera contribuyendo a una mayor velocidad de desarrollo de la planta en comparación con otros sustratos.<br><br>Puedes añadir en tu Complete Mix otros sustratos como Nitroguano, Superguano y Top Vulcan.<br><br>FORMATO<br><br>Encontrarás Complete MIX en el formato de 50 litros.',
        composicion: 'Fibra de coco, Turba de Sphagnum (H2-H4)-Rubia y Compost Vegetal, con:<br><br>Perlita (5g/l)<br><br>Mezcla sólida de macro y micro nutrientes (3g/l)Leonardita (2g/l)<br><br>Materia orgánica sobre materia seca 76.2%<br><br>Conductividad eléctrica en agua (1:5 V/V)<br><br>CE: 520 µS/cm (25ºC). [(1:1.5 V/V) CE: 1000 µS/cm]<br><br>Densidad aparente seca: 135.3g/L<br><br>pH en agua (1/5 V/V): 6.5'
    }, 
    {
        img: 'img/top-crop/top-crop-1.jpg',
        video: 'https://youtu.be/EqeYE2Ms_U0',
        cod: '001',
        titulo: 'Cromplete Mix',
        categoria: 'Top Crop',
        precio: '500',
        cantidad: '50',
        med: 'l',
        stock: '10',
        medida: 'u', 
        descripcion: 'Complete Mix de Top Crop es un sustrato de primerísima calidad que proporciona excelentes resultados para la fase vegetativa de tu planta, facilitando un desarrollo radicular óptimo. <br><br> Complete Mix presume de ser uno de los sustratos más esponjosos del mercado gracias a su composición, muy rica en fibra de coco. Además, contiene humus de lombriz, ideal para el crecimiento de raíces fuertes y sanas.<br><br>Gracias a su composición especial te evitarás el uso de fertilizantes durante las tres primeras semanas de vida de la planta.<br><br>Complete Mix es un sustrato con un buen aireado y retención de humedad media ideal para climas templados (ni mucho frío ni mucho calor) y cultivos de interior. Además, la retención de agua es duradera contribuyendo a una mayor velocidad de desarrollo de la planta en comparación con otros sustratos.<br><br>Puedes añadir en tu Complete Mix otros sustratos como Nitroguano, Superguano y Top Vulcan.<br><br>FORMATO<br><br>Encontrarás Complete MIX en el formato de 50 litros.',
        composicion: 'Fibra de coco, Turba de Sphagnum (H2-H4)-Rubia y Compost Vegetal, con:<br><br>Perlita (5g/l)<br><br>Mezcla sólida de macro y micro nutrientes (3g/l)Leonardita (2g/l)<br><br>Materia orgánica sobre materia seca 76.2%<br><br>Conductividad eléctrica en agua (1:5 V/V)<br><br>CE: 520 µS/cm (25ºC). [(1:1.5 V/V) CE: 1000 µS/cm]<br><br>Densidad aparente seca: 135.3g/L<br><br>pH en agua (1/5 V/V): 6.5'
    }
];


var prodContent = document.getElementById("prod-content");   
var clickeable = new Array(prodTableContent.length)
var collapsable = new Array(prodTableContent.length)
console.log(clickeable.length)

prodTableContent.forEach(function(el, i){
    prodContent.innerHTML += 
      '<tr><td><button class="clickeable" id="clickeable' + [i] + '">+</button></td><td>' + el.cod + '</td><td><img class="gestion-img" src="' + el.img + '"></td><td>' + el.video + '</td><td>' + el.titulo + '</td><td>' + el.categoria + '</td><td>' + el.precio + '</td><td>' + el.cantidad + '</td><td>' + el.med + '</td><td>' + el.stock + '</td><td>' + el.medida + '</td><td class="fixed-col2"><button class="btn btn-outline-success"><i class="fas fa-edit"></i></button></td><td class="fixed-col3"><button class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button></td></tr><tr><td colspan="10"><div id="collapsable' + [i] + '" class="collapsable">' + el.descripcion + el.composicion + '</div></td></tr>';
     
      
    })
    
for(let i = 0; i < prodTableContent.length; i++){

    clickeable[i] = document.getElementById('clickeable' + [i]);
    collapsable[i] = document.getElementById('collapsable' + [i]);
    collapsable[i].style.display = "none"
    // funciona, pero no identifica a cual debe hacer click, el [i], ya quedó cada producto con su id empezando x 0, 1, 2, .. [i]
    clickeable[i].addEventListener("click", function(){
        if(collapsable[i].style.display == "none"){
            collapsable[i].style.display = "block"; 
            console.log("clickeable " + [i] + " if", collapsable[i].style.display)  
        } else {
            collapsable[i].style.display ="none";
            console.log("clickeable " + [i] + " else", collapsable[i].style.display)  
        }
      });

    // funciona pero solo me abre el collapsable1 y no el 0, osea, es como si no usara el [i]
    // usar con onclick=(openCollapsable())
    // function openCollapsable(){
    //     if(collapsable.style.display === "none"){
    //         collapsable.style.display = "block";   
    //     } else {
    //         collapsable.style.display ="none"
    //     }
    // }

}

// fetch api json 
/*
fetch('/productos.json')
  .then(response => response.json())
  .then(data => console.log(data));
// hasta acá manda la información al console log, la manda bien

*/