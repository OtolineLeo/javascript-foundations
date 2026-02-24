const numero = parseFloat(prompt('Digite um numero: '));
const numeroTitulo = document.getElementById("numero-titulo");
const textEscolhido = document.getElementById("Texto");

numeroTitulo.innerHTML = numero;

textEscolhido.innerHTML = `<p>Seu número + 2 é ${numero + 2}. </p>`;
textEscolhido.innerHTML += `<p>A raiz quadrada de ${numero} é ${numero ** 0.5}. </p>`;
textEscolhido.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}. </p>`;
textEscolhido.innerHTML += `<p>É Nan: ${Number.isNaN(numero)}. </p>`;
textEscolhido.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}. </p>`;
textEscolhido.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}. </p>`;
textEscolhido.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}`;