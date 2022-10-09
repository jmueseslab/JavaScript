let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo: ', juegos.length);

let primero = juegos[2-2];
let ultimo = juegos[juegos.length - 1];
console.log({primero, ultimo});

// Recorrer un arreglo
juegos.forEach((elemento, indice, arr)=>{
    console.log({elemento, indice, arr});
});

// Agregar elemento
let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});

// Agregar elemento al inicio 
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos});

// Elimina el ultimo elemento del arreglo
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

// Eliminar un elemento en especifico
let pos = 1;
console.log(juegos);
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

// Indice del elemento
let metroidIndex = juegos.indexOf('Metroid'); // CaseSensitive, si no lo encuentra retorna -1
console.log(metroidIndex);