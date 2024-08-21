// Hacer un código que tome los elementos de un array de números, y me devuelva el más chico y el más grande de esos números

var numeros = [8,6,23,9]

function myChico(numeros) {
    // console.log("dados");
    var numeroChico = numeros[0];
    console.log(typeof(numeroChico));
    for(let j=1; j<numeros.length-1; j++) {
        console.log(numeros[j+1]);
        if (numeros[j]<numeros[j+1]) {
            if (numeros[j]<numeroChico) {
                numeroChico=numeros[j];
            }
        } else {
            if (numeros[j+1]<numeroChico) {
            numeroChico=numeros[j+1];
            }  
        }         
    }
    return numeroChico;
}

function myGrande(numeros) {
    // console.log("dados");
    var numeroGrande = numeros[0];
    // console.log(typeof(numeroGrande));
    for(let j=1; j<numeros.length-1; j++) {
        // console.log(numeros[j+1]);
        if (numeros[j]>numeros[j+1]) {
            if (numeros[j]>numeroGrande) {
                numeroChico=numeros[j];
            }
        } else {
            if (numeros[j+1]>numeroGrande) {
            numeroGrande=numeros[j+1];
            }  
        }         
    }
    return numeroGrande;
}

var a = [4,7,9,6]; 
function invertir(a) {
    var b = [];
        for(let j=0; j<a.length; j++)  {
            b.unshift(a[j]);
        } 
    return b;
}

var d = [5,8,4,7,13,11];
function ordenar(d) {
    var ordenado = [];
    while (d.length>0) {
        var menor = myChico(d);
        var posicion = d.indexOf(menor);
        ordenado.push(d.splice(posicion,1)[0]);
    }
    return ordenado;
}
