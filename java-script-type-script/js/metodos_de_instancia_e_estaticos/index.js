function teste(){
    console.log('Este é meu teste.')
}

// Método de instancia é quando cria um objeto e atribui uma função a ele.
// Método estático é quando vc atribui a função a classe em si.
class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
        teste();
    }
//Método de instancia
    aumentarVolume(){
        this.volume += 2;
    }
//Método de instancia
    diminuirVolume(){
        this.volume -= 2;
    }
//Método de estático
    static soma(x,y){
        return x + y;
    }
}

//Método estático é quando atribui função a classe diretamente
ControleRemoto.soma(); 


const control1 = new ControleRemoto('LG');
//Quando chama o objeto e função é chamado de metodo de instancia
control1.aumentarVolume();


