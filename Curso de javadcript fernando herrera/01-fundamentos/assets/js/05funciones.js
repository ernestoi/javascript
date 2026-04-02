// ------------------------- FUNCIONES -------------------------------------------
// --> Sirve para centralizar la lógica de un procedimiento que lo podemos reutilizar más adelante o ejecutarlo varias veces.

function saludar() {
    console.log('Hola Mundo');
}

// argumentos en una << FUNCION >>
function saludar3(nombre) {
    console.log('Hola Mundo ' + nombre);
    return 1;
}
saludar3('Fernando');

// RETORNO DE UNA << FUNCION NORMAL>>
function sumar(a,b) {
    return a+b;
}
console.log(sumar(1,3));

// << FUNCION anónima >>  -> el nombre de la función se le asigna con la variable const saludar1
const saludar1 = function(nombre){
    console.log("holaaa, funcion anónima "+nombre);
}
// FUNCION ANONIMA CON ARGUMENTOS
saludar1("Fernando const", 40, true, 'costa rica');

// RETORNO DE UNA FUNCION NORMAL
function saludar3(nombre) {
    console.log('Hola Mundo ' + nombre);
}
saludar3('Fernando');



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

// RETORNO DE UNA FUNCION FLECHA
const suma2 = (a,b) => {
    return a+b; // retornar a+b
}
console.log(suma2(0,3));

// EJERCIICO DE FLECHA CON RETORNO
console.log('*******************************')
const getAleatorio = () => Math.random();// con esto obtenemos números aleatorios.
console.log('El número aleatorio es: '+ getAleatorio());
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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





