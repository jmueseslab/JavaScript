// asignacion por valor
// todos los primitivos se pasan por valor
let a = 10;
let b = a;
a = 30;
console.log({a, b});

// asignacion por referencia
// todos los objetos se pasan por referencia
let juan = {nombre: 'Juan'};
let ana  = {...juan}; // rompe la referencia, se va separado
ana.nombre = 'Ana';
console.log({juan, ana});

const cambiarNombre = ({...persona}) => { //operador spret
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiarNombre(peter);
console.log({peter, tony});

//arreglos

const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');
console.table({frutas, otrasFrutas});

