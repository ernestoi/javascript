

/*
const regresTrue = () => {
    console.log('Regresa True');
    return true;
}
const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}


function validar(usuario, password) {
    if (usuario && password) {
        return "Acceso permitido";
    } else {
        return "Acceso denegado";
    }
}
console.log(validar('Isaias',12345));

const cliente = {
    nombre: 'Isaias',
    premium: false
};

/*
let result = 0
const desc = (cliente_datos) => {
    result = cliente_datos.premium === true ? "Tiene un descuento del 20%" : "No tiene descuento";
}
desc(cliente);
*/
/*

function desc (cliente_datos) {
    if (cliente_datos.premium ) {
        return 'Tiene un descuento del 20%'
    } else {
        return 'No tienes descuento'
    }
}
console.log(desc(cliente));

const producto = {nombre:'Laptop', precio: 1000};

const productos = (producto) => {
    return {...producto, precio: producto.precio + 100};
}
console.log(productos(producto))


const edad_ = (edad) => {
    return edad >= 18 ? "Mayor de edad" : "Menor de edad";
}
let edad = 20
console.log(edad_(edad));

/*
const usuarios = [
    { nombre: 'Isaias', activo: true },// 0
    { nombre: 'Juan', activo: false },// 1
    { nombre: 'Maria', activo: true }// 2
];
const imprimir = (usuarios_datos) => {
    if (usuarios_datos[0].activo) {
        console.log(usuarios_datos[0].nombre)
    }
    if (usuarios_datos[1].activo) {
        console.log(usuarios_datos[1].nombre)
    } else {
        console.log(usuarios_datos[1].nombre + " No esta activo")    
    }
    if (usuarios_datos[2].activo){
        console.log(usuarios_datos[2].nombre)
    }
}
imprimir(usuarios);
*/



/*
const usuarios2 = [
    { nombre: 'Isaias', activo: true, saldo: 100 },
    { nombre: 'Juan', activo: false, saldo: 0 },
    { nombre: 'Maria', activo: true, saldo: 50 }
];

const comprobar = (usuarios_datos) => {
    if (usuarios_datos[0].activo && usuarios_datos[0].saldo > 0) {
        console.log(usuarios2[0].nombre + " tiene saldo disponible");
    }
    if (usuarios_datos[1].activo && usuarios_datos[1].saldo > 0) {
        console.log(usuarios_datos[1].nombre + " tiene saldo disponible");
    } else {
                console.log(usuarios_datos[1].nombre + ": No tiene saldo disponible..");
    }
    if (usuarios_datos[2].activo && usuarios_datos[2].saldo >0) {
        console.log(usuarios_datos[2].nombre + " tiene saldo disponible");
    } else {
        console.log("No tiene saldo suficiente");
    }
}
comprobar(usuarios2);
*/






/*
const usuarios3 = [
    { nombre: 'Isaias', edad: 22 },
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Maria', edad: 25 }
];

function devolver(usuarios3) {
    return [{nombre: usuarios3[0].nombre},{nombre: usuarios3[1].nombre},{nombre: usuarios3[2].nombre}];
}
console.log(devolver(usuarios3));


function devolver(usuarios3) {
    return [{nombre: usuarios3[0].nombre},{nombre: usuarios3[1].nombre},{nombre: usuarios3[2].nombre}];
}
console.log(devolver(usuarios3));
*/

/*
const usuarios = [
    { nombre: 'Isaias', edad: 22 },
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Maria', edad: 16 }
];

const modificar = (usuarios) => {
    return [
        {
            nombre: usuarios[0].nombre,
            mayor: usuarios[0].edad >= 18
        },
        {
            nombre: usuarios[1].nombre,
            mayor: usuarios[1].edad >= 18
        },
        {
            nombre: usuarios[2].nombre,
            mayor: usuarios[2].edad>=18
        }
    ]
}
console.log(modificar(usuarios));
*/



/*
const usuarios = [
    { nombre: 'Isaias', edad: 22, activo: true, saldo: 100 },
    { nombre: 'Juan', edad: 17, activo: true, saldo: 0 },
    { nombre: 'Maria', edad: 25, activo: false, saldo: 50 }
];

const editarDatos =  (datosUsuario) => {

    return [
            {
                nombre: datosUsuario[0].nombre,
                puedeAcceder: datosUsuario[0].edad >= 18 && datosUsuario[0].activo === true && datosUsuario[0].saldo > 0
            },
            {
                nombre: datosUsuario[1].nombre,
                puedeAcceder: datosUsuario[1].edad >= 18 && datosUsuario[1].activo === true && datosUsuario[1].saldo > 0
            },
            {
                nombre: datosUsuario[2].nombre,
                puedeAcceder: datosUsuario[2].edad >= 18 && datosUsuario[2].activo === true && datosUsuario[2].saldo > 0
            }
        ];
        
    }

console.log(editarDatos(usuarios));
*/


const usuarios = [
    { nombre: 'Isaias', activo: true, saldo: 10, rol: 'admin' },
    { nombre: 'Juan', activo: true, saldo: 10, rol: 'admin' },
    { nombre: 'Maria', activo: false, saldo: 50, rol: 'admin' }
];

/*
[
  { nombre: "Isaias", acceso: "total" },
  { nombre: "Juan", acceso: "limitado" },
  { nombre: "Maria", acceso: "denegado" }
]
  */

function rol (usuarios) {
    let newArray = [];
    // user 1
    if (usuarios[0].activo === false) {
        let user1 = {nombre: usuarios[0].nombre, acceso: "Denegado"}
        newArray.push(user1);
        
    } else if (usuarios[0].activo && usuarios[0].rol === "admin" && usuarios[0].saldo > 0) {
        user1 = {nombre: usuarios[0].nombre, acceso: "total"}
        newArray.push(user1);

    } else if (usuarios[0].activo === true && usuarios[0].saldo > 0 ) {
        user1 = {nombre: usuarios[0].nombre, acceso: "Limitado"}
        newArray.push(user1);
    }
    // user 2
    if (usuarios[1].activo === false) {
        let user2 = {nombre: usuarios[1].nombre, acceso: "Denegado"}
        newArray.push(user2);
        
    } else if (usuarios[1].activo && usuarios[1].rol === "admin" && usuarios[1].saldo > 0) {
        user2 = {nombre: usuarios[1].nombre, acceso: "total"}
        newArray.push(user2);

    } else if (usuarios[1].activo === true && usuarios[1].saldo > 0 ) {
        user2 = {nombre: usuarios[1].nombre, acceso: "Limitado"}
        newArray.push(user2);
    }
    // user 3
    if (usuarios[2].activo === false) {
        let user3 = {nombre: usuarios[2].nombre, acceso: "Denegado"}
        newArray.push(user3);
        
    } else if (usuarios[2].activo && usuarios[2].rol === "admin" && usuarios[2].saldo > 0) {
        user3 = {nombre: usuarios[2].nombre, acceso: "total"}
        newArray.push(user3);

    } else if (usuarios[0].activo === true && usuarios[0].saldo > 0 ) {
        user3 = {nombre: usuarios[2].nombre, acceso: "Limitado"}
        newArray.push(user3);
    }
    return newArray
}
console.log(rol(usuarios));





































































