//==================================
//Funcion tradicional
function saludar() {
    // metodo es una funcion que
    // se encuentra dentro de un objeto
    console.log('Hola Mundo');
    return [10, 20];

    // Esto nunca se ejecuta
    console.log('código después del return');
}

const retornoSaludar = saludar();
console.log(retornoSaludar[0], retornoSaludar[1]);

//==================================
//Funcion anonima
const saludar2 = function() {
    console.log('Hola Mundo');
}

saludar2();

//==================================
//Funcion con argumentos
function saludar3(nombre) {
    console.log(arguments);
    console.log('Hola ' + nombre);
}

saludar3('Jhon', 33, true, 'Bogota');

//==================================
//Funcion de flecha - lamnda function
const saludarFlecha = () => {
    console.log('Hola Flecha');
}

saludarFlecha();

//==================================
//Funcion de flecha - con argumentos
const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}

saludarFlecha2('Nohelys');

//==================================
function sumar(a, b){
    return a + b;
}

const sumar2 = (a, b) => {
    return a + b;
}

// clean code - cuando se retorna en una sola linea
// solo devolver el return
const sumar3 = (a, b) => a + b;

console.log(sumar(1,2));
console.log(sumar2(1,2));
console.log(sumar3(5,2));

//==================================
function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio());
console.log(getAleatorio2());