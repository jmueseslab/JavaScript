//==================================
//Funcion tradicional
function saludar() {
    // metodo es una funcion que
    // se encuentra dentro de un objeto
    console.log('Hola Mundo');
}

saludar();

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