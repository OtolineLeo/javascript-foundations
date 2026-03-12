// Escreva uma função que recebe 2 números e retorne o maior deles

// const prompt = require('prompt-sync')();

// function numeros(){

//     let numOne = Number(prompt('Digite um numero: '))
//     let numTwo = Number(prompt('Digite outro numero: '))
//     console.log(`Os numeros digitados foram ${numOne} e ${numTwo}`);

//     if(numOne > numTwo){
//         console.log(`O maior numero é o ${numOne}`);
//     } else{
//         console.log(`O maior numero é o ${numTwo}`);
//     }
// }

// numeros();

// function numeros(numOne, numTwo){
//     return numOne > numTwo ? numOne : numTwo;
// }

// console.log(numeros(5,7));

const numeros = (numOne, numTwo) => numOne > numTwo ? numOne : numTwo;

console.log(numeros(5,7));