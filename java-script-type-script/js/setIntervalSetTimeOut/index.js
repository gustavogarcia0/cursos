function retornaHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

function funcaoDoInterval(){
    console.log(retornaHora());
}
//Chama função X de tempos em tempos em milisegundos
const timer = setInterval(() => {
    console.log(retornaHora());
}, 2000);



//chama a função 1 unica vez em X milisegundos
setTimeout(()=>{
    console.log('teste')
    clearInterval(timer);
}, 5000);