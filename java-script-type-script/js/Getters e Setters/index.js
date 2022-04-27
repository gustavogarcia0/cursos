const _velocidade = Symbol('velocidade'); 
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }
//QUANDO ATRIBUIMOS UM VALOR
    set velocidade(valor){
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }
//GETTER QUANDO ENVIA O VALOR
    get velocidade() {
        return this[_velocidade]
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++
    }
    frear() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--
    }
}

const c1 = new  Carro('Fusca');
for(let i = 0; i <= 200; i++){
    c1.acelerar();
}


class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Gustavo', 'Garcia');
p1.nomeCompleto = 'Eduarda Fraga'
console.log(p1.nomeCompleto);
