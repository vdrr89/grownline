let admin;
let usr;    
let comp = "invitado";
let frm_login = document.getElementById("login-form-popup")
let frm_usr_lgd = document.getElementById("user-form-logueado")

//var login_Btn = document.getElementById("login-btn");
let btn_login = document.getElementById("send-login")
let btn_logout = document.getElementById("btn-logout")
let login_btn_sin_sesion = document.getElementById("login-btn-sin-sesion")
let login_btn_con_sesion = document.getElementById("login-btn-con-sesion")

$(document).ready(function() {

    login_btn_sin_sesion.style.display = "none"
    login_btn_con_sesion.style.display = "none"
    frm_login.style.display = "none"
    frm_usr_lgd.style.display = "none"
   



    $.ajax({
        url: 'api/usr.php',
        type: 'GET',
        success: function(response){
            console.log(response)
             
            usr = response[0].usr 
            admin = response[0].admin
            $('#nombre-de-usuario').html(usr)
            
            console.log(admin)
        

            if(usr == comp){
                console.log("sesion de invitado")
                
                login_btn_sin_sesion.style.display = "block"

                login_btn_sin_sesion.addEventListener("click", function(){
                    if(frm_login.style.display === "none"){
                        frm_login.style.display = "block"
                    }else{
                        frm_login.style.display = "none"
                    }
                });
            
            }else{
                console.log("hay usuario logeadooo")
                console.log(usr)
                console.log(admin)
                login_btn_con_sesion.style.display = "block"
            
                login_btn_con_sesion.addEventListener("click", function(){
                    console.log("boton clikeado")
                    if(frm_usr_lgd.style.display === "none"){
                        frm_usr_lgd.style.display = "block"
                    }else{
                        frm_usr_lgd.style.display = "none"
                    }
                })
                if(admin == 'v'){
                   
                }
            }
        },
        error: function(){
            console.log("error en ajax")
        }
    }); 




    btn_login.addEventListener("click", function(){
        const postDatos = {
            nom_usr: $('#emailInput').val(),
            pass: $('#floatingPassword').val(),
        };

        $.ajax({
            url: 'api/login.php',
            data: postDatos,
            type: 'POST',
            success: function (response){
                console.log(response)
                document.location.href = "index.html"
            },
            error: function(resp){
                console.log("errorrrrr al ajax")
            }
        })
    })



    btn_logout.addEventListener("click", function(){
        console.log("boton logOUT clickeado!!")
       
        $.ajax({
            url: 'api/cerrar-sesion.php',
            type: 'GET',
            success: function(response) {
                document.location.href = "index.html"
                console.log("sesion cerrada")
            }
          });
    })   
})