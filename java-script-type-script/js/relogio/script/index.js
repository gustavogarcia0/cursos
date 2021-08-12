setInterval(changeH3,1000);
function changeH3(){
    let time = new Date();
    let dia = time.getDate();
    let horas = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let diaSemana = time.getDate()
    

    let dataAtual = "Hoje é dia" + ": " + dia + "" + " " + " "
    let horaAtual = "e o horário de: " + horas + ":" + min + ":" + sec;

    document.querySelector('.hora').innerHTML = dataAtual + horaAtual;
}

changeH3();