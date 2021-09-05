let sesion

$(document).ready(function() {
    $.ajax({
        url: 'api/usr.php',
        type: 'GET',
        success: function(response)  {
         // const tasks = JSON.parse(response);
         console.log(response)
         //console.log(response.nombre)
         sesion = response.usr
         //let template = `${response.usr}`
         $('#nombre-de-usuario').html(sesion)
         
   
         
        }
    }); 

    
})