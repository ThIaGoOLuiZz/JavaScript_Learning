const nome = prompt('Digite seu nome: ');

document.body.innerHTML += `Seu nome tem ${nome.length} letras <br>`;
document.body.innerHTML += `A segunda letra do seu nome é: ` + nome.charAt(1) + "<br>";
document.body.innerHTML +=  `Qual o primeiro indice da letra "I" no seu nome: ` + nome.indexOf('i') + "<br>";
document.body.innerHTML += `Qual o último indice da letra "I" no seu nome: ` + nome.lastIndexOf('i') + "<br>";
document.body.innerHTML += `As últimas 3 letras do seu nome são: ` + nome.substring(nome.length -3) + "<br>";
document.body.innerHTML += `As palavras do seu nome são: ` + nome.split(' ') + "<br>"
document.body.innerHTML += `Seu nome com letras maiúsculas: ` + nome.toUpperCase() + "<br>";
document.body.innerHTML += `Seu nome com letras minúsculas: ` + nome.toLowerCase();