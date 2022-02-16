/* 
Object.assign (des, any)
Object.getOwnPropertyDescriptor (o, 'prop');
...(spread)


// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = { nome: 'Caneca', preco: 1.8};
//Com spread também é possivel criar novas chaves como exemplo a baixo
const p1 = {
    ...produto,
    material: 'porcelana'
};
produto.nome = 'Testeeeeeeeee'

// Nesse caso, as duas const estão apontando para o mesmo passo da memória. Ou seja, iram possuir mesmo valor
// Para criar uma cópia e manter a integridade do valor original é necessário usar spread {... }
// console.log(produto)
// console.log(p1)


// Outra maneira de criar uma cópia de uma variavel é com Object.assign({}, variavel a ser copiada);
// Assim como spread também é possivel adicionar novas chaves na nova variavel.
const novoProduto = { nome: 'Prato', preco: 13.8 };
const p2 = Object.assign({}, novoProduto, {material: 'prata'});

p2.nome = 'talher'
p2.preco = 0

// console.log(p2)
// console.log(novoProduto)


//Object.getOwnPropertyDescriptor retorna as propriedades de uma chave.
const objDescriptor = { nome: 'Prato', preco: 13.8 };
Object.defineProperty(objDescriptor, 'nome', {
    writable: false,
})
// console.log(Object.getOwnPropertyDescriptor(objDescriptor, 'nome'));

const b2 = { nome: 'Prato', preco: 13.8 };
// console.log(Object.values(b2)) // Object.values -> retorna os valores das chaves, diferente de keys que retorna a chave em si.
//console.log(Object.entries(b2)) // retorna o valor e a chave em formato de array

for(let [chave, valor] of Object.entries(b2)){
    console.log(chave, valor);
}

// ------------------------------- revisão ------------------------------------\\

//Object.keys exibe todas as chaves de um objeto
const newPorduct = { nome: 'Prato', preco: 13.8 };
const p3 = Object.assign({}, novoProduto, { material: 'prata' });

// console.log(Object.keys(p3))

//Object.freeze congela o objeto (não permitindo alteração)
const a1 = { nome: 'Prato', preco: 13.8 };
Object.freeze(a1);
// L50 não funciona devido o Object.freeze()
const b1 = Object.assign({}, novoProduto, { material: 'prata' });
// console.log(a1)