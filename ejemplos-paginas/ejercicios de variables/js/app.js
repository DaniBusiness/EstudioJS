var depurar = null;

/*1. Crear una function llamada "suma()" qui emprima en consola en una alerta con la variable depurar.

  2. Crear dos variables por fuera de la function llamada "s1" y "s2" de tipo numero, y dentro de la function suma()
    vas a sumar los dos valores y la function tiene que retornar el valor de la suma de esas dos variables. */

var a = 4, b = 7;

function suma(s1,s2) {
    // alert(depurar);  
    var sum = s1 + s2;
    var valores = arguments;
    console.log(valores);
    return sum;
    // console.log(depurar);
};

// var valores = arguments;
// Arguments solo se puede utilizar dentro de las functiones. 

function suma2() {  
    var sum = 13;
    // console.log(arguments);
    for (let i=0;i < arguments.length; i++) {
        // console.log(arguments[i]);
        sum += arguments[i];
    }
    return sum;
};

/* La variable "sum" empieza a partir de 13, y el ciclo for le permite de sumar este valor a cada parametro de la 
function "suma2", y esos parametros de la function son igual a los elementos del arreglo "arguments". 
La variable sum va a guardar la suma parciales, y en ultimo for se termina de sumar todos los parametros del arreglo arguments. 
*/

function multiplicacion() {  
    var multiplication = 1;
    // console.log(arguments);
    for (let i=0;i < arguments.length; i++) {
        // console.log(arguments[i]);
        multiplication *= arguments[i];
    }
    return multiplication;
};

// la misma operacion pero con moltiplicacion.

function armarFrase() {  
    var texto = "";
    // console.log(arguments);
    for (let i=0;i < arguments.length; i++) {
        // console.log(arguments[i]);
        texto += arguments[i];
    }
    return texto;
};

// la misma operiocion per con texto.

function aggregacion(operacion, arreglo) {  
    var valorInicial;
    if (typeof(operacion) == "string") {
        valorInicial = "";
    }
    else {
        valorInicial = 0;
    }
    // console.log(arguments);
    for (let i=0;i < arreglo.length; i++) {
        // console.log(arguments[i]);
        valorInicial += arreglo[i];
        if (typeof(operacion)== "string") {
            valorInicial += " ";
        }
    }
    return valorInicial;
};

function suma3() {  
    var resultado = aggregacion(0, arguments);
    return resultado;
};

function armarFrase2() {  
    var resultado = aggregacion("Pippo", arguments);
    return resultado;
};

/* Con la function aggregacion() estamos dandole una condicion si es una palabra o un numero + darle un espacio. 
La function suma3 llama a la function agregacion y agragas parametros como si fueran numeros. 
La function armarFrase2() llama a la function agregacion y agragas parametros como si fueran strings. */

function aggregacion2(operacion2, arreglo2) {  
    var valorInicial;
    if (typeof(operacion2) == "string") {
        valorInicial = "";
    }
    else if (typeof(operacion2) == "number") {
        valorInicial = 0;
    }
    // console.log(arguments);
    for (let i=0;i < arreglo2.length; i++) {
        // console.log(arguments[i]);
        
        if (typeof(operacion2)== "string") {
            valorInicial +=  + " ";
        }
        else if (typeof(operacion2) == "number") {
            valorInicial += arreglo2[i];
        }
    }
    return valorInicial.trim(); // Eliminar el espacio extra al final en caso de cadenas  
    
};

function suma4() {  
    // Convertir arguments a un array para pasarlo a aggregacion2
    var argsArray = Array.prototype.slice.call(arguments);
    var resultado = aggregacion2(0, argsArray);
    return resultado;
};

function armarFrase3() {  
    // Convertir arguments a un array para pasarlo a aggregacion2
    var argsArray = Array.prototype.slice.call(arguments);
    var resultado = aggregacion2("Pippo", argsArray);
    return resultado;
};