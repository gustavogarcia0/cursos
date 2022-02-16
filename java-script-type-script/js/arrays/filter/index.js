// filter, map, reduce = as funções mais importantes para array dentro de JS
// Filter -> sempre retorna um array, com a mesma quantidade ou menos de elementos.
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const a1 = numeros.filter(valor=> valor > 10);

const pessoas = [
    {nome: 'Gustavo', idade:24},
    {nome: 'Tereza', idade:64},
    {nome: 'Carlos', idade:53},
    {nome:'Lucas', idade:26},
    {nome:'Tadeu' , idade:12},
];

const pessoasComNomeGrande = pessoas.filter(obj =>obj.nome.length >= 5);
const pessoasComMais50 = pessoas.filter(obj => obj.idade > 50);
const terminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(terminaComA)
