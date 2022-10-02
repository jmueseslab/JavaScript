let nombre = 'Peter Parker';
console.log(nombre);

nombre = 'Ben Parker';
console.log(nombre);

nombre = "Tía May";
nombre = `Tía May`;

console.log(typeof nombre);
nombre = 123;

console.log(typeof nombre);

let esMarvel = true;
console.log(typeof esMarvel);

let edad = 33;
console.log(typeof edad);

edad = 33.01;
console.log(typeof edad);

let superPoder;
console.log(typeof superPoder); //?? la variable aun no se ha definido

let soyNull = null;
console.log(typeof soyNull); // ? consideran como objeto no como dato primitivo

//PROPIEDADES DE MANERA UNICA SYMBOL
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log(typeof symbol1); // ?
console.log(symbol1===symbol2);