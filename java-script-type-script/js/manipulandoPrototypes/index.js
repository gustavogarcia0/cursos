// Todo object tem um prototype = new Object -> Object.prototype

const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
    //Para setar a chaveA do objA no objB o js tem uma função especifica p ara isso.
};

const objC = new Object();
objC.chaveC = 'C'

Object.setPrototypeOf(objB, objA); // Nesse caso existe uma mudança na cadeia do proto. Antes: ObjB > proto || Agora: ObjB > ObjA > proto
Object.setPrototypeOf(objC, objB);


/*

Lógica prototype, aplicar desconto em um produto.

*/

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100)); // Nessa lógica, quando o produto receber a chave de desconto e o valor, aplicara um desconto.
}


Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100)); // Nessa lógica, quando o produto receber a chave de aumento e o valor, aplicara um aumento no produto.
}


const p1 = new Produto('Camiseta', 40)
p1.desconto(10);// Criação da chave necessária para aplicar o desconto. No caso de 100 o produto ficará de graça.
p1.aumento(100); // Ao criar a chave aumento, irá aplicar um aumento em porcentagem no produto.


// Agora iremos reaproveitar as funcoes protype da p1 na p2, LEMBRANDO que só vai funcionar por os obj terem mesma chave
// Literal
const p2 = {
    nome: 'Caneca',  
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(10)


const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        value: 113
    },
    tamanho2: {
        writable: true,
        configurable: true,
        value: 99
    }
});
p3.tamanho = 100;
console.log(p3.tamanho)

