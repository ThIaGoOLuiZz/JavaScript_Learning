const nome = 'Thiago';
const sobrenome = 'Luiz';
const idade = 30;
const peso = 84;
const altura = 1.80;
const anoAtual = 2026;
let imc;
let anoNascimento;

imc = peso / (altura * altura)
anoNascimento = anoAtual - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('Tem', altura, 'de altura e seu IMC é de', imc)
console.log(nome, 'nasceu em', anoNascimento)

//Template String

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`Tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`)