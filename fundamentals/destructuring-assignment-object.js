const pessoa = {
    nome: "Thiago",
    sobrenome: "Luiz",
    idade: 25,
    endereco: {
        rua: "Av Brasil",
        numero: 320
    }
};

console.log(pessoa);
const nomePessoa = pessoa.nome
console.log(nomePessoa);

const { nome, sobrenome: teste, idade = 0, ...resto} = pessoa;
console.log(nome, teste, idade, resto);

