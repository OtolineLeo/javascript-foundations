const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
// Var so tem escopo de função

let nome = 'Luiz'; //criando
var nome2 = 'Luiz';

if(verdadeira){
    let nome = 'Otavio'; //criando
    // console.log(nome, nome2)

    if(verdadeira){
        // let nome = 'outra coisa';
        console.log(nome, nome2);
    }
}