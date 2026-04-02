// PRO  TIP 1
// Si queremos retornar algo en un objeto y el nombre de la propiedad es el mismo que el nombre de la variable la cual quieres hacer impresion, solo basta con poner el nombre de la variable

/*
function crearPersona(nombre, apellido){
    return {nombre, apellido}
}
*/
const crearPersona = (nombre, apellido) => ({nombre, apellido});
console.log(crearPersona('Isaias', 'Coca'));

function imprimeArgumentos() {
    console.log(arguments);
}
imprimeArgumentos(10,true,1,'Isaias');

const imprimeArgumentos2 = () => {console.log(arguments);}
imprimirArgumentos2(10,true,1,'Isaias')






















