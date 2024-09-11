/*
    *** EJERCICIOS ***
*/

/* 
    1. Crear un array con los días de la semana.
        1.1. Crear una función que convierta todos los elementos del array en minúsculas (toLowerCase)
        1.2. Crear una función que convierta todos los elementos del array en mayúsuculas (toUpperCase)
*/

const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

function convertirMayusculas(dias) {
    /* for (let i=0; i<dias.length; i++) {
        dias[i] = dias[i].toUpperCase();
    }
    return dias;    */
   const days = [];
   for (let dia of dias) {
    days.push(dia.toUpperCase());
   }
    return days; 
}
console.log(convertirMayusculas(dias));

function convertirMinusculas(dias) {
    for (let i=0; i<dias.length; i++) {
        dias[i] = dias[i].toLowerCase();
    }
    return dias;
}
console.log(convertirMinusculas(dias));



/*
    2. Crear un array con 10 números distintos, enteros.
        2.1. A partir del array, crear dos más: uno tendrá todos los elementos impares, el otro los pares.
        2.2. Crear una función que sume todos los números del array que sean divisibles por 3.
*/

const numeros = [1,2,3,4,5,6,7,8,9,10];
//const impares = [1,3,5,7,9];
//const pares = [2,4,6,8,10];

function suma(numeros) {
    var valorSuma = 0;
    for (let i=0; i<numeros.length; i++) {
        if (numeros[i] % 3 === 0 ) {
        valorSuma += numeros[i];
    }
}
return valorSuma;
};

function encontrarPares(numeros) {
    var pares = [];
    for (let i=0; i<numeros.length; i++) {
        if (numeros[i] % 2 === 0 ) {
            pares.push(numeros[i]);
    }
}
return pares;
}
var pares = encontrarPares(numeros);

function encontrarImpares(numeros) {
    var impares = [];
    for (let i=0; i<numeros.length; i++) {
        if (numeros[i] % 2 === 1 ) {
            impares.push(numeros[i]);
    }
}
return impares;
}
var impares = encontrarImpares(numeros);


/*
    3. Crear un array con cada elemento teniendo el par [alumno, nota]
        3.1. Ordenar el array según la nota (de mayor a menor)
        3.2. Devolver un array con los alumnos que aprueban (nota > 6). Sólo los alumnos, sin la nota.
*/

let alumnosNotas = [
    ["Juan", 8],
    ["Ana", 5],
    ["Carlos", 7],
    ["Lucía", 9],
    ["Miguel", 4],
    ["Sofía", 10],
    ["María", 6]
];

/* function compararNotas(a, b) {
    console.log('b-a: ', b[1], '-', a[1], '=', b[1]-a[1]);
    return b[1] - a[1];
} */

function ordenarPorNota(alumnosNotas) {
    // return alumnosNotas.sort(compararNotas);
    return alumnosNotas.sort((a, b) => a[1] - b[1]);
}


function obtenerAlumnosAprobados(alumnosNotas) {
    let alumnosAprobados = [];
    for (let i = 0; i < alumnosNotas.length; i++) {
        if (alumnosNotas[i][1] > 6) {
            alumnosAprobados.push(alumnosNotas[i][0]);
        }
    }
    return alumnosAprobados;
}

/*
    4. Crear dos arrays para representar dos equipos de trabajo, uno de ocupados y al otro de libres.
        4.1. Crear una función que tome el primer elemento de cada array y lo ponga en último lugar del otro array
            ocupados = [luis, daniel, maria]; libres = [mateo, lucia, julia];
            al ejecutar la función: ocupados = [daniel, maria, mateo]; libres = [lucia, julia, luis];
*/

let ocupados = ['luis', 'daniel', 'maria'];
let libres = ['mateo', 'lucia', 'julia'];

function intercambiarEquipos(ocupados, libres) {
    let primerOcupado = ocupados.shift();
    let primerLibre = libres.shift();
    ocupados.push(primerLibre);
    libres.push(primerOcupado);
}

/*
    5. Crear dos listas, una de compras (que tendrá a su vez parejas de valores [producto, estado]) y otra de pendientes
        5.1. Crear una función que tome cada producto de la lista NO está comprado (estado = false),
            y ponerlo en la lista de pendientes.
*/

let compras = [
    ["pan", true],
    ["leche", false],
    ["huevos", true],
    ["arroz", false],
    ["manzanas", false]
];

let pendientes = [];

function moverPendientes(compras, pendientes) {
    for (let i = 0; i < compras.length; i++) {
        if(!compras[i][1]) {
            pendientes.push(compras[i][0]);
        }
    }
}

/*
    6. Crear un objeto que almacene las notas de un alumno en tres cursos: html, css y javascript
        6.1. Crear una función que devuelva la nota promedio del alumno.
        6.2. Crear métodos del objeto que permita modificar las notas.
*/

