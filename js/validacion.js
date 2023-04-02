validarFormulario();{
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