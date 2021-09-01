//botones
var btnBack = document.getElementById("btn-back");
var btnDelete = document.getElementById("btn-delete");
var btnSend = document.getElementById("btn-send");

//inputs
var titulo = document.getElementById("titulo");
var imageurl = document.getElementById("imageurl");
var videourl = document.getElementById("videourl");
var precio = document.getElementById("precio");
var cantidadu = document.getElementById("cantidadu");
var stock = document.getElementById("stock");
var descripcion = document.getElementById("descripcion");

//no funciona
// if(titulo.value && imageurl.value && videourl.value && precio.value && cantidadu.value && stock.value && descripcion.value != ""){
//     btnBack.style.display = "none";
//     btnDelete.style.display = "block";
// }

// tiene que ser .length == 0
// no funciona
// function ifEmptyInput() {
//     if (descripcion.value.length > 0){
//         btnBack.style.display = "none";
//         btnDelete.style.display = "block";
//     } else {
//         btnBack.style.display = "block";
//         btnDelete.style.display = "none";
//     }
// }

//no funcionan
titulo.addEventListener("keyup", changeBackDelete());
imageurl.addEventListener("keyup", changeBackDelete());
videourl.addEventListener("keyup", changeBackDelete());
precio.addEventListener("keyup", changeBackDelete());
cantidadu.addEventListener("keyup", changeBackDelete());
stock.addEventListener("keyup", changeBackDelete());
descripcion.addEventListener("keyup", changeBackDelete());

function changeBackDelete(){
    btnBack.style.display = "none";
    btnDelete.style.display = "block";
}

btnDelete.addEventListener("click", deleteInputValues());

function deleteInputValues(){
    titulo.value = "";
    imageurl.value = "";
    videourl.value = "";
    precio.value = "";
    cantidadu.value = "";
    stock.value = "";
    descripcion.value = "";
}