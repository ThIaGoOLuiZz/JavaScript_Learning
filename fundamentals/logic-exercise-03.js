function divisor(valor){
    return valor % 3 == 0 && valor % 5 == 0 ? 'FizzBuzz' :
            valor % 3 == 0 ? 'Fizz' : 
            valor % 5 == 0 ? 'Buzz' : valor
}

for(let i=0; i < 1000; i++){
    console.log(i, divisor(i))
}