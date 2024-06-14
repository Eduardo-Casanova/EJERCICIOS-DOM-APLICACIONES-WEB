// Punto 4a
const elementosCSS = document.querySelectorAll("p.intro");
console.log(elementosCSS);

// Punto 4b
const listItems = document.querySelectorAll("ul > li");
console.log(listItems);

// Punto 4c
const h1Element = document.querySelector("h1");
console.log(h1Element);

// Punto 4d
const listClass = document.querySelector(".list");
console.log(listClass);

// Punto 4e
const listaDeElementos = document.querySelectorAll("ul > li");
listaDeElementos.forEach((item) => {
    console.log(item);
});

//Punto 4f
const h1 = document.querySelector("h1");
h1.style.color = "blue";