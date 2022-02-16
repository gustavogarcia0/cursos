//
const nomes = ['Gustavo', 'Garcia', 'Eduarda', 'Fraga', 'Pudim'];
//nomes.splice(indice inicial, número de elementos para deletar)
//splice também retorna o valor removido como o pop, porém com a diferença que ele retorna como array
// caso eu queira remover do indice atual escolhido até o final pode ser feito com
// Number.MAX_VALUE... nomes.splice(1, Number.MAX_VALUE); 
const removidos = nomes.splice(0,0) 
//console.log(nomes, removidos)
//No caso a baixo, splice(elemento a ser removido, quantos elementos a serem removidos, e adicionar algo a partir daquele elemento);
const adiciona = nomes.splice(0,1,'teste')
console.log(nomes, adiciona)


// ex mental de parametros
// function teste (valorInicial, quantosValores){
//     const nomes = ['Gustavo', 'Garcia', 'Eduarda', 'Fraga', 'Pudim'];
//     const removidos  = nomes.splice(valorInicial, quantosValores);
//     console.log(nomes, removidos);
// }

// teste(2,1);