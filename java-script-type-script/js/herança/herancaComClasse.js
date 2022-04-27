// Class de Dispositivo eletronico, permitindo inserir o nome e se ligado

class DispositivoEletronico{
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    liga(){
        if(this.ligado){
            console.log(this.nome + 'Dispositivo ligado');
            return;
        }
        this.ligado = true;
    }
    desliga(){
        if (this.ligado) {
            console.log(this.nome + 'Dispositivo já desligado')
            return;
        }
        this.ligado = false;
    }
}

//Agora criamos uma nova classe, mas utilizamos o extends, para herdar todos os atributos do DispositivoEletronico;
//Nesse caso, a class smartphone herdou tudo, mas não estamos adicionando nada a mais. Caso queiramos adicionar, é necessário adicionar corpo ao extends.
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        //Utiliza-se super 'class' para reaproveitar o atributo especifico da class original. Para não precisar declarar (this.nome = nome) novamente.
        //Lembrando, super é para utilizar atributos gerais. E caso necessitasse outros atributos gerais basta usar virgula super(nome, tamanho, idade);
        super(nome)
        this.cor = cor;
        this.modelo = modelo;
    }
}
// const s1 = new Smartphone ('iphone', 'preto', 'Galaxy s10');
// s1.liga()
// console.log(s1)

class Tablet extends DispositivoEletronico {
    constructor(nome, GB, ram){
        super(nome);
        this.gb = GB;
        this.ram = ram
    }
    ligar() {
        console.log('Olha, você alterou o método ligar.')
    }
}

const t1 = new Tablet ('Ipad', '128GB', '16Ram')
t1.ligar()
console.log(t1)
