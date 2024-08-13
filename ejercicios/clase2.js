/*

================================================================

    EJERCICIOS HECHOS

================================================================

*/

let a = 1; // global variable

function f() {
    var a = 4; // mask
    console.log("Valor temporal de a: " + a); //log es un método del object console

    // Es una variable LOCAL. Sólo existe en la función f y cuando se termina de ejecutar, se "elimina".
    // Si no se usa var, let o const, entonces x es una variable GLOBAL. Esto es una mala práctica, no se debe hacer.
    let x = 100;
    console.log("Valor de x = " + x);

    if (x > 99) {
        let y = 99; // Es local en el IF, la variable "y" no existe en el resto de la función, sólo dentro de los brackets {} de la instrucción IF
        var z = 101;// Es local en toda la función, no solamente en el IF
        console.log(y, x);
    }
    console.log(z);
    // console.log(y); Esto arroja un error, pues y no existe fuera del IF
}

// TIPOS DE VARIABLES

var b = 4; //number
var nombre = 'Daniel'; //string
var v = true; //boolean
var persona1 = {
    // Propiedades del objeto persona1
    nombre: 'Daniel',
    apellido: 'Berta',
    edad: 30,
    pais: 'Italia',

    // Método del objeto persona1
    cambiarNombre: function (name) {
        this.nombre = name;
        console.log("Cambio de nombre hecho");
    }
}; //Object

// Los arreglos (arrays) son casos particulares de Object, que se escriben con [] y que no necesitan nombres para sus propiedades. Un array puede contener elementos de cualquier tipo.

// Los objetos tienen propiedades y métodos. Una propiedad es algo que tiene un valor definido -una variable dentro del objeto.

// Un método es una función dentro del objeto, y se reconoce porque tiene () y la palabra clave function

// Las funciones también son ejemplos de Object. Las funciones pueden recibir parámetros (escritos dentro del paréntesis)

var lista = [1, 2, 4]; // Array. Recordar que los índices empiezan en 0
var lista2 = ["Erik", "Daniel", "Mateo", "Julia"];
var lista3 = [1, 'Mateo', persona1, lista]; // Este array tiene un número, un string, un objeto y un array

var objeto = {
    propiedad1: "valor 1",
    propiedad2: 25,
    listado: lista,
    persona: persona1
} // Este objeto tiene una propiedad de tipo string, otra de tipo número, otra de tipo array y otra de tipo objeto. Recordar que array es un objeto

var v1 = 1, v2 = 2, v3 = objeto, v4, v5 // Declarar varias variables en simultáneo. Se pueden inicializar las que se quiera.

function operaciones() {
    // Dos tipos de operadores: unary, binary
    // Ejemplos de binary +, -, *, /, %, &&, etc.
    // Ejemplos de unary: +, -, typeof, ++, --

    let x = 13, y = 5;
    console.log('Sean x = ' + x + ' e y = ' + y);

    let suma = x + y;
    console.log("Suma: x+y: ", suma);

    let resta = x - y;
    console.log("Suma: x-y: ", resta);

    let producto = x * y;
    console.log("Suma: x*y: ", producto);

    let division = x / y;
    console.log("Suma: x/y: ", division);

    let modulo = x % y; // El resto de la división - Module mod
    console.log("Suma: x%y: ", modulo);

    // Explicación del módulo. El resultado es lo que "sobra"
    // 1/2 = 0 y sobra 1 => Es decir, 2 = 2*0 + 1
    // 10/2 = 5 y sobra 0 => Es decir, 10 = 5*2 + 0
    // 13/2 = 6 y sobra 1 => Es decir, 13 = 6*2 + 1
    // 13/5 = 2 y sobra 3 => Es decir, 13 = 5*2 + 3
    // El módulo cuando divido entre n siempre está en 0 y (n-1): 4

    return null;

}

var x2 = "1";

/* Probar en consola
    x+2 => convierte al 2 en texto, y lo agrega. Resultado: "12"
    +x+2 => Conviernte "1" en número y le suma 2. Resultado: 3
*/

/*

================================================================

    STRINGS

================================================================

*/

let myString1 = "This is a string with a single quote: 'inside the single quotes.'";
let myString2 = 'This is a string with a double quote: "inside the double quotes."';
let myString3 = "This is a string with a double quote: \"escaped double quote.\"";
let myString4 = 'This is a string with a single quote: \'escaped single quote.\'';

let textoBT = `línea 1 de la cadena de caracteres. Variable "objeto.persona.nombre" = ${objeto.persona.nombre}
  línea 2 de la cadena de caracteres`;


function agregarTexto() {
    let header = "Template Strings";
    let tags = ["template strings", "javascript", "es6"];

    // Este fragmento de código inserta contenido HTML en un objeto llammado "html".
    // Elemento h2 y apertura de <ul>
    let html = `<h2>${header}</h2><ul>`;

    // Se agregan los items de lista <li></li>
    for (const x of tags) {
        html += `<li>${x}</li>`;
    }

    // Se agrega el cierre de la etiqueta </ul>
    html += `</ul>`;

    // Se inserta todo el código guardado en html (que es de texto solamente) en el elemento del documento con id = "demo"
    document.getElementById("demo").innerHTML = html;
};