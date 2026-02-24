// const para ler no html (ou no seu console)
const h1 = document.querySelector('.container h1');
// const para chamar um objeto Date
const data = new Date();

// função para trocar o numero do dia da semana para uma string
function diaNome(DiaData){
    let dataDia;

    switch(DiaData){
        case 0:
            dataDia = 'Domingo';
            return dataDia;

        case 1:
            dataDia = 'Segunda-Feira';
            return dataDia;

        case 2:
            dataDia = 'Terça-Feira';
            return dataDia;

        case 3:
            dataDia = 'Quarta-Feira';
            return dataDia;
        
        case 4:
            dataDia = 'Quinta-Feira';
            return dataDia;

        case 5:
            dataDia = 'Sexta-Feira';
            return dataDia;

        case 6:
            dataDia = 'Sabado';
            return dataDia;
    }
}

function nomeMes(numeroMes){
    let dataMes;

    switch(numeroMes){
        case 0:
            dataMes = 'Janeiro';
            return dataMes;

        case 1:
            dataMes = 'Fevereiro';
            return dataMes;

        case 2:
            dataMes = 'Março';
            return dataMes;

        case 3:
            dataMes = 'Abril';
            return dataMes;
        
        case 4:
            dataMes = 'Maio';
            return dataMes;

        case 5:
            dataMes = 'Junho';
            return dataMes;

        case 6:
            dataMes = 'Julho';
            return dataMes;

        case 7:
            dataMes = 'Agosto';
            return dataMes;

        case 8:
            dataMes = 'Setembro';
            return dataMes;

        case 9:
            dataMes = 'Outubro';
            return dataMes;

        case 10:
            dataMes = 'Novembro';
            return dataMes;

        case 11:
            dataMes = 'Dezembro';
            return dataMes;
    }
}

// função para colocar um zero caso necessario nos minutos
function zero(numero){
    return numero >= 10 ? numero : `0${numero}`;
}

function criaData(daty){
    // pega um numero do dia + (seg - dom) e pega um numero do mes (jan - dez)
    const diaSemana = daty.getDay();
    const numeroMes = daty.getMonth();

    // converte o numero em nome dado ao switch case
    const nomeDia = diaNome(diaSemana); 
    const nomeMees = nomeMes(numeroMes);

    // retorna a mensagem final
    return (`${nomeDia}, ${data.getDate()} de ${nomeMees}` +
    `de ${data.getFullYear()} ${zero(data.getHours())}:${zero(data.getMinutes())}`)
}

h1.innerHTML = criaData(data);
