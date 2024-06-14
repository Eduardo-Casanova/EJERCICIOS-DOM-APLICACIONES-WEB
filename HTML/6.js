document.addEventListener("DOMContentLoaded", () => {
    // Crear una lista y agregarla al cuerpo del documento
    let lista = document.createElement("ul");
    document.body.appendChild(lista);

    // Crear un arreglo con los elementos que se agregarán a la lista
    let elementos = [
        "Flor",
        "Jaguar",
        "Cielo",
        "Montaña",
        "Río"
    ];

    // Iterar sobre los elementos y agregarlos a la lista
    elementos.forEach(texto => {
        let elemento = document.createElement("li");
        elemento.textContent = texto;
        lista.appendChild(elemento);
    });
});