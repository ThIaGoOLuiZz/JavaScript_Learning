let num;
while(true){
    num = prompt('Digite um numero');
    if(!isNaN(num)){
        break;
    }
    alert('Not a Number')
}

document.body.innerHTML += `Seu número é: ${num}<br>`
document.body.innerHTML += `Raiz quadrada: ${Math.sqrt(num)}<br>`;
document.body.innerHTML += `${num} é inteiro?: ${Number.isInteger(Number(num))}<br>`;
document.body.innerHTML += `Arredondando para baixo: ${Math.floor(num)}<br>`;
document.body.innerHTML += `Arredondando para cima: ${Math.ceil(num)}<br>`;
document.body.innerHTML += `Com duas casas decimais: ${Number(num).toFixed(2)}`;