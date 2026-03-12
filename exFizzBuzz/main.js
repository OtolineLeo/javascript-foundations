// Escreva uma função que recebe um numero e retorne o seguinte?
// Numero é divisivel por 3 = Fizz
// Numero é divisivel por 5 = Buzz
// Numero é divisivel por 3 e 5 = FizzBuzz
// Numero não é divisivel por 3 e 5 = Retorna o proprio numero
// Checar se o numero é realmente um numero = Retorna o proprio numero ex string
// Use a função com numeros de 0 a 100

function FizzBuzz(number){

    if(isNaN(number) || number === ''){
        return number
    }

    number = Number(number);

    if(number % 3 === 0 && number % 5 === 0){
        return 'FizzBuzz';
    } else if (number % 3 === 0){
        return 'Fizz';
    } else if (number % 5 === 0){
        return 'Buzz';
    } else if (!isNaN(number)){
        return number;
    } else if(number % 3 !== 0 && number % 5 !==0){
        return number;
    } else{
        return number
    }
}

for(let i=0; i<101; i++){
    console.log(FizzBuzz(i));
}