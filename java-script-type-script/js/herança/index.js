//Produto -> aumento, desconto
// Camiseta, Caneca, Lápis


function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}

Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
}



// Herança permite reutilizar atributos originais de outras funções, com a opção de adicionar novos sem alterar os anteriores.
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco + (percentual / 100));
};

// Linka o proto das duas funções
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta ('Regata', 7.5, 'Preta');
camiseta.aumento(100)
console.log(camiseta);