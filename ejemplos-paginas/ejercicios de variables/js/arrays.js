// Hacer un código que tome los elementos de un array de números, y me devuelva el más chico y el más grande de esos números

var numeros = [2,6,14,9]

function myChico() {
    // console.log("dados");
    var numeroChico = numeros[0];
    console.log(typeof(numeroChico));
    for(let j=1; j<numeros.length; j++) {
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

function myGrande() {
    // console.log("dados");
    var numeroGrande = numeros[0];
    console.log(typeof(numeroGrande));
    for(let j=1; j<numeros.length; j++) {
        console.log(numeros[j+1]);
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
