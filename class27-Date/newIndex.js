function zero(numero){
    return numero >= 10 ? numero : `0${numero}`;
}

function formataData(data){
    const dia = zero(data.getDate());
    const mes = zero(data.getMonth() + 1);
    const ano = zero(data.getFullYear());
    const hora = zero(data.getHours());
    const min = zero(data.getMinutes());
    const seg = zero(data.getSeconds());

    return `${dia}/${mes}/${ano} - ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);