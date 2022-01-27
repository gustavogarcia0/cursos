function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        clearDisplay(){
            display.value = ' ';
        },
        
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter(){
            document.addEventListener('keypress', (e)=>{
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },
        realizaConta(){
            let conta  = display.value;
            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta inválida');
                    return;
                }
                display.value = String(conta);
            }catch(e){
                alert('Conta inválida');
                return;
            }
        },
        apagaUm(){
            display.value = display.value.slice(0, -1);
        },
        cliqueBotoes() {
            document.addEventListener('click', (e)=>{
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) {
            display.value += valor;
        },

    };
}


const calculadora = criaCalculadora();
calculadora.inicia();