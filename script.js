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
const año=2025;
const momento = año<=2025 ? "Fueron los mejores momentos" : "El presente esta por venir";
console.log(momento)

/* 
++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++
*/
/* STRINGS */
let myName = "Brian";
let geeting = "Hola, " + myName + "!";
console.log(typeof geeting);
console.log(geeting);

// LONGITUD DE CADENA DE TEXTO
console.log(geeting.length);

// ACCESO A CARACTERES empieza desde 0
console.log(geeting[0]);
console.log(geeting[2]);

// MÉTODOS COMÚNES
console.log(geeting.toUpperCase());//.toUpperCase() VUELVE EL TEXTO A MAYUSCULAS
console.log(geeting.toLowerCase()); //.toLowerCase() vuelve el texto a minusculas
console.log(geeting.indexOf("Brian")); // .indexOf("Brian") vuelve el numero donde empieza la palabra Brais. B es la primera letra rsp: 6
console.log(geeting.indexOf("mango")); // mango, empieza con m, pero esa palabra no existe, rsp: -1
console.log(geeting.includes("Hola")); // .includes("") nos avisa si en la variable existe el texto dentro, TRUE OR FALSE
console.log(geeting.includes("Brian"));
console.log(geeting.includes("brais"));
console.log(geeting.slice(0, 10)); // .slice(inicial_numero, final_numero) recorta el texto desde el valor inicial 0 hasta el valor final 10 que es 9, es decir: 10-1=9
console.log(geeting.replace("Brian", "pipipipi")) // .replace("texto a buscar", "texto a reemplazar"); el primer valor busca y el 2do valor reemplaza el primero.

//template literals (plantillas literales)

let message = `Hola este e smi 
salto de línea`;
let email = `isaiascoca123@gmail.com`;
console.log(message)
console.log(`Hola, ${myName}! tu email es: ${email}`) // comillas invertidas, permite incluir variables y texto.

/* 
++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++
*/
// CONDICIONALES
// if, else if, else
// se utiliza para ejecutar un bloque de código si la condición es verdadera.

let age = 37;
if(age == 37) {
    console.log("La edad es 37");
}// else -> Si no es verdadero se ejecuta este código
else{
    console.log("La edad no es 37");
}

// else if -> Utiliza para hacer condiciones intermedias
// Verificar si es mayor de edad
if (age == 37) {
    //console.log("Tienes 37 años, eres apto");
} else if (age >= 18) {
    console.log("Eres mayor de edad, eres apto");
} else{
    console.log("Eres menor de edad");
}

// --------------------------------------
// CONDICIONAL SWITCH
// --------------------------------------
let day = 5;
let datName
switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sábado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Número de día incorrecto"; // es como tener un else en caso de que no se cumpla ninguno de arriba.
}
console.log(dayName)
/* 
++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++
*/
// ESTRUCTURAS DE DATOS
// -> Nos permite almacenar varios datos (conjunto de datos) en una variable
// ARRAY = listas
let myArray = [3];
let myArray2 = new Array(3);
console.log(myArray)
console.log(myArray2)
// INICIALIZACION
let myArray3 = [1,2,3,4,5];
let myArray4 =  new Array(3);
console.log(myArray3);
console.log(myArray4);
// EJEMPLO
let myArray5 = ["Isaias", "Coca", 21, "Hombre"];
let myArray6 = new Array("Isaias", "Coca", 21, "Hombre")
console.log(myArray5);
console.log(myArray6);

// ejemplo
myArray7 = [];
myArray7[0] = "Frío";
//myArray7[1] = "Caliente";
myArray7[2] = "Tibio";
console.log(myArray7);


// METODOS COMUNES APLICADOS.
myArray9=[];
//push -> Nos permiten insertar datos al final de un array "vacío".
myArray9.push("Isaas");
myArray9.push("Fernando");
myArray9.push("Monica");
console.log(myArray9);
// pop -> Elimina el último elemento de un array.
myArray9.pop()
console.log(myArray9);
// shift -> Eliminar el primer elmento
console.log(myArray9.shift());
console.log(myArray9);
// unshift -> Inserta elementos al principio del array
myArray9.unshift("Eliminado1","Eliminado2");
console.log(myArray9);
// length -> cuenta cuántos elementos tiene el array y nos dice
console.log(myArray9.length)
// clear -> limpiar el array
myArray9 = []
console.log(myArray9)





