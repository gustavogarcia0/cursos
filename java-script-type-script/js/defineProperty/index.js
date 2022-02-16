// defineProperty - defineProperties

function Produto (nome, preco, estoque,data) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra chave
        value: estoque, // valor da chave
        writable: true, // pode alterar
        configurable: true, // pode configurar a chave (ou seja criar novo Object.defineProperty  e alterar as configs)

        //No caso de do writable true e configurable false, a alteração do valor dachave é permitida, mas não da chave. Ex. delete p1.estoque (não funciona)
    });
    
    Object.defineProperties(this, {
        preco: {
            enumerable: true, // mostra chave
            value: preco, // valor da chave
            writable: true, // pode alterar
            configurable: true, // pode configurar a chave (ou seja criar novo Object.defineProperty  e alterar as configs)
        },
        data: {
            enumerable: true, // mostra chave
            value: data, // valor da chave
            writable: true, // pode alterar
            configurable: true, // pode configurar a chave (ou seja criar novo Object.defineProperty  e alterar as configs)
        }
    })
}

const p1 = new Produto ('Camiseta', 20, 3);
//No caso de p1.estoque ele está alterando o valor, e em seguida no cod ele está deletando. Mas se o delete vier antes, ele irá apagar. Mas como configurable está ativo
// Ele iria criar novamente estoque e atrelar o valor definido. Então PODEMOS SIM criar novas chaves desde que configurable seja true.

//p1.teste = 'testeee'
// p1.estoque = 5000;
// delete p1.estoque;
console.log(Object.keys(p1)) // igual ====== for (let chave in p1) { console.log(chave) }