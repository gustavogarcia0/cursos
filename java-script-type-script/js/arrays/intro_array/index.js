//Arrays são dados por referencia;
//Mais comun
const nomes = ['Gustavo', 'Garcia', 'Eduarda', 'Fraga'];
//Construtor
//const nomes = new Array ('Gustavo', 'Garcia','Eduarda', 'Fraga')
// pop retorna valor removido e remove o ultimo valor
const removido = nomes.pop();
//adiciona um valor no final do array
nomes.push('teste fim');
//  shift retorna valor removido e remove o primeiro valor
const shift = nomes.shift();
//adiciona um valor no inicio do array
nomes.unshift('teste inicio')

const novo = nomes.slice(1,3)
//console.log('com slice', novo)
//console.log('sem slice', nomes, removido, shift)

//para strings to array
//Split separa pelo valor definido dentro dele, no caso '(espaço)', mas pode ser virgula ou qualquer divisor. 
const nome = 'Gustavo Ferreira Garcia';
const nomesArray = nome.split(' ');
//console.log(nomesArray)

//array to string
//join junta o array pelo valor definido dentro dele, no caso '(espaço)', mas pode ser virgula ou qualquer divisor. 
const nomes1 = ['Gustavo', 'Garcia', 'Eduarda', 'Fraga'];
const nome1 = nomes1.join(' ');
console.log(nome1)