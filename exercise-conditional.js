/* 
Número positivo, negativo o cero
Crea un programa que reciba un número y muestre:
"Número positivo" si es mayor que 0
"Número negativo" si es menor que 0
"Es cero" si el número es 0
*/
let num = "xecr";
if (num>0) {
    console.log(`El número: ${num}, es positivo`);
} else if (num < 0) {
    console.log(`El número: ${num}, es negativo`);
} else{
    //console.log("Erro de valor..!!!");
}

/* 
Clasificación de edad
Un programa debe recibir una edad y mostrar:
"Niño" si la edad es menor de 12
"Adolescente" si está entre 12 y 17
"Adulto" si está entre 18 y 59
"Adulto mayor" si es 60 o más
*/
let edad = 0;
if (edad <= 0) {
    //console.log("La edad es negativa");
} else if (edad < 12) {
    console.log("Es un niño");
} else if (edad >= 12 && edad <= 17) {
    console.log("Es un adolecente");
} else if (edad >= 18 && edad <= 59) {
    console.log("Es una persona adulta")
} else{
    console.log("Erro de dato..!!")
}


/* 
Nota de estudiante
Según una nota del 0 al 100, el programa debe mostrar:
"Excelente" si es 90 o más
"Aprobado" si está entre 70 y 89
"Recuperación" si está entre 60 y 69
"Reprobado" si es menor de 60
*/
let nota = "cxjsckd";
if (nota <= 0 || nota > 100) {
    console.log("No se acepta valores negativos, ni valores mayores a 100");
} else if (nota<60) {
    console.log("Reprobado, es menor de 60..");
} else if (nota >= 60 && nota <= 69) {
    console.log("Recuperación, está entre 60 y 69");
} else if (nota >= 70 && nota <= 89) {
    console.log("Aprobado, entra 70 y 89");
} else if (nota >= 90 && nota <= 100) {
    console.log("Excelente, mayor a 90");
} else {
    //console.log("Error en el tipo de dato");
}

/* 
El programa recibe dos números y debe mostrar:
"El primer número es mayor"
"El segundo número es mayor"
"Los números son iguales"
*/
let numero1 = 35;
let numero2 = 35;
if (numero1 == numero2) {
    console.log("Los números son iguales");
} else if (numero1 > numero2) {
    console.log("El primer número es mayor")
} else {
    console.log("El segundo número es mayor")
}

/* 
EJERCICIOS Y CONDICIONALES
*/
// 1. Imprime por consola tu nombre si una variable toma su valor
let names = "Ernesto";
console.log(names)


// 2. Imprime por consola un mensaje si el usuario y contraseña coninciden con unos establecidos
let usuario = "Isaias1";
let usuario_ingresado = "Isaias1";
let contraseña = "isaiascoca123";
let contraseña_ingresada = "isaiascoca1232";
if (usuario_ingresado === usuario && contraseña_ingresada === contraseña) {
     console.log("El usuario y contraseña es correcto");
} else{
    console.log("Usuario y contraseña, es incorrecto");
}

// 3. Verifica si un número es positivo, negativo o cero e imprimir un mensaje
let numero = -4;
if (numero < 0) {
    console.log("Número negativo...");
} else if (numero == 0) {
    console.log("NUmero 0...");
} else if (numero > 0) {
    console.log("El número es positivo");
} else{
    console.log("Este es un valor incorrecto..");
}



// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años tiene
let years = "cjxjkz";
if (years>= 1 && years<18) {
    console.log("No puede votar, es menor de edad..");
} else if  (years<=0) {
    console.log("No pueden tener valores negativos..");
} else if (years >= 18) {
    console.log("Puede votar, es mayor de edad..");
} else {
    console.log("Ingrese un valor correcto..!!");
}

// 5. Usa el operador ternario para asiganr el valor de una variable "mes"
console.log("--------------------------------------")
const edadd = 60;
const categoria = edadd <=12 ? "Es niño": edadd < 18 ? "Es adolecente" : edadd < 18 ? "Eres adolecente": "Error"
console.log(categoria);


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 11;
if (mes === 2) {
    console.log("Estamos en Primavera");
} else if (mes === 5) {
    console.log("Estamos en Verano");
} else if (mes === 8) {
    console.log("Estamos en Otoño");
} else if (mes === 11) {
     console.log("Estamos en Invierno");
} else {
    console.log("Ingrese un valor correcto");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let num_dias = 0;
if (mes == 2) {
    num_dias = 28;
    console.log(`Febrero tiene ${num_dias} días`);
} else if (mes == 5) {
    num_dias = 31;
    console.log(`Mayo tiene ${num_dias} días`);
} else if (mes == 8) {
    num_dias = 30;
    console.log(`Agosto tiene ${num_dias} días`);
} else if (mes == 11) {
    num_dias = 31;
    console.log(`Noviembre tiene ${num_dias} días`)
} else {
    console.log("Ingrese un dato correcto")
}







//SWITCH
// 1. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.
let saludo = 3;
switch (saludo){
    case 1:
        console.log("Hola, en español");
        break
    case 2:
        console.log("Hello, en inglés");
        break
    case 3:
        console.log("Arigatoo, en japonés");
        break
    case 4:
        console.log("Ni hao, en chino");
        break
    default:
        console.log("Ingrese un valor correcto..!!");
}

// 2. 