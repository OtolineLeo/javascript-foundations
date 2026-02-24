function getDiaSemanaTexto (diaSemana){
  let diaSemanaTexto;

  switch (diaSemana){
  case 0: 
    diaSemanaTexto = 'Domingo';
    return diaSemanaTexto;
  case 1: 
    diaSemanaTexto = 'Segunda';
    return diaSemanaTexto;
  default:
    return diaSemanaTexto;
  }
}

const data = new Date('1987-04-20 00:00:00');
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);