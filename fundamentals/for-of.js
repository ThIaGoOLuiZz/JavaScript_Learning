//const nome = 'Thiago';
const nome = ['Thiago', 'Luiz', 'Gon']

for (const letra of nome) {
    console.log(letra);
}

nome.forEach(function(el, indice) {
    console.log(el, indice)
})