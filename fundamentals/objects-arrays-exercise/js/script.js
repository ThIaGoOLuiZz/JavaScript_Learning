function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const listaObj = []

    form.addEventListener('submit', function(event){
        event.preventDefault();
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;
        
        resultado.innerHTML += `${nome} ${sobrenome} - <b>peso:</b> ${peso} - <b>altura</b> ${altura}<br>`
        listaObj.push({nome, sobrenome, peso, altura});
    });
}
meuEscopo();