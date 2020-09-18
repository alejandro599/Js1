/*var a = Number(prompt("Ingrese el primer numero")) ;
var b = Number(prompt("Ingrese el segundo numero")) ;

var o = prompt("Ingrese operación");
*/
/*if (o == "sumar") {
    var sumar = a +b;
    alert("La suma es: " + sumar);

}else if (o == "restar") {
    var restar = a - b;
    alert("La resta es: " + restar);

}else if (o == "multiplicar") {
    var multiplicar = a * b;
    alert("La multiplicacion es es: " + multiplicar);

} else if (o == "dividir") {
    var dividir = a / b;
    alert("La division es: " + dividir);

}*/
/*
switch(o){
    case "sumar":
        var sumar = a +b;
    alert("La suma es: " + sumar);
 break;
    case "restar":
    var restar = a - b;
    alert("La resta es: " + restar);
break;
    case "multiplicar":
    var multiplicar = a * b;
    alert ("La multiplicacion es: " + multiplicar);
break;
    case "dividir":
    var dividir = a / b;
    alert ("La division es: " + dividir);
break;

default:
    alert("Operación incorrecta");
    break;

}*/

//WHILE
/*
var edad = Number(prompt("Ingrese la edad"));
while (edad < 18){
    edad = Number (prompt("Ingrese la edad"))
}
alert("Puedes pasar");
*/
/*
var edad;
do{
    edad = Number (prompt("Ingrese la edad"));
}
while(edad<18);
alert("Puedes pasar");
*/


// Si o es igual a "sumar"
/*var suma = a +b;
// Si o es igual a "restar"
var resta = a - b;
// Si o es igual a "multipliocar"
var multiplicación = a * b;
// Si o es igual a "division"
var division = a / b;*/
var cantidadTotal = 0;
var precioTotal = 0;
var opcion = 3;
var continuar = true;
do{
    var opcion = Number(prompt("1) Cargar venta / 2) Obtener reporte / 3) Salir"));
switch(opcion){
    case 1:
        var cantidadActual = Number(prompt("ingrese la cantida actual"));
        var precioActual = Number(prompt("Ingrese precio actual"));
        cantidadTotal = cantidadTotal + cantidadActual;
        precioTotal = precioTotal + precioActual;
        continuar = true;
        break;

    case 2: 
    alert("Precio Total: " + precioTotal);
    alert("Cantidad total: " + cantidadTotal);
    
    continuar = false;

    case 3:
    continuar = false;
    break;
    default: 
    alert("Opcion incorrecta");
    continuar = true;
    break;
}
}while(continuar);