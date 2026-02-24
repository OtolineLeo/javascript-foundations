// função para o que pede no html 2-6
function newTrybgJS(){
    const form = document.querySelector(".form");
    const resolucao = document.querySelector(".resolucao");

    const pessoas = [];

    // função de verificação de altura para ser 

    function alturaVerification(altura){
        if(altura <= 1.79){
            return('Não é altura para um jogador de futebol');
        }

        else{
            return('É altura para jogador de futebol');
        }
    }

    // função para inserir os dados no html 

    function recebeEvento(event){
        event.preventDefault();

        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const time = form.querySelector(".time");
        const alturaInput = form.querySelector(".altura");

        const altura = Number(alturaInput.value);

        const statusAltura = alturaVerification(altura);

    // push para o array

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            time: time.value,
            altura: alturaInput.value
        });

        console.log(pessoas);

        resolucao.innerHTML += `<p>seu nome é ${nome.value} ${sobrenome.value}, e seu time é ${time.value}, e sua altura é ${alturaInput.value} /${statusAltura}/</p>`;
    }

    form.addEventListener('submit', recebeEvento);
}

newTrybgJS();