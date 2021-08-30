var titles = ['codigo', 'Imagen', 'video', 'titulo', 'precio', 'stock'];

var products = [
    { id: '0', codigo: '123', img: 'img1', titulo: 'pepito', cantidad: '23', medidau: 'lt', moneda: '$', precio: '351', stock: '45', medidas:'botellas', descripcion: 'Lorem1 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}, 
    { id: '1', codigo: '345', img: 'img2', titulo: 'menganito', cantidad: '54', medidau: 'kg', moneda:'U$S', precio: '352', stock: '67', medidas:'caja', descripcion: 'Lorem2 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}, 
    { id: '2', codigo: '456', img: 'img3', titulo: 'sultanito', cantidad: '345', medidau: 'lb', moneda:'$', precio: '353', stock: '78', medidas:'u', descripcion: 'Lorem3 Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
]

var all = document.getElementById("all");

// el contenedor de cada articulo
let producto = document.createElement("div");

// tabla visible
// visible.className = "visible"; 

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

// div visible 
let visible = document.createElement("div");
let visibletable = document.createElement("table");
let visibletr = document.createElement("tr");
let visibletd = document.createElement("td");

for(let j = 1; j < 8; j++){
    let visibletdtxt = document.createTextNode(products[j].codigo);
    visibletd.appendChild(visibletdtxt);
};

visibletr.appendChild(visibletd);
visibletable.appendChild(visibletr);
visible.appendChild(visibletable);
console.log("visible", visible);


// div oculto
let invisible = document.createElement("div");
// invisible.className = "invisible";

Object.values(products).forEach(prod =>{
    let content = document.createElement("p");

    for(let i=0; i<products.length; i++){
        let contenttxt = document.createTextNode(products.descripcion);
        content.appendChild(contenttxt);
    }

    invisible.appendChild(content);
    console.log("invisible", invisible);
});

// card
let card = document.createElement("div");
let supercard = document.createElement("div");
supercard.innerHTML += visible + invisible;
card.appendChild(supercard);

//todo
all.innerHTML += titletable + card;