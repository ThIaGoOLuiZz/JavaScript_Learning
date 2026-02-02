const pessoa1 = {
    nome: 'Thiago',
    sobrenome: 'Luiz',
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

function criaPessoa(nome,sobrenome,idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa2 = criaPessoa('Thiago','Luiz', 25);

console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);


const pessoa3 = {
    nome: 'Thiago',
    sobrenome: 'Luiz',
    idade: 25,

    fala(){
        console.log(`${this.fala.nome} ${this.sobrenome} está falando oi...`)
    }
}