//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);

//const data = new Date(2019, 3, 20, 15, 14, 27); // Ano, Mes, Dia, Horario, Minuto, Segundo, Millesimo

const data = new Date('2026-02-20 14:50:20');
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());
console.log(data.toString());
console.log(Date.now);



