const timer = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const reiniciar = document.querySelector('.reiniciar');
let segundos = 0;
let relogio;

function getTimeFromSeconds(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

function iniciaTimer(){
    relogio = setInterval(() =>{
        segundos++;
        timer.innerHTML = getTimeFromSeconds(segundos);
    }, 10);
}


function buttonsAction() {
    document.addEventListener('click', (e) => {
        const el = e.target;

        if (el.classList.contains('iniciar')) {
            timer.classList.remove('vermelho', 'branco');
            timer.classList.add('preto');
            clearInterval(relogio);
            iniciaTimer();
        }
        else if (el.classList.contains('pausar')) {
            if (segundos != 0) {
                timer.classList.remove('preto', 'branco');
                timer.classList.add('vermelho');
                clearInterval(relogio);
            }
        }
        else {
            timer.classList.remove('preto', 'branco', 'vermelho');
            segundos = 0;
            timer.innerHTML = '00:00:00'
        }
    })
}

buttonsAction();