// let controle = 0;

// while(controle <= 10){
//     console.log(controle);
//     controle++;
// }

// console.log('Segue a vida...')

function numeroAleatorio(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rando = numeroAleatorio(min, max);

while(rando !== 10){
    rando = numeroAleatorio(1,50);
    console.log(rando);
}

console.log('############');

do{
    rando = numeroAleatorio(min, max);
    console.log(rando);
} while(rando !== 10);