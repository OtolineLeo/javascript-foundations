/*
Primitivos (imputaveis = não pode mudar) - string, number, boolean, undefined, null, (bigInt, Symbol)

Referencia (mútavel = pode ser mudado) - array, objects, function  - Passados por referência
*/

// let nome = 'leo';
// nome[0] = 'R';
// console.log(nome[0]);

// let a = 'A';
// let b = a;

// a = 'Outra coisa';
// console.log(a, b);

// let a = [1, 2, 3];
// let b = [...a];
// let c = b;

// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push('Leo');
// console.log(a, b, c);

const a = {
    nome: 'Leo',
    sobreNome: 'Otolissimo'
};

const b = {...a};

a.nome = 'Rafa';

console.log(b);
console.log(a);