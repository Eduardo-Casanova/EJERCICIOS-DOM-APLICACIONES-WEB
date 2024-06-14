// Punto 8a
function validarFormulario() {
    let x = document.forms["miFormulario"]["nombre"].value;
    if (x == "") {
        alert("Se debe completar el nombre");
        return false;
    }
}

// Punto 8b
function miFuncion() {
    let x = document.getElementById("numero").value;
    let texto;
    if (isNaN(x) || x < 1 || x > 10) {
        texto = "Entrada no válida";
    } else {
        texto = "Entrada correcta";
    }
    document.getElementById("demo").innerHTML = texto;
}
