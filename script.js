/* TIPOS DE VARIABLES */
let a = 1
var text = "hola mundo"
const number = 24
let b = 2
let c = 7

/* OPERADORES ARITMETICOS */
console.log("Suma: ", a+b)
console.log("Resta: ",a-b)
console.log("Multiplicación", a*b)
console.log("División", a/b)
console.log("Módulo", a%b)
console.log("Exponente", a**b)
console.log("Incremento: ", a++)
console.log("Ahora A vale : ", a)
console.log("Decremento: ", b--)
console.log("Ahora B vale : ", b)

/* OPERADORES DE COMPARACIÓN */
console.log(" <- OPERADORES ARITMETICOS ->")
console.log(a>b);
console.log(a<b);
console.log(a<=c);
console.log(b>=c);
console.log(a==a);
console.log("---------------");
console.log(a==1);
console.log("---------------");
console.log(a==="1");
console.log("---------------");
console.log(a!=="1");

/* <- OPERADORES DE ASIGNACION -> */
console.log(" <- OPERADORES DE ASIGNACIÓN ->")
console.log(a+=2)
console.log(a-=2)
console.log(a*=2)
console.log(a/=25)
console.log(a%=2)
console.log(a*=10)

/* <---- TIPOS DE DATOS ----> */
let nombre="Isaias";
let edad=24;
let price=1.3;
let isStudent=true;
let city=null;
let infinito=BigInt(1234434343884893020302329329830203020302306099494837666252829030918726627384094);
let underfinedValue

/* <----- Ejercicios ------> */
/* EJERCICIO 1 */
/* Imprime 5 comparaciones verdaderas con diferentes operadores de comparación */
console.log("---------------");
console.log("---------------");
console.log("---------------");
console.log(10>5);
console.log(0>=0);
console.log(4<=6);
console.log(4!=="4");
console.log(nombre==="Isaias");

/* Imprime 5 comparaciones falsas con diferentes operadores de comparación
 */
console.log("---------------");
console.log("---------------");
console.log("---------------");
console.log(3>10);
console.log(10<=5);
console.log(edad != "24")
console.log(isStudent==false)
console.log(price === "1.3")

/* Utiliza el operador lógico AND */
console.log("---------------");
console.log("---------------");
console.log("---------------");
console.log(23>4 && 6>10);
console.log(3>=3 && 10>=19);
console.log(3!=10 && 3!=3)
console.log(10>=10 && 40>30);

/* // 6. Utiliza el operador lógico OR */
console.log("---------------");
console.log("---------------");
console.log("---------------");
console.log(24>=24 || 2<=12);
console.log(235>300 || 500>1000);

/* Combina ambos operadores lógicos */
/*  Añade alguna negación */
console.log("---------------");
console.log("---------------");
console.log("---------------");
console.log(23>=24 && 50>23 || 12>=39);
console.log(25>=56 || 506>=348 && 34>=40);
console.log(24!=50 || 59<=20 && 34<=44);

/* Utiliza el operador ternario */
const year=24;
const mensaje = year <= 24 ? "Tienes 24 años" : "No tengo ni pvta idea";
console.log(mensaje);
const nota = 5;
const calificacion = nota>= 8 ? "Eres promedio" : nota<=7 ? "Eres bobo":"nada";
console.log(calificacion);


