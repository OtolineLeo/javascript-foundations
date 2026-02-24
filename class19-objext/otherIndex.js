// const pessoa = {
//     nome: 'leo',
//     sobreNome1: 'otolissimo',
//     idade1: 30,
//
//  fala() {
//     console.log('Olá Leo');
//  }
// };
//
//  pessoa1.fala();

// const pessoa2 = {
//     nome: 'gi',
//     sobreNome: 'otolissimo',
//     idade: 32
// };

// const pessoa3 = {
//     nome: 'rafa',
//     sobreNome: 'otolissimo',
//     idade: 40
// };

// console.log(pessoa.nome);
// console.log(pessoa3.idade);

function criaPessoa (nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Leo', 'Otolissimo', 20);
const pessoa2 = criaPessoa('Gi', 'Carvalho', 32);
const pessoa3 = criaPessoa('BigDamazio', 'Mc', 28);

console.log(pessoa1.nome, pessoa2.nome);

