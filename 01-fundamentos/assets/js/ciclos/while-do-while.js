//CICLO WHILE

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;
// while(i < carros.length){
//     console.log(carros[i]);
//     i++;
// }

//undefined
//null
//false

console.warn('WHILE');
while(carros[i]){
    if(i===1){
        i++
        continue;
    }
    console.log(carros[i]);
    i++;
}


// CICLO DO WHILE

console.warn('DO WHILE');
let j = 0;
//Se ejecuta al menos una vez
do{
    console.log(carros[j]);
    j++;
}while(carros[j]);
