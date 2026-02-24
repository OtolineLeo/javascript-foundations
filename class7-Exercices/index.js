const nome = 'Leo';
const sobrenome = 'Otoline';
const idade = 31;
const peso = 52;
const alturaEmM = 1.65;

let imc = (peso / (alturaEmM*alturaEmM));
let anoNascimento = 2026 - idade;

//console.log(nome, sobrenome,' tem ', idade, ' anos, pesa ', peso, 'kg, tem ', alturaEmM, ' de altura e seu IMC é de ', imc, nome, 'nasceu em ', anoNascimento);
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem  ${alturaEmM} de altura e seu IMC é de ${imc}, nasceu em ${anoNascimento}`)