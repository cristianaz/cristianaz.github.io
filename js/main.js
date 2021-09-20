var email= $('#email');
var alert = $('#alert');
var alert2 = $('#alert2');
alert.hide();
alert2.hide();
email.submit(function(event){
    event.preventDefault();
    var data = $(this).serializeArray();
    var name = data[0].value;
    var correo = data[1].value;
    var asunto = data[2].value;
    var mensaje = data[3].value;
    console.log(asunto, mensaje)
    validarAsunto(asunto);
    validarMensaje(mensaje);
   
}
);

function validarAsunto(asunto){
    if (asunto.length <5){
        alert.show();
    } else {
        alert.hide();
    }
}

function validarMensaje(mensaje){
    if (mensaje.length < 5){
        alert2.show();
    } else {
        alert2.hide();
    }
}

function limpiarFormulario() {
    document.getElementById("email").reset();}