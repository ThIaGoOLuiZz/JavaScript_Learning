const frutas = ['Pera','Maça','Uva'];

for(let indice in frutas){
    console.log(frutas[indice]);
};

const pessoa = {
    nome: 'Thiago',
    sobrenome: 'Gon',
    idade: 26
};

for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}