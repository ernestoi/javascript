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
