/* 
1. .EJERCICIO

// agrega 20 y 24 al final
// elimina el último número
// muestra el tamaño final del array
*/
let numeros = [4, 8, 12, 16];
numeros.push(20);
numeros.push(24);
numeros.pop();
console.log(numeros.length)
console.log(numeros);

/*
2. Ejercicio

// elimina la primera ciudad
// agrega "Santiago" y "Buenos Aires" al inicio
// muestra el array final
*/
let ciudades = ["Quito", "Lima", "Bogotá", "Caracas"];
ciudades.shift(); // elimina el primer elemento de una lista
ciudades.unshift("Santiago","Buenos Aires");
console.log(ciudades);

/*
3. Ejercicio

// crea un nuevo array que contenga
// desde "pera" hasta "mango"
// sin modificar el array original
*/
let frutas = ["manzana", "pera", "uva", "mango", "sandia"];
let nuevasFrutas = frutas.slice(1, 4);
console.log(nuevasFrutas);

/* 
4. Ejercicio

// elimina 30 del array usando splice
// agrega 25 en la posición donde estaba 30
array.splice(inicio, cantidadEliminar, elemento1, elemento2, ...)
*/
let numeros2 = [10, 20, 30, 40, 50];
numeros2.splice(2,1,25);
console.log(numeros2);

/*

// elimina los dos últimos animales
// agrega "leon" al final
*/
let animales = ["perro", "gato", "conejo", "tigre"];
animales.pop();
console.log(animales);
animales.pop();
console.log(animales);
animales.push("leon");
console.log(animales);




