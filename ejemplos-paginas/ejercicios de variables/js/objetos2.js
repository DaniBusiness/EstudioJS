/*
    Recordar: todas estas formas de crear objetos son equivalentes:
*/

// forma 1
const p1 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// forma 2
const p2 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// forma 3

// crear un objeto vacío con la sintaxis literal
const p3 = {};

// añadir sus propiedades
p3.firstName = "John";
p3.lastName = "Doe";
p3.age = 50;
p3.eyeColor = "blue";

// forma 4

// crear un objeto mediante new Object()
const p4 = new Object();

// añadir sus propiedades
p4['firstName'] = "John";
p4.lastName = "Doe";
p4.age = 50;
p4.eyeColor = "blue";

/*
    La forma 4 no suele recomendarse, aunque su uso no tiene ningún problema.

    Las propiedades pueden ser valores primitivos, funciones, o inclusive otros objetos.

    También es posible acceder a las propiedades del objeto
        (las que se definen en el par clave: valor) de dos formas
*/

// forma 1: notación de punto .
var nombre = p1.firstName; // nombre = John

// forma 2: mediante corchetes cuadrados (similar a los arreglos) []
var apellido = p1["lastName"];

/*
    Así como existen las propiedades de los objetos, también es posible definir sus métodos.

    Los métodos son acciones (funciones) que pueden ser ejecutadas por los objetos.
    Es decir, los métodos son DEFINICIONES de funciones ALMACENADAS en propiedades
        (pues podemos entender las propiedades mediante pares clave: valor)
*/

const p5 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
        // recordar que this hace referencia al objeto "persona"
        // _this.firstName_ hace referencia a la propiedad firstName del objeto person
    return this.firstName + " " + this.lastName;
    }
};

/*
    De hecho, considerando la importancia que tienen los objetos, la definición de "tipo de dato primitivo",
    o variables primitivas, se toma como:

        _Un dato primitivo es aquel que NO TIENE propiedades ni métodos.
    
    Esta definición aplica a los tipos de dato que vimos previamente:
        
        number
        string
        boolean
        null
        undefined

    además de los tipos de datos symbol y bigint

    *** IMPORTANTE ***
    
    A diferencia de los datos primitivos, que son inmutables (3 es 3 siempre), los objetos son mutables.
    Esto se puede entender mediante la asignación de copias de un objeto:

    var x = 1;
    var y = x;
    x = 2;
    y // 1

    Si hacemos algo parecido con los objetos, el valor del objeto original también se verá modificado:
*/

var p6 = p1 // Ahora p5 y p1 son la misma persona. Probar cambiar el nombre de p6 en consola, y ver qué sucede con p1

var b1 = p1 == p2 // false
var b2 = p1 == p6 // true
var b3 = p2 == p5 // false (y lo mismo para cualquiera que no sea p1 == p6)

/*

    *** PROPIEDADES DE LOS OBJETOS ***

*/

/*
    Podemos pensar en los objetos como una colección sin ordenar de propiedades.

    Las propiedades pueden crearse, modificarse, eliminarse, o inclusive sólo ser leídas.

    Recordar que hay tres formas de acceder a las propiedades de un objeto "person" que tiene la propiedad "age"

    1. - person.age;
    2. - person["age"];
    3. - var x = "age"; person[x];

    Para agregar una propiedad, basta con declararla e inicializarla como si ya existiese:

    1. - person.mobile = '1123456789'; // tipo string
    2. - person["mobile"] = '1123456789';
    3. - var x = "mobile"; var num = '1123456789'; person[x] = num;
    
    Para eliminar una propiedad, existe la palabra reservada delete:

    1. - delete person.mobile;
    2. - delete person["mobile"];
    3. - var x = "mobile"; delete person[x];
*/

const persona = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    age: 30
};


/*

    *** MÉTODOS DE LOS OBJETOS ***

*/

