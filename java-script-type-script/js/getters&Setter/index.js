//Getter e Setter é uma maneira de proteger a propriedade.

function Produto(nome, preco, estoque, data) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra chave
        configurable: true, // pode configurar a chave (ou seja criar novo Object.defineProperty  e alterar as configs)
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError ('Valor inválido');
                return;
            }
            estoquePrivado = valor;
        }
    });
}

// const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = '12';
// console.log(p1) ;
//console.log(Object.keys(p1)) 


function criaProduto (nome) {
    return {
        get nome() {
            return nome;
        }, set nome (valor){
            valor = valor.replace ('coisa', '');
            nome = valor;
        }
    };
}

const p2 = criaProduto('camiseta')
p2.nome = 'qualquer coisa'
console.log(p2.nome)