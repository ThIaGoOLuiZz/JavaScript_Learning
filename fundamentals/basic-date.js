let data = new Date();
console.log(data.toString())

data = new Date(2019, 3, 20, 15, 14, 27);
console.log(data.toString())

data = new Date();
console.log(data.toString());
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia Semana', data.getDay());
console.log('=========================================')

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`

}

const dataTeste = new Date();
const dataBrasil = formataData(dataTeste);

console.log(dataBrasil);