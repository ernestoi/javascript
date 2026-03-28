// ------------------------- FUNCIONES -------------------------------------------
// --> Sirve para centralizar la lógica de un procedimiento que lo podemos reutilizar más adelante o ejecutarlo varias veces.

function saludar() {
    console.log('Hola Mundo');
}

// argumentos en una función
function saludar3(nombre) {
    console.log('Hola Mundo ' + nombre);
}
saludar3('Fernando');


// función anónima -> el nombre de la función se le asigna con la variable const saludar1
const saludar1 = function(nombre){
    console.log("holaaa, funcion anónima "+nombre);
}
// FUNCION ANONIMA CON ARGUMENTOS
saludar1("Fernando const", 40, true, 'costa rica');




// ---------------------- FUNCION LAMBDA, FLECHA ------------------------------
const  saludarFlecha = () => {
    console.log("Función de flecha");
}
saludarFlecha();

// enviar argumentos, funcion flecha
const  saludarFlecha2 = (hora) => {
    console.log("Función de flecha con argumentos: "+ hora+'PM');
}
saludarFlecha2('12:23');

// EJERCICIO 1
const datos = (nombre, edad) =>{
    console.log('Hola '+nombre+', tienes '+edad+' años')
}
datos('Isaias', 22);

// EJERCICIO 2
const calcular = (numero) => {
    if (numero %2 == 0) {
        console.log(`El número ${numero} es par`);
    } else {
        console.log(`El número ${numero} es impar`);
    }
}
calcular(3);

// EJERCICIO 3
function comparar(num){
    if (num < 0) {
        console.log(`El número es negativo: ${num}`);
    } else if (num === 0) {
        console.log(`El número es: ${num}`);
    } else {
        console.log(`El número es positivo: ${num}`);
    }
}
comparar(10);





