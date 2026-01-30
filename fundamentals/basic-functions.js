function saudacao(nome){
    return `Olá ${nome}!`;
}

const valor = saudacao('Maria')
console.log(valor);


function soma(x=1, y=1){
    return x + y;
}

const resultado = soma(2);
console.log(resultado);



const raiz = function(m) {
     return m ** 0.5;
};

console.log(raiz(9))

const arrow = (n) => n ** 0.5;