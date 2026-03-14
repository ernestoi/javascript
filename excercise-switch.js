// calculadora
let num1 = 1;
let num2 = 2;
let operacion = 4;
switch (operacion) {
    case 1:
        suma = num1+num2;
        console.log(suma)
        break
    case 2:
        resta =  num1-num2;
        console.log(resta)
        break
    case 3:
        multiplicacion = num1*num2;
        console.log(multiplicacion)
        break
    case 4:
        division = num1/num2;
        console.log(division)
        break
    default:
        console.log("Es un error de digitación..!!")
}

// MENU DE RESTAURANTE
let opcion = 5;
switch (opcion) {
    case 1:
        console.log("Pizza");
        break
    case 2:
        console.log("Hamburguesa");
        break
    case 3:
        console.log("Ensalada");
        break
    case 4:
        console.log("Pasta");
        break
    default:
        console.log("Opnción incorrecta..!!!")
}
