function imcS(){
    const form = document.querySelector('.inputs');
    const secondResult = document.querySelector('.secondResult');

    const calculoSave = [];

    function calculoIMC(peso, altura){
        const resultPesoAltura = peso / (altura * altura);

        let classificacao;

        if(resultPesoAltura <= 18.5){
            classificacao='Abaixo do Peso';
        } else if(resultPesoAltura > 18.5 && resultPesoAltura <= 24.9){
            classificacao='Peso normal';
        } else if(resultPesoAltura > 24.9 && resultPesoAltura <=29.9){
            classificacao='Sobrepeso';
        } else if(resultPesoAltura > 29.9 && resultPesoAltura <= 34.9){
            classificacao='Obesidade grau 1';
        } else if(resultPesoAltura > 34.9 && resultPesoAltura <39.9){
            classificacao='Obesidade grau 2';
        } else if(resultPesoAltura >= 40){
            classificacao='Obesidade grau 3';
        }

        return{
            imc: resultPesoAltura,
            classificacao: classificacao
        } 
    }

    function colorResultado(msg, isValid){
        secondResult.innerHTML = '';

        const p = document.createElement('p');

        if (isValid){
            p.classList.add('ok');
        } else{
            p.classList.add('bad');
        }

        p.innerHTML = msg;
        secondResult.appendChild(p);
    }

    function recebeForm(evento){
        evento.preventDefault();

        const pesoInput = form.querySelector('.peso');
        const alturaInput = form.querySelector('.altura');

        const altura = Number(alturaInput.value);
        const peso = Number(pesoInput.value)
        const statusAltura = calculoIMC(peso, altura);

        if(!peso || peso <=0){
            colorResultado('Peso inválido', false);
            return;
        }

        if(!altura || altura <=0){
            colorResultado('Altura inválida', false);
            return;
        }

        calculoSave.push({
            peso: pesoInput.value,
            altura: alturaInput.value
        });

        console.log(calculoSave);

        colorResultado(`<p>Seu IMC é ${statusAltura.imc.toFixed(2)} (${statusAltura.classificacao})</p>`, true)
    }

    form.addEventListener('submit', recebeForm);
}

imcS();
