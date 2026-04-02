// Primitivo → guarda valor : numerb,string,booleano -> se copia el valor
//👉 Objeto → guarda dirección : arrays[ ], diccionario { } -> apuntan al mismo valor

let a = 10;
let b = a;
console.log({a,b});
a = 30;
console.log({a,b});


// REFERENCIA EN OBJETOS
let juan = {nombre:'juan'};
let ana  = {...juan};
ana.nombre = 'ana'
console.log({juan,ana})


const cambiaNombre = (persona) => {
    return {...persona, nombre:"tony"};
}
let peter = {nombre:'peter'};
let tony = cambiaNombre(peter);
console.log({peter, tony});


// ARREGLOS
const frutas = ['mora','pera','banano'];

// forma 1 para romper la referencia y hacer copia
console.time('slice');
const otrasFrutas = [...frutas];
otrasFrutas.push('frutilla');
console.table({frutas, otrasFrutas});
console.timeEnd('slice');

// forma 2 para romper la referencia y hacer copia
console.time('spread');
const otrasFrutas2 = frutas.slice()
console.timeEnd('spread');






