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
5. Ejercicio

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

/*
6. Ejericio

// inserta "Colombia" en la posición 1
// elimina "Chile"
*/
let paises = ["Ecuador", "Peru", "Chile", "Argentina"];
paises.splice(1,0,"Colombia");
paises.splice(3,1);
console.log(paises);

 /* 
 7. EJERCICIO

Si el primero es menor a 10 → reemplazar por 100
Si el segundo es mayor a 10 → sumarle 5
Si el tercero es menor a 5 → eliminarlo
 */
let datos = [8, 15, 4];
if (datos[0] < 10) {
    datos[0] = 100;
}

if (datos[1] > 10) {
    datos[1] += 5
}

if (datos[2] < 5) {
    datos.splice(2,1);
}
console.log(`Esta es la lista: [${datos}], FIN !!!!`)

/*
8. EJERCICIO

Agrega una tarea al final
Marca como completada la última tarea (elimínala)
Agrega una tarea urgente al inicio
👉 Imprime el resultado final

*/
let tareas = ["estudiar", "comer", "dormir"];
tareas.push("levantarse");
tareas.splice(3,1);
tareas.unshift("lavase los dientes");
console.log(tareas);


/*
9. EJERCICIO
    Si "Luis" aparece más de una vez:
    Elimina solo la segunda aparición
    Si "Pedro" NO existe:
    Agrégalo al inicio
    Elimina el último usuario del array
    Crea un nuevo array con los usuarios desde la posición 1 hasta la 3 (sin modificar el original)
    Reemplaza "Carlos" por "Andrés" (sin usar índice fijo)
*/
let usuarios = ["Ana", "Luis", "Carlos", "María", "Luis"];
usuarios.splice(4,1);
usuarios.unshift("Pedro");
usuarios.splice(4,1);
let new_usuarios = usuarios.slice(1,3);
if (usuarios.includes("Carlos")){
    console.log("Si existe carlos en la lista");
    let indice = usuarios.indexOf("Carlos");
    usuarios.splice(indice,1,"Andres");
    console.log(usuarios);
}
console.log(new_usuarios);

/*
10. EJERCICIO: Limpieza de datos

    Agrega 50 al final
    Elimina el primer número
    Agrega 5 al inicio
    Reemplaza el 30 por 99 (usa splice)
    Crea un nuevo array con los números del medio (sin el primero ni el último)
*/
let numeros1 = [10, 20, 30, 40];
numeros1.push(50);
numeros1.shift();
numeros1.unshift(5);
console.log(numeros1);
numeros1.splice(2,1, 99);
let new_list = numeros1.slice(1,4)
console.log(numeros1);
console.log(new_list);

/*
11. EJERCICIO
Agrega 55 al final
Elimina el primer elemento
Agrega 5 al inicio
Reemplaza 35 por 100 (como tú sabes hacerlo)
Saca un nuevo array sin el primero ni el último
*/
let datos1 = [15, 25, 35, 45];
datos1.push(55);
datos1.shift();
datos1.unshift(5);
datos1.splice(2,1,100);
let newArray = datos1.slice(1,4)
console.log(datos1);
console.log(newArray);

/*
12. EJERCICIO

Haz un if que:
Si "azul" existe → imprima "color encontrado"
Si no → imprima "no está"
*/
console.log('------------------------------------------')
console.log("12. EJERCICIO")
let lista = ["rojo","azul","verde"];
if (lista.indexOf("azul")!== -1) {
    console.log("Color encontrado...");
} else {
    console.log("No se ha encontrado");
}

/*
13. EJERCICIO

👉 Si "azul" existe:
reemplázalo por "morado"
👉 Si no existe:
agrégalo al final
*/
console.log('------------------------------------------')
console.log("13. EJERCICIO");
let lista1 = ["rojo", "azul", "verde"];
let index = lista1.indexOf("azul");
if (index !== -1) {
    lista1.splice(index,1,"morado");
    console.log(lista1);
} else {
    lista1.push("Azul");
}

/* 
14. EJERCICIO

Verifica si "azul" aparece más de una vez
Si aparece más de una vez:
elimina solo una de las repeticiones (deja un solo "azul")
Si solo aparece una vez:
agrega "azul" al final

*/
console.log('------------------------------------------')
console.log("14. EJERCICIO");
let lista2 = ["rojo", "azul", "verde", "azul"];
let primero = lista2.indexOf("azul");
let segundo = lista2.lastIndexOf("azul");
console.log(`Indice del primero: ${primero}`);
console.log(`Indice del segundo: ${segundo}`);
if (primero !== segundo) {
    lista2.splice(segundo,1);
    console.log(lista2);
} else {
    lista2.push("azul");
}

/* 
15. EJERCICIO -> carrito de compras

Si "leche" existe:
reemplázala por "leche deslactosada"
Si "queso" NO existe:
agrégalo al final
Elimina el primer producto
Agrega "cereal" al inicio
Crea un nuevo array con los elementos del medio (sin el primero ni el último)
*/
console.log('------------------------------------------')
console.log("15. EJERCICIO");
let lista3 = ["pan", "leche", "huevo"];
let indx = lista3.indexOf("leche");
if (indx !== -1) {
    lista3.splice(indx, 1, "leche deslactosada");
    console.log(lista3);
}
if (lista3.indexOf("queso") === -1) {
    lista3.push("queso")
    lista3.shift();
    lista3.unshift("cereal")
    let newArr = lista3.slice(1, lista3.length -1)
    console.log(lista3);
    console.log(newArr);
}












