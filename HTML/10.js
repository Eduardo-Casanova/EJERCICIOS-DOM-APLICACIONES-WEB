// Función para actualizar la fecha y hora
function actualizarFecha() {
    var fecha = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    var fechaFormateada = fecha.toLocaleDateString('es-ES', options);
    document.getElementById("demoFecha").innerHTML = "Fecha: " + fechaFormateada;
}

// Actualizar la fecha cada segundo
setInterval(actualizarFecha, 1000); // 1000 milisegundos = 1 segundo
