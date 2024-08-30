/*
    *** EJERCICIOS ***
*/

/* 
    1. Crear un array con los días de la semana.
        1.1. Crear una función que convierta todos los elementos del array en minúsculas (toLowerCase)
        1.2. Crear una función que convierta todos los elementos del array en mayúsuculas (toUpperCase)
*/

/*
    2. Crear un array con 10 números distintos, enteros.
        2.1. A partir del array, crear dos más: uno tendrá todos los elementos impares, el otro los pares.
        2.2. Crear una función que sume todos los números del array que sean divisibles por 3.
*/

/*
    3. Crear un array con cada elemento teniendo el par [alumno, nota]
        3.1. Ordenar el array según la nota (de mayor a menor)
        3.2. Devolver un array con los alumnos que aprueban (nota > 6). Sólo los alumnos, sin la nota.
*/

/*
    4. Crear dos arrays para representar dos equipos de trabajo, uno de ocupados y al otro de libres.
        4.1. Crear una función que tome el primer elemento de cada array y lo ponga en último lugar del otro array
            ocupados = [luis, daniel, maria]; libres = [mateo, lucia, julia];
            al ejecutar la función: ocupados = [daniel, maria, mateo]; libres = [lucia, julia, luis];
*/

/*
    5. Crear dos listas, una de compras (que tendrá a su vez parejas de valores [producto, estado]) y otra de pendientes
        5.1. Crear una función que tome cada producto de la lista NO está comprado (estado = false),
            y ponerlo en la lista de pendientes.
*/

/*
    6. Crear un objeto que almacene las notas de un alumno en tres cursos: html, css y javascript
        6.1. Crear una función que devuelva la nota promedio del alumno.
        6.2. Crear métodos del objeto que permita modificar las notas.
*/

/*
    7. Definir un objeto que tenga dos propiedades: precio y descuento, y un método neto.
        El método calculará el precio con el descuento aplicado. Los valores se pedirán por teclado.
    
    > Recordar que tenemos la función prompt()
    > La función parseInt(text) convierte text a number
*/

/*
    8. Crear una función constructora para implementar una cuenta de efectivo.
        Poseerá dos propiedades: nombre del titular y saldo.
        Además debe tener dos métodos: ingresar() y retirar().
        El primero incrementa el saldo en la cantidad indicada en el argumento y el segundo lo reduce.
        No se puede retirar más de lo que exista en el saldo.
*/

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