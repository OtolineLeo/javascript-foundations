function newJs (){
    const classe = document.querySelector('.classe');
    const result = document.querySelector('.result');
    const pessoas = [];

    function evento(event){
        event.preventDefault();

        const nome = classe.querySelector('.nome');
        const sobrenome = classe.querySelector('.sobrenome');
        const idade = classe.querySelector('.idade');
        const peso = classe.querySelector('.peso');
        const altura = classe.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        result.innerHTML += `<p>Seu nome é ${nome.value} ${sobrenome.value}, sua idade e peso respectativamente é ${idade.value}, e ${peso.value} e sua altura é ${altura.value}</p>`;
    }

    classe.addEventListener('subimit', evento);
}

newJs();