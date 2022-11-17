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
console.warn(Asignaciones);