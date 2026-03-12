// const numeros = [1,2,3,4,5,6,7,8];
// const numeroDois = 2;
// const numeroCinco = 5;

// for(let i in numeros){
//     let numero = numeros[i]

//     if(numero === 2){
//         console.log(`Excluindo o numero ${numeroDois}`);
//         continue;
//     }

//     if(numero === 5){
//         console.log(`Excluindo o numero ${numeroCinco}`)
//     }

//     console.log(numero);

//     if(numero === 7){
//         console.log('##7 encontrado, saindo...##');
//         break;
//     }
// }

// ######################################################

const numeros = [1,2,3,4,5,6,7,8];
const numeroDois = 2;
const numeroCinco = 5;

// Continue continua para a proxima iteração
// Break sai do laço

let i = 0;

do{
    let numero = numeros[i]

    if(numero === 2){
        console.log(`Excluindo o numero ${numeroDois}`);
        i++;
        continue;
    }

    if(numero === 5){
        console.log(`Excluindo o numero ${numeroCinco}`)
    }

    console.log(numero);

    if(numero === 7){
        console.log('##7 encontrado, saindo...##');
        i++;
        break;
    }

    i++;
} while(i < numeros.length);