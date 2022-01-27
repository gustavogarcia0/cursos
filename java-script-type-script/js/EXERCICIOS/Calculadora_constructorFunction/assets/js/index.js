function Calculadora(){
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }

    this.capturaEnter = () => {
        document.addEventListener('keydown', e =>{
            if(e.keyCode===13){
                this.realizaConta();
            }
        });
    }

    this.capturaCliques = () =>{
        document.addEventListener('click', e =>{
            const el = e.target;
            if (el.classList.contains('btn-num')) this.adicionaNumeroNoDisplay(el);
            if (el.classList.contains('btn-clear')) this.clearDisplay(); 
            if (el.classList.contains('btn-del')) this.delNumeroDoDisplay(); 
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    }

    this.realizaConta = () => {
        try{
            const conta = eval(display.value);

            if(!conta){
                alert('Conta inválida');
                return;
            }

            display.value = conta;
        }catch(e){
            alert('Conta Invalida');
            return;
        }
    }

    this.adicionaNumeroNoDisplay = (el) => {
        display.value += el.innerText;
        display.focus();
    }

    this.clearDisplay = () => display.value = ''; 

    this.delNumeroDoDisplay = () => display.value = display.value.slice(0, -1);
}

const calculadora = new Calculadora();
calculadora.inicia();