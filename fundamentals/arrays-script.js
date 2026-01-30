const alunos = ['Thiago','Maria','João'];
console.log(alunos[0])
console.log(alunos);
alunos[0] = 'Luiz';
alunos[3] = 'Gon'
console.log(alunos);

alunos.push('aa') //Adicionar no final
console.log(alunos);
alunos.unshift('aaaa') //Adicionar no começo
console.log(alunos);

const removido = alunos.pop(); //Remover o último
const removido2 = alunos.shift(); //Remover o primeiro

console.log(alunos);
console.log("Removido: " + removido)

delete alunos[1]; //Deleta valor do indice
console.log(alunos)

console.log(alunos.slice(0, 3)); // Pegar indices especificos
console.log(alunos instanceof Array);