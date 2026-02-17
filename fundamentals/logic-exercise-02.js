function ePaisagem(largura, altura){
    return largura > altura ? 'Paisagem' : 'retrato';
}

console.log(ePaisagem(1920, 1080))