const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje['edad']);

console.log('Coors', personaje.coords);
console.log('lat', personaje.coords.lat);

console.log('No. Trajes', personaje.trajes.length);
console.log('Ultimo Traje', personaje.trajes[personaje.trajes.length-1]);

// trabajar de forma dinamica con objetos
const x = 'vivo';
console.log('Vivo', personaje[x]);
console.log('Última película', personaje['ultima-pelicula']);

// MAS DETALLES

// eliminar una propiedad
delete personaje.edad;
console.log(personaje);

// crear propiedad
personaje.casado = true;

// arreglo pares de valores
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// personaje=true; Se puede cambiar las propiedades pero no asignacion directa del objeto

// bloquear las propiedades
Object.freeze(personaje);
personaje.dinero = 1000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';

console.log(personaje);

// listar las propiedades y valores del objeto en forma de arreglo
const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades, valores});