/**
 function crearPersona(nombre, apellido){
    return {nombre, apellido}
}
 */


//retornar un objeto, no el cuerpo de la funcion
const crearPersona = (nombre, apellido) =>({nombre, apellido});

const persona = crearPersona('Jhon', 'Mueses');
console.log(persona);

//===========================
function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...args) => {
    //console.log({edad, args});
    return args;
}

imprimeArgumentos(10, true, false, 'Jhon', 'hola');

// desestructuración
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Jhon', 'hola');
console.log({casado, vivo, nombre, saludo});

const {apellido: nuevoApellido} = crearPersona('Jhon', 'Mueses');
console.log({nuevoApellido});

//===========================
const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// no buena practica definir funciones abajo de codigo

/**
const imprimePropiedades = (personaje) => {
    console.log('nombre', personaje.nombre);
    console.log('codeName', personaje.codeName);
    console.log('vivo', personaje.vivo);
    console.log('edad', personaje.edad);
    console.log('trajes', personaje.trajes);
}
 */
const imprimePropiedades = ({nombre, codeName, vivo, edad=15, trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);