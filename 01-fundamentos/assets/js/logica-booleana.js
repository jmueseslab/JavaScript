const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

//============================================================
console.warn('Not o la negación');
console.log(true); //true
console.log(!true); //false
console.log(!false); //true

console.log(!regresaFalse()); //true

//============================================================
console.warn('And'); // true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && !false); // true

console.log('=====================');
console.log(regresaFalse() && regresaTrue()); // false
console.log(regresaTrue() && regresaFalse()); // false

console.log('4 condiciones', true && true && true && false); //false

console.log('===========&&==========');
regresaFalse() && regresaTrue(); // false

//============================================================
console.warn('OR');
console.log(true || false); //true
console.log(false || false); //false
console.log(regresaTrue() || regresaFalse()); // true
console.log('4 condiciones', true || true || true || false); //false

//============================================================
console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'hola Mundo' && 150; // false
const a2 = 'hola' && 'Mundo' && soyFalso && true; // false
const a3 = soyFalso || 'ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'ya no soy falso de nuevo' || true;
console.log({a1, a2, a3, a4, a5});

if(regresaFalse() && regresaTrue() && (true||false||true)){
    console.log('Hacer algo');
}else{
    console.log('Hacer otra cosa');
}