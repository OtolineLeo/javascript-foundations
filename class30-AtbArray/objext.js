const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Otolissimo',
    idade: 31,
    endereco: {
        rua: 'Santiago Jose delgado',
        numero: 301
    }
};

// Atribuição normal
// const nome = pessoa.nome;
// const endereco = pessoa.endereco.rua;

// Atribuição via desestruturação
// const { nome = '', sobrenome, idade} = pessoa;

// const {endereco: {rua: r = 123, numero}} = pessoa;

const {nome , ...resto} = pessoa

console.log(resto);