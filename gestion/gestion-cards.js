var titles = ['codigo', 'Imagen', 'video', 'titulo', 'precio', 'stock'];

var products = [
    { id: '0', codigo: '123', img: 'img1', titulo: 'pepito', cantidad: '23', medidau: 'lt', moneda: '$', precio: '351', stock: '45', medidas:'botellas', descripcion: 'Lorem1 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}, 
    { id: '1', codigo: '345', img: 'img2', titulo: 'menganito', cantidad: '54', medidau: 'kg', moneda:'U$S', precio: '352', stock: '67', medidas:'caja', descripcion: 'Lorem2 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}, 
    { id: '2', codigo: '456', img: 'img3', titulo: 'sultanito', cantidad: '345', medidau: 'lb', moneda:'$', precio: '353', stock: '78', medidas:'u', descripcion: 'Lorem3 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
]

let all = document.getElementById("all");



//titulo de la tabla
let titletable = document.createElement("table");
let titletr = document.createElement("tr");

Object.values(titles).forEach(content =>{
    let titleth = document.createElement("th");
    let thtxt = document.createTextNode(content);
    titleth.appendChild(thtxt);
    titletr.append(titleth);
})

titletable.appendChild(titletr);
console.log("titletable", titletable);

// todo
all.innerHTML = titletable;


// visible
let visible = document.createElement("div");
let visibletable = document.createElement("table");
let visibletr = document.createElement("tr");

for(let i = 0; i < products.length; i++){

    //card
    let card = document.createElement("div");

    let visiblecontent = '<table><tr><td><button onclick="openinvisible(invisiblecontent)">+</button></td><td>' + products[i].id + '</td><td>' + products[i].codigo + '</td><td>' + products[i].img + '</td><td>' + products[i].titulo + '</td><td>' + products[i].cantidad + '</td><td>' + products[i].medidau + '</td></tr></table>';

    let invisiblecontent = '<div>' + products[i].descripcion + '</div>';

    function openinvisible(el){
        if (el.style.display === "none"){
            el.style.display = "block"
        } else {
            el.style.display = "none"
        }
    }


    // let visibletd1 = document.createElement("td");
    // let visibletdtxt = document.createTextNode(products.id);
    // visibletd1.appendChild(visibletdtxt);
    // visibletr.appendChild(visibletd1);

    // let visibletd2 = document.createElement("td");
    // let visibletdtxt2 = document.createTextNode(products.codigo);
    // visibletd2.appendChild(visibletdtxt2);
    // visibletr.appendChild(visibletd2);

    // console.log("visibletr", visibletr);
}