/*
    Recordar: los métodos son acciones que pueden ejecutar los objetos.

    para el ejemplo, podemos agregar el método giveName()

    const persona = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    age: 30,
    giveName: function() {
        return this.firstName + " " + this.lastName;
        }
    };

    Recordar: this hace referencia al objeto persona.
    firstName y lastName son propiedades del objeto persona.
*/

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    age: 30,
    giveName: function() {
        return this.firstName + " " + this.lastName;
    }
};

/*
    Para acceder al método de un objeto, se sigue la sintaxis:
    
    => objectName.methodName()

    var name = person.giveName();

    Si se sigue la sintaxis sin (), lo que se obtiene es la definición de la función

    name = person.giveName;

    Por otro lado, para agregar un método a un objeto, se procede de forma similar a como
        se agrega una propiedad, cuidando la sintaxis del método:

        person.giveAge = function() {
            return this.fistName + " has " + this.age + " years old.";
        }
*/

/*
    *** MÉTODOS NATIVOS DE LOS OBJETOS ***
*/

/*
    Por defecto, en JavaScript se pueden usar algunos métodos con los objetos que se crean:

    1. - assign()
    2. - create()
    3. - keys() // para mostrar los nombres de las propiedades en un arreglo
    4. - toString()
    5. - valueOf()
    6. - values() // para mostrar los valores de las propiedades en un arreglo
    7. - entries() // para mostrar los pares [clave, valor] en un arreglo
*/

/*

    *** MOSTRAR OBJETOS EN DOCUMENT ***

*/

/*

    A diferencia de lo que sucede con los tipos de datos primitivos, la siguiente línea:

    document.getElementById("demo").innerHTML = person;

    no muestra el objeto _person_. En su lugar, muestra [object Object]

*/

function display() {
    document.getElementById("demo").innerHTML = 'persona: ' + persona;
}

/*
    Ante este problema, existen varios mecanismos para poder mostrar lo que se desea en el DOM:

    1. - Mostrar las propiedades por nombre
    2. - Mostrar las propiedades en un loop
    3. - Usar Object.values()
    4. - Usar JSON.stringify()

    1. - Para mostrar las propiedades por nombre, se puede seguir la sintaxis:
        document.getElementById("demo").innerHTML = person.lastName + ", " + person.firstName + ", " + person.age;

    2. - En el caso del loop, se usa for:

        let text = "";
        for (let x in person) {
            text += person[x] + " ";
        };
        document.getElementById("demo").innerHTML = text;

        Es OBLIGATORIO el uso de la notación person[x] (person.x no funciona)
    
    3. - Object.values() crea un arreglo con todas las propiedades del objeto:

        const myArray = Object.values(person);
        document.getElementById("demo").innerHTML = myArray;

        Además, Object.entries() permite un uso más versátil y cómodo:

        const fruits = {Bananas:300, Oranges:200, Apples:500};

        let text = "";
        for (let [fruit, value] of Object.entries(fruits)) {
            text += fruit + ": " + value + "<br>";
        }
    
    4. - JSON.stringify() está incluído en JavaScript. Permite convertir objetos en string.
        Se devuelve un string con la notación JSON, idéntica a la de los objetos:

        let text = JSON.stringify(persona);
        console.log(text); // output: {"firstName": "John", "lastName" : "Doe", "id": 5566, "age": 30}
*/

function d1() {
    document.getElementById("demo").innerHTML = persona.lastName + ", " + persona.firstName + ", " + persona.age;
}

/*
    for (let i=0 ; i < Object.keys(person).length ; i++) {// Código}
    for (let x in persona) {} // Se usa en objetos
    for (let x of Object.keys(person)) {} // Se usa en arreglos
*/

function d2() {
    let text = "";

    // Usando el ciclo for convencional
    /* for (let i=0; i<Object.keys(persona).length; i++) {
        text += Object.values(persona)[i] + " " 
        }
    */

    for (let x in persona) {
        text += persona[x] + " ";
    };
    document.getElementById("demo").innerHTML = text;
}

function d3_values() {
    const myArray = Object.values(persona);
    // console.log(myArray);
    document.getElementById("demo").innerHTML = myArray;
}

