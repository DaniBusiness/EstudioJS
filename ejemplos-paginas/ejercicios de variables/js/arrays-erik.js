// Hacer un código que tome los elementos de un array de números, y me devuelva el más chico y el más grande de esos números

// Array de ejemplo. Servirá para poder probar lo que se hizo
var num = [2,5,7,14,15,-9,21];

function elMenor(numeros) {
    var menor = numeros[0];

    for (let i=1; i<numeros.length-1; i++) {
        if (numeros[i]<numeros[i+1]) {
            if (numeros[i]<menor) {
                menor = numeros[i];
            }
        } else {
            if (numeros[i+1]<menor) {
                menor = numeros[i+1];
            }
        }
    }

    return menor;
}

function elMayor(numeros) {
    var mayor = numeros[0];

    for (let i=1; i<numeros.length-1; i++) {
        if (numeros[i]>numeros[i+1]) {
            if (numeros[i]>mayor) {
                mayor = numeros[i];
            }
        } else {
            if (numeros[i+1]>mayor) {
                mayor = numeros[i+1];
            }
        }
    }

    return mayor;
}

// var num = [2,5,7,14];

function invertir(numeros) {
    var arreglo = [];
    for (let j=0; j<=numeros.length; j++) {
        arreglo.unshift(numeros[j]);
    }
    return arreglo;
}

// num = [2,5,7,14,15,-9,21];
// ordenado = [];
// ordenado = [-9,2,5,7]

// Tomar el arreglo y vemos cuál es el elemento menor.
// Quitar el elemento menor del arreglo "num"
// Ponemos ese elemento en el arreglo "ordenado"

function ordenar(numeros) {
    var ordenado = [];
    while (numeros.length>0) {
        var mayor = elMayor(numeros);
        var pos = numeros.indexOf(mayor);
        ordenado.push(numeros.splice(pos,1)[0]);
    }
    return ordenado;
}