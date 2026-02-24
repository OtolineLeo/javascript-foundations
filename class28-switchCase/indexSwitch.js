const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();

function diaDaSemana(diaDSemana){
    const dia = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];

    if(diaDSemana == 0) return dia[0];

    if(diaDSemana == 1) return dia[1];

    if(diaDSemana == 2) return dia[2];
    
    if(diaDSemana == 3) return dia[3];
    
    if(diaDSemana == 4) return dia[4];
    
    if(diaDSemana == 5) return dia[5];

    if(diaDSemana == 6) return dia[6];

    else{
        diaDSemana = '';
    }
}

console.log(diaDaSemana(diaSemana));