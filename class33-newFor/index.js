// const frutas=['Pera', 'Maça', 'Banana', 'Mamão', 'Melancia', 'Kiwi'];

// for(let i=0; i<frutas.length; i++){
//     console.log(frutas[i]);
// }

// for(let indice in frutas){
//     console.log(frutas[indice]);
// }

const build = {
    head: 'Helmet Nilfgardian',
    chest: 'Brigide Northen Kingdom',
    shoes: 'Normal shoes',
    specialItem: 'Master Key'
};

// const key = 'specialItem'

// console.log(build.head);
// console.log(build[key]);

for(let key in build){
    console.log(key);
}

// -------------------------------------------------------

const nomes = ['Rio', 'Jao', 'Hylia', 'Leo'];

// For classico - Geralmente com iteraveis (array ou strings) 
for(let i=0; i<nomes.length; i++){
    console.log(nomes[i]);
}

console.log("------------------");

// For in - Retorna o índice ou chave (String, array ou objetos)
for(let i in nomes){
    console.log(nomes[i]);
}

console.log("------------------");

// For on - Retorna o valor em si (iteraveis, arrays ou strings)
for(let valor of nomes){
    console.log(valor);
}

console.log("------------------");

// ForEach - necessita de um valor, index e array (nome/posição/arry do conjunto)
nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});

