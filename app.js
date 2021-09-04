$(document).ready(function() {
    $.ajax({
        url: 'api/usr.php',
        type: 'GET',
        success: function(response)  {
         // const tasks = JSON.parse(response);
         console.log(response)
         //console.log(response.nombre)
         console.log(response.usr)
         let template = `${response.usr}`
         $('#usuario').html(template)
         
   
         
        }
    }); 

    
})