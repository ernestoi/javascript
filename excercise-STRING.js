/* 
1 Concatena dos cadenas de texto
2 Muestra la longitud de una cadena de texto
3 Muestra el primer y último carácter de un string
4 Convierte a mayúsculas y minúsculas un string
5 Crea una cadena de texto en varias líneas
6 Interpola el valor de una variable en un string
7 Reemplaza todos los espacios en blanco de un string por guiones
8 Comprueba si una cadena de texto contiene una palabra concreta
9 Comprueba si dos strings son iguales
10 Comprueba si dos strings tienen la misma longitud
*/
let saludo1 = "Hola";
let nombre1 = "Cómo estás?";
let names = "Hola";
let comparacion = saludo1==names;
let mismalongitud = saludo1.length ==  names.length
// console.log("palabra1" + "palabra2");
console.log(nombre1.length);
console.log(nombre1[0]);
console.log(nombre1[10]);
console.log(nombre1.toUpperCase());
console.log(nombre1.toLowerCase());
let texto_lineas_dif = `Hola, mucho gusto 
poder saber 
de ti....`;
console.log(texto_lineas_dif);
console.log(`${saludo1} ${names}, ${nombre1}....`)
console.log(nombre1.replace(" ", "-"));
console.log(nombre1.includes("estás"));
console.log(comparacion);
console.log(mismalongitud);

