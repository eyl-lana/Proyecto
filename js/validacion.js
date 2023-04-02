 function validarFormularioRegistro(){
    var nombre = document.forms["registro"]["nombre"].value;
    var apellido = document.forms["registro"]["apellido"].value;
    var correo = document.forms["registro"]["correo"].value;
    var contrasena = document.forms["registro"]["contrasena"].value;

    if (nombre == "" || apellido == "" || correo == "" || contrasena == ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    return true;
}

function validarFormularioAcceso(){
    var correo = document.forms["acceso"]["correo"].value;
    var contrasena = document.forms["acceso"]["contrasena"].value;

    if (correo == "" || contrasena == ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    return true;
}