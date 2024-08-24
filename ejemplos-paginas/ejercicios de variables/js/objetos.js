/*
    OBJETOS

    Los objetos son colecciones de pares clave: valor (similares a un diccionario).
    Cada clave es única para el objeto y es una cadena JavaScript,
    mientras que el valor es cualquier valor de JavaScript, lo que incluye a su vez más objetos.

    Si bien se puede crear un objeto mediante var obj = new Object(); se suele usar y recomendar más la sintaxis literal:

    var obj = {};

    Toda la información del objeto está dentro de los brackets {}. Siempre vendrán en pares clave: valor
    La clave es el nombre asignado, y puede empezar con una letra, _, $
    El valor es cualquier tipo de dato de JavaScript: number, string, boolean, array, object, etc.

*/

var obj = {

    //Propiedades
    nombre: "Zanahoria",
    detalles: {
        color: "naranja",
        size: 12,
    },
    precio: 2,
    origen: 'España'
};

function mostrar() {
    var _target = prompt("Indique qué propiedad del objeto quiere ver");
    console.log(_target); // lo que escribió la persona en teclado
    console.log(obj._target);
    console.log(obj[_target]);
}

// Para acceder a un atributo del objeto, se usa la instrucción: object.property

console.log(obj.nombre); // Zanahoria

// Al poder guardar nuevos objetos dentro de los objetos, el acceso a las propiedades es anidado:

console.log(`La propiedad color se obtiene mediante obj.detalles.color: ${obj.detalles.color}`); // orange

// También es posible acceder a ellos mediante: obj["property"]["subproperty"   ]

console.log(`La propiedad size se obtiene mediante obj['detalles']['color']: ${obj["detalles"]["color"]}`); // 12

// También es posible modificar el valor de una propiedad accediendo directamente a ella:

function cambiarNombre(objeto) {
    objeto['nombre'] = "uvas";
    var tamano = 5;
    var details = {color: 'rojo', size: tamano};
    objeto.detalles = details;
    return objeto;
}

// Es posible crear una variable o modificar su valor para el objeto

function crearPropiedad(objeto) {
    var prop = prompt('Ingrese el nombre de la propiedad');
    objeto[prop] = prompt(`Ingrese un valor para la propiedad ${prop}`);
    return objeto;
}

/*
    OBJETOS: Crearlos
*/

// Es posible también usar funciones para crear objetos:

/*
function makePerson(_first, _last) {

    // Esta función devuelve un objeto
    return {
        first: _first,
        last: _last,
    };
}

function personFullName(person) {
    return person.first + " " + person.last;
}

function personFullNameReversed(person) {
    return person.last + ", " + person.first;
}

var dan = makePerson("Daniel", "Berta");
console.log(`${personFullName(dan)}`); // "Daniel Berta"
console.log(`${personFullNameReversed(dan)}`); // "Berta, Daniel"
*/

// Si bien este mecanismo funciona, tenemos el problema de que se terminan creando distintas funciones separadas.
// Esto se resuelve enlazando las dos funciones entre sí.
// Consideraciones: la palabra reservada "this" hace referencia al objeto actual

/*
function makePerson(_first, _last) {
  return {
    // Propiedades
    first: _first,
    last: _last,

    // Métodos
    fullName: function () {
      return this.first + " " + this.last;
    },
    fullNameReversed: function () {
      return this.last + ", " + this.first;
    },
  };
}

var dan = makePerson("Daniel", "Berta");
dan.fullName(); // "Daniel Berta"
dan.fullNameReversed(); // "Berta, Daniel"
*/

// Más aúm, dado que "this" usa al objeto actual, es posible aprovechar su uso.
// El uso de mayúsucula inicial para nombrar a la función es convencional (similar al uso de clases en otros lenguajes)
// La palabra "new" es reservada y permite crear una INSTANCIA del objeto Person (es una palabra relacionada con "this")
// A la función Person, diseñada para llamarse con la palabra reservada "new", se le conoce como función constructura


/*function Person(_first, _last, _age) {
  this.first = _first;
  this.last = _last;
  this.age = _age;
  this.fullName = function () {
    return this.first + " " + this.last;
  };
  this.fullNameReversed = function () {
    return this.last + ", " + this.first;
  };
} */

// 


function personFullName() {
  return this.first + " " + this.last;
}
function personFullNameReversed() {
  return this.last + ", " + this.first;
}
function Person(_first, _last, _age) {
  this.first = _first;
  this.last = _last;
  this.age = _age;
  this.fullName = personFullName;
  this.fullNameReversed = personFullNameReversed;
}

var dan = new Person("Daniel", "Berta", 30);



var database = [
    {first: 'Daniel', last: 'Berta', age: 30},
    {first: 'Erik', last: 'Alvarez', age: 32},
    {first: 'Marco', last: 'Perez', age:25}
]; // Normalmente esto es un archivo .JSON - Depende de la API con la que trabajan y de cómo está construida la base de datos

var personas = [];

for (let i=0; i<database.length; i++) {
    personas[i] = new Person(database[i].first, database[i].last, database[i].age);
}