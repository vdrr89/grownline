
$(document).ready(function() {
    let sesion 
    let comp = "invitado"
    let frm_login = document.getElementById("login-form-popup")
    var login_Btn = document.getElementById("login-btn");
    let frm_usr_lgd = document.getElementById("user-form-logueado")
    let btn_login = document.getElementById("send-login")

    frm_login.style.display = "none"
    frm_usr_lgd.style.display = "none"


    $.ajax({
        url: 'api/usr.php',
        type: 'GET',
        success: function(response)  {
         // const tasks = JSON.parse(response);
         //console.log(response)
         //console.log(response.usr)
         sesion = response.usr
         //let template = `${response.usr}`
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
        btn_login.addEventListener("click", function(){
            console.log("boton clickeado!!")
        })
         
        }


    }); 



    
})