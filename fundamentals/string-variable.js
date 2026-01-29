let variavel = "Um Texto";
console.log(variavel[1]);                               //Imprimir indice 1
console.log(variavel.charAt(1));                        //Imprimir indice 1
console.log(variavel.concat(' Teste'))                  //Concatenar
console.log(variavel.indexOf('Texto'));                 //Obter indice do texto
console.log(variavel.indexOf('t', 3))                   //Obter indice após o indice 3
console.log(variavel.lastIndexOf('o'))                  //Obter indice começando do final
console.log(variavel.match(/[a-z]/g))                   //Inserir Regex
console.log(variavel.search(/x/g))                      //Obter indice com regex
console.log(variavel.replace('Um', 'Outra'))            //Substituir
console.log(variavel.length)                            //Obter tamanho da string
console.log(variavel.slice(2, 6))                       //Cortar string
console.log(variavel.substring(variavel.length - 5))    //Iniciar em -5
console.log(variavel.split(' '))                        //Separar
console.log(variavel.toUpperCase())                     //Deixar string em caixa alta
console.log(variavel.toLowerCase())                     //Deixar string em caixa baixa