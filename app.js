function cerrarSesion() {
    $.ajax({
      url: 'api/cerrar-sesion.php',
      type: 'GET',
      success: function(response) {
       
        console.log("sesion cerrada")
    

      }
    });
  }



$(document).ready(function() {
    let sesion 
    let comp = "invitado"
    let frm_login = document.getElementById("login-form-popup")
    let frm_usr_lgd = document.getElementById("user-form-logueado")
   
    var login_Btn = document.getElementById("login-btn");
    let btn_login = document.getElementById("send-login")
    let btn_logout = document.getElementById("btn-logout")
    let nombre_usuario = document.getElementById("emailInput")

    frm_login.style.display = "none"
    frm_usr_lgd.style.display = "none"


    $.ajax({
        url: 'api/usr.php',
        type: 'GET',
        success: function(response){
            sesion = response.usr
            $('#nombre-de-usuario').html(sesion)

            if(sesion == comp){
                console.log("sesion de invitado")
                login_Btn.addEventListener("click", function(){
                    if(frm_login.style.display === "none"){
                        frm_login.style.display = "block"
                    }else{
                        frm_login.style.display = "none"
                    }
                });
            
            }else{
                console.log("hay usuario logeadooo")
                console.log(sesion)
            
                login_Btn.addEventListener("click", function(){
                    if(frm_usr_lgd.style.display === "none"){
                        frm_usr_lgd.style.display = "block"
                    }else{
                        frm_usr_lgd.style.display = "none"
                    }

                })
            }

         
        }


    }); 

    btn_login.addEventListener("click", function(){
        console.log("boton logIN clickeado!!")
        let nom_usr = $('#emailInput').val()
        console.log(nom_usr)
        $.ajax({
            url: 'api/login.php',
            type: 'POST',
            data: {nom_usr},
            success: function(){
             
              console.log("enviado datos")
          
      
            }
          });

    })

    btn_logout.addEventListener("click", function(){
        console.log("boton logOUT clickeado!!")
        console.log(sesion)
        cerrarSesion()


    })

     

    
})