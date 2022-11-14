let a = 1;

if (a >= 10) { // udefined, null, una asignación
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

console.log('Fin de programa');

const hoy = new Date(); // {}
let dia = hoy.getDay(); // 0: domingo, 1: lunes, 2: martes, ... 
console.log(hoy);
console.log({dia});

if (dia === 0) {
    console.log('Domingo');
} else if(dia === 1){
    console.log('Lunes');
} else if(dia === 2){
    console.log('Martes');
} else {
    console.log('No es lunes, martes o domingo...');
}