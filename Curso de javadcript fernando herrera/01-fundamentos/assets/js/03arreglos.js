// const arr = new Array(10); // aquì estoy creando 10 elementos
// const arr = []; // nuevo arreglo vacío.
// console.log(arr);

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({videoJuegos}); // {} simboliza un objeto
console.log(videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    'fernando',
    2+3,
    ['X', 'Megaman','Zero','DR...', ['Dr Willy', 'Woodman']]
];
console.log(arregloCosas[4][4][1]);


// ___________________ EJEMPLO 2 ____________________________
// __________________________________________________________

let juegos = ['zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length);

let primero = juegos[3-2];
let ultimo = juegos[juegos.length - 1];
console.log(primero);
console.log(ultimo);
console.log({primero, ultimo});
console.log(primero, ultimo);

juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

// BUSCAR EL ÍNDICE DE 'Metroid'
let metroidIndex = juegos.indexOf('Metroid'); // caseSensitive
console.log(metroidIndex);
// si hacemos un indexOf y no encontró el elemento devuelve -1
let metroidIndex1 = juegos.indexOf('metroid');// m minúscula
console.log(metroidIndex1) // -1, no encontro el elemento


