const notas = {
        html: 8,
        css: 9,
        javascript: 10,
        promedio: function () {
            return (this.html + this.css + this.javascript) / 3;
        },
        cambioNotaHTML: function (nuevaNota) {
            this.html = nuevaNota;
        },
        cambioNotaCSS: function (nuevaNota) {
            this.css = nuevaNota;
        },
        cambioNotaJavascript: function (nuevaNota) {
            this.javascript = nuevaNota;
        }
}

/* function calcularPromedio() {
        const totalNotas = notas.html + notas.css + notas.javascript;
        const cantidadCursos = 3;
        return totalNotas / cantidadCursos;
};

function modificarNotaHTML(nuevaNota) {
    notas.html = nuevaNota;
};
function modificarNotaCSS(nuevaNota) {
    notas.css = nuevaNota;
};
function modificarNotaJS(nuevaNota) {
    notas.javascript = nuevaNota;
};*/



/*
    7. Definir un objeto que tenga dos propiedades: precio y descuento, y un método neto.
        El método calculará el precio con el descuento aplicado. Los valores se pedirán por teclado.
    
    > Recordar que tenemos la función prompt()
    > La función parseInt(text) convierte text a number
*/

let servicio = {
    precio: 0,
    descuento: 0,
    neto: function () {
        let precioConDescuento = this.precio - (this.precio * this.descuento / 100);
        return precioConDescuento;
    }
}

// servicio.precio = parseInt(prompt("Introduce el precio del producto:"));
// servicio.descuento = parseInt(prompt("Introduce el descuento (%):"));

/*
    8. Crear una función constructora para implementar una cuenta de efectivo.
        Poseerá dos propiedades: nombre del titular y saldo.
        Además debe tener dos métodos: ingresar() y retirar().
        El primero incrementa el saldo en la cantidad indicada en el argumento y el segundo lo reduce.
        No se puede retirar más de lo que exista en el saldo.
*/

function Cuenta (nombreTitular, saldoInicial) {
    this.nombre = nombreTitular;
    this.saldo = saldoInicial;
    this.ingresar = function(cantidad) {
        this.saldo += cantidad;
    console.log(`Has ingresado ${cantidad}: saldo actual ${this.saldo}.`);
    }
    this.retirar = function(cantidad) {
        if (cantidad > this.saldo) {
            cantidad -= this.saldo;
            console.log(`Puedes retirar solo hasta lo que tienes en tu saldo: ${this.saldo}`);
            this.saldo = 0;
            console.log(`No pudiste retirar: ${cantidad}`);
        } else if (cantidad > 0) {
            this.saldo -= cantidad;
            console.log(`Has retirado ${cantidad}: saldo actual: ${this.saldo}`);
        } else {
            console.log("La cantidad a retirar debe ser positiva.");
        }
        }
    }

const Erik = new Cuenta ("Erik", 1200);



/*
    9. Crear una función constructora llamada Bus.
    
        Sus atributos serán:
            capacidad: número máximo de pasajeros
            pasajeros: número de pasajeros (inicialmente 0)

        Sus métodos:
            subir(pasajeros): aumenta el número de pasajeros
            bajar(pasajeros): disminuye el número de pasajeros

        No pueden subir más pasajeros que los máximos admitidos y no pueden bajar más de los que hay.
        Si se quieren subir más pasajeros de lo permitido, sólo subirán los necesarios para llenar el bus.
        Por el contrario, sólo se podrán bajar máximo la cantidad de pasajeros que haya en el bus.
*/

function Bus(capacidad) {
    // Atributos del objeto
    this.capacidad = capacidad;  // Capacidad máxima de pasajeros
    this.pasajeros = 0;          // Número inicial de pasajeros, comienza en 0

    // Método para subir pasajeros
    this.subir = function(numPasajeros) {
        if (this.pasajeros + numPasajeros > this.capacidad) {
            // Si el número de pasajeros que se quiere subir excede la capacidad
            let pasajerosQuePuedenSubir = this.capacidad - this.pasajeros;
            this.pasajeros += pasajerosQuePuedenSubir;
            console.log(`El bus se ha llenado. Solo pudieron subir ${pasajerosQuePuedenSubir} pasajeros.`);
        } else {
            // Si no se excede la capacidad, todos los pasajeros suben
            this.pasajeros += numPasajeros;
            console.log(`${numPasajeros} pasajeros han subido al bus.`);
        }
        console.log(`Ahora hay ${this.pasajeros} pasajeros en el bus.`);
    };

    // Método para bajar pasajeros
    this.bajar = function(numPasajeros) {
        if (this.pasajeros - numPasajeros < 0) {
            // Si se quieren bajar más pasajeros de los que hay en el bus
            let pasajerosQuePuedenBajar = this.pasajeros;
            this.pasajeros = 0;
            console.log(`Solo ${pasajerosQuePuedenBajar} pasajeros pudieron bajar.`);
        } else {
            // Si hay suficientes pasajeros para bajar
            this.pasajeros -= numPasajeros;
            console.log(`${numPasajeros} pasajeros han bajado del bus.`);
        }
        console.log(`Ahora hay ${this.pasajeros} pasajeros en el bus.`);
    };
}

let miBus = new Bus(40);