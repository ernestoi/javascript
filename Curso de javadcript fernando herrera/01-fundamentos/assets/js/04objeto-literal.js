
           // <--------------------------------    SON PRACTICAMENTE DICCIONARIOS ------------------------------------------------>
let personajes = {
    nombre: 'Tony Stark',
    codeName: 'Iron man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark 1', 'Mark v','Hulbuster'],
    direccion: {
        zip: '1029291',
        ubicacion: 'EEUU'
    },
    ultimaPelicula: 'Infinity word'
};
console.log(personajes);
console.log('Nombre',personajes.nombre, personajes.codeName);
console.log('Nombre:',personajes['nombre']);
console.log('Edad: ', personajes['edad']);
console.log('coords: ', personajes.coords);
console.log('coords: ', personajes.coords.lat);

console.log('N° Trajes:', personajes.trajes); // TOTAL DE TRAJES
console.log('N° Trajes:', personajes.trajes[personajes.trajes.length-1]); // ULTIMO TRAJE 'HULBUSTER

const x = 'vivo';
console.log('Vivo', personajes[x]);
console.log('Ultima película: ', personajes.ultimaPelicula);

// <--- MÁS DETALLES --->
// ELIMINAR EL OBJETO
delete personajes.edad;
console.log(personajes);

personajes.casado = true;
const entriesPares = Object.entries(personajes); // en lugar de tener un objeto, tenemos que dentro de los arreglos tenemos arrglos de 2 posiciones Array(2)
console.log(entriesPares);

const productos = {
  laptop: 800,
  mouse: 20,
  teclado: 50
};

// AQUI NO NECESITAMOS USAR i++, ni contador
for (let [item, valor] of Object.entries(productos)) {
    if (valor > 100) {
        console.log(item,valor);
    }

}

// Esta propiedad nos permite bloquear los objetos dentro de personajes, ya sea para gregar propiedades, eliminar, modificar, objetos de primer nivel, pero no a los objetos dentro de los onjetos como x ejemplo coords
Object.freeze(personajes);
personajes.dinero = 100000000000; // objeto bloqueado contra escritura
personajes.coords.lat = -123.34; // latitud modificada
console.log(personajes);

// Devuelve TODAS las propiedades propias de un objeto (en forma de array) Solo los nombres de las propiedades (claves)
const propiedades = Object.getOwnPropertyNames(personajes);
console.log({propiedades});


// EJERCICIO
const persona = {
  nombre: "Ernesto",
  edad: 22,
  ciudad: "Quito"
};

for (let[clave, valor] of Object.entries(persona)){
    console.log(clave,":",valor)
}














