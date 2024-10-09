// TAREA ENTREGABLE 2


// Almacenar el elemento cuyo id es cardContainer en una variable constante llamada cardContainer.

const cardContainer = document.getElementById('cardContainer');

// 1) Eliminar el primer elemento hijo desde el padre.

cardContainer.removeChild(cardContainer.firstElementChild);

// 2) Eliminar, desde el propio elemento, el elemento cuya clase es "cards redClass".

const redClassCard = cardContainer.querySelector('.cards.redClass');
if (redClassCard) {
  cardContainer.removeChild(redClassCard);
}

// 3) Crear un elemento h1 con vuestro nombre.

const h1Element = document.createElement('h1');
h1Element.textContent = 'Tu Nombre';  // Reemplaza 'Tu Nombre' con tu propio nombre real.

// 4) Crear un elemento enlace con texto "Vedruna" y cuyo href sea la pagina del vedruna.

const linkElement = document.createElement('a');
linkElement.textContent = 'Vedruna';
linkElement.href = 'https://www.vedruna.org'; // URL de la página del Vedruna
linkElement.target = '_blank';  // Para abrir el enlace en una nueva pestaña

// 5) Crear un elemento botón cuyo id sea "botonJoker" y su texto sea "boton".

const buttonElement = document.createElement('button');
buttonElement.id = 'botonJoker';
buttonElement.textContent = 'boton';

// 6) Crear un elemento div cuya clase sea "cards greenClass".

const divElement = document.createElement('div');
divElement.className = 'cards greenClass';

// 7) Añadir al elemento div creado anteriormente los h1, enlace y botón creados anteriormente.

divElement.appendChild(h1Element);
divElement.appendChild(linkElement);
divElement.appendChild(buttonElement);

// 8) Añadir a cardContainer el div del apartado anterior.

cardContainer.appendChild(divElement);


