function getDate(){
    const data = new Date();
    return `${setDay(data.getDay())}, ${data.getDate()} de ${setMonth(data.getMonth())} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
}

function setDay(day){
    switch(day){
        case 0:
            return 'Domingo'
            break;
        case 1:
            return 'Segunda-feira'
            break;
        case 2:
            return 'Terça-feira'
            break;
        case 3:
            return 'Quarta-feira'
            break;
        case 4:
            return 'Quinta-feira'
            break;
        case 5:
            return 'Sexta-feira'
            break;
        case 6:
            return 'Sabado'
            break;
        default:
            return ''
    }
}

function setMonth(month){
    switch(month){
        case 0:
            return 'Janeiro';
        case 1:
            return 'Fevereiro';
        case 2:
            return 'Março';
        case 3:
            return 'Abril';
        case 4:
            return 'Maio';
        case 5:
            return 'Junho';
        case 6:
            return 'Julho';
        case 7:
            return 'Agosto';
        case 8:
            return 'Setembro';
        case 9:
            return 'Outubro';
        case 10:
            return 'Novembro';
        case 11:
            return 'Dezembro';
    }
}

document.addEventListener('DOMContentLoaded', function(){
    document.body.querySelector('.container h1').innerHTML = getDate();
});

