// Punto 5a
const formElement = document.forms['frm1'];
let texto = "";
for (let i = 0; i < formElement.length; i++) {
    texto += formElement.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = texto;
console.log(texto);