function d3_entries() {
    let text = "";
    
    // p es un arreglo de pares clave: valor
    /* 
    for (let p of Object.entries(persona)) {
        text += p + "<br>";
    }
    */

    for (let [propiedad, valor] of Object.entries(persona)) {
        console.log('propiedad: ' + propiedad);
        console.log('valor: ' + valor);
        text += propiedad + ": " + valor + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
}

function d4() {
    let text = JSON.stringify(persona);
    document.getElementById("demo").innerHTML = text;
}

/*

    *** FUNCIONES CONSTRUCTORAS ***

*/

/*
    Algunas veces puede ocurrir que se deba crear varios objetos del mismo tipo.
        En ese caso, es conveniente tener un objeto tipo. Es posible crear un objeto tipo
        usando una función constructora (del objeto).
        Por convención y sugerencia, se nombra a las funciones constructoras con mayúscula inicial
*/

function Auto(_brand, _model, _weigth, _year) {
    this.brand = _brand;
    this.model = _model;
    this.weigth = _weigth;
    this.year = _year;

    // Método de la función constructora
    this.start = function () {
        return this.model + ' está encendido y listo para conducir.'
    }
}

const sedan = new Auto('Mercedes Benz', 'Sedan Class A', '850 kg', 2019);

/*
    // Las funciones constructoras son idénticas a las clases en otros lenguajes de programación:
    // este código es JavaScript

    class Auto {
    constructor(brand, model, weigth, year) {
        this.brand = brand;
        this.model = model;
        this.weigth = weigth;
        this.year = year;

        this.start = function () {
        return this.model + ' está encendido y listo para conducir.'
        }
    }
    }

    También es posible definir propiedades por defecto:
    this.type = 'electric';
*/

/*
    De un modo más estricto, this no tiene valor.
    Su valor será0 el del objeto que se cree.

    Ahora es posible crear nuevos objetos con la expresión new Auto()
*/

const amarok = new Auto('Volkswagen', 'Amarok', '1150 kg', 2022);
const ds3 = new Auto('Citröen', 'DS3', '750 kg', 2014);
const sprinter = new Auto('Mercedes Benz', 'eSprinter', '3500 kg', 2024);


// Agregar propiedades o métodos a una clase-función constructora
Auto.prototype.type = 'electric';
Auto.prototype.drive = function () {
    return this.model + ' está avanzando.';
}
Auto.prototype.changeType = function (_type) {
    this.type = _type;
};

// Agregar propiedades o métodos a un objeto creado
amarok.propietario = 'Daniele';
amarok.detener = function() {
    console.log(this.model + " del año " + this.year + " se ha detenido");
    return this.model + " se ha detenido";
}



/*
    NOTA: si se agregan nuevas propiedades o métodos a estos objetos ya creados,
        sólo aplicarán al objeto creado, y no a todos los objetos del mismo tipo.

    Para agregar una propiedad a una función constructora, no vale la línea:

    => Auto.type = 'electric';

    En su lugar, se debe escribir:

    => Auto.prototype.type = 'electric';

    De la misma manera se agregan métodos:

    => Auto.prototype.drive = function () {
        return this.model + ' está avanzando.';
    }

    Agregar métodos a objetos ya creados sigue la convención establecida (l. 194)

    // Ejercicio: crear un método que cambie el tipo de auto de 'electric' a 'fuel'

                Auto.prototype.changeType = function (type) {
                    this.type = type;
                }
                ds3.changeType('fuel');
*/

/*
    *** Funciones constructoras nativas en JavaScript ***
*/

/*
    En JavaScript, todos los objetos nativos tienen su respectiva función constructora:

    new Object()   // A new Object object
    new Array()    // A new Array object
    new Date()     // A new Date object
    new Function() // A new Function object

    Aún existiendo estas funciones constructoras, se recomienda:

    > El uso de objetos literales {} en lugar de new Object()
    > El uso de arreglos literales [] en lugar de new Array()
    > El uso de expresiones de funciones (){} en lugar de new Function()
*/