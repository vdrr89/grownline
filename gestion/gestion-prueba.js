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

var prodContent = document.getElementById("prod-content");   

// for(let i = 0; i < prodTableContent.length; i++){
//     prodContent.innerHTML += 
//       '<tr><td><button class="clickeable" id="clickeable' + [i] + '">+</button></td><td>' + prodTableContent[i].cod + '</td><td><img class="gestion-img" src="' + prodTableContent[i].img + '"></td><td>' + prodTableContent[i].video + '</td><td>' + prodTableContent[i].titulo + '</td><td>' + prodTableContent[i].categoria + '</td><td>' + prodTableContent[i].precio + '</td><td>' + prodTableContent[i].cantidad + '</td><td>' + prodTableContent[i].med + '</td><td>' + prodTableContent[i].stock + '</td><td>' + prodTableContent[i].medida + '</td><td class="fixed-col2"><button class="btn btn-outline-success"><i class="fas fa-edit"></i></button></td><td class="fixed-col3"><button class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button></td></tr><tr><td colspan="10"><div id="collapsable' + [i] + '" class="collapsable">' + prodTableContent[i].descripcion + prodTableContent[i].composicion + '</div></td></tr>';
    
//     let clickeable = document.getElementById('clickeable' + [i] + '');
//     let collapsable = document.getElementById('collapsable' + [i] + '');
      
//     // funciona, pero no identifica a cual debe hacer click, el [i], ya quedó cada producto con su id empezando x 0, 1, 2, .. [i]
//     clickeable[i].addEventListener("click", function(){
//         if(collapsable[i].style.display === "none"){
//             collapsable[i].style.display = "block"; 
//             console.log("clickeable i if", collapsable.style.display)  
//         } else {
//             collapsable[i].style.display ="none";
//             console.log("clickeable i else", collapsable.style.display)  
//         }
//       });

    // funciona pero solo me abre el collapsable1 y no el 0, osea, es como si no usara el [i]
    // usar con onclick=(openCollapsable())
    // function openCollapsable(){
    //     if(collapsable.style.display === "none"){
    //         collapsable.style.display = "block";   
    //     } else {
    //         collapsable.style.display ="none"
    //     }
    // }

// } // este cierra el ciclo for

// $(document).ready(function() {
    prodContent.ready(function() { // ojo con este que lo agregué y le cambié el document x el prodContent, la sección que contiene los productos

    // Fetching Tasks
      function fetchTasks() {
        $.ajax({
          url: 'usuarios.php?id=13',
          type: 'GET',
          success: function(response)  {
           // const tasks = JSON.parse(response);
           console.log(response)
           //console.log(response.nombre)
           
            let template = '';
            response.forEach(users => {
              template += `
                    <tr>
                        <td><button class="clickeable" id="clickeable">+</button></td>
                        <td>${users.nombre}</td>
                        <td>${users.apellido}</td>
                        <td>${users.fechaNac}</td>
                        <td>${users.nombre}</td>
                        <td>${users.apellido}</td>
                        <td>${users.fechaNac}</td>
                        <td>${users.nombre}</td>
                        <td>${users.apellido}</td>
                        <td>${users.fechaNac}</td>
                        <td>${users.nombre}</td>
                        <td class="fixed-col2"><button class="btn btn-outline-success"><i class="fas fa-edit"></i></button></td>
                        <td class="fixed-col3"><button class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button></td>
                    </tr>
                    <tr>
                        <td colspan="10"><div id="collapsable" class="collapsable">${users.nombre}</div></td>
                    </tr>
                    `
            });
            $('#tabla').html(template);
          }
        });
      }
      fetchTasks()
    });
    