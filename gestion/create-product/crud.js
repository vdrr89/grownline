$(document).ready(function() {
    console.log("mierda")
    $( "#btn-send" ).click(function() {
        //alert( "Handler for .click() called." );
        const postData = {
            name: $('#name').val(),
            description: $('#description').val(),
            id: $('#taskId').val()
        };
    });
});