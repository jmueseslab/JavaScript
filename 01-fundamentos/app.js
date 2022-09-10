console.log(console.log('Hola mundo'));

let a = 10,
    b = 20,
    c = 'hola ',
    d = 'spyderman',
    x = a+b;

const saludo = c + d;

console.log('%c Mis Variables', 'color:blue; font-weight:bold');

console.log('a', a);
console.log('b', b);
console.log('c', c);

console.log({a});
console.log({b});
console.log({c});

console.log(x);
console.warn(x);
console.error(x);

// const c = 8; no se puede cambiar*/

c = 'Hola de nuevo';
console.table({a, b, c, d, x, saludo});