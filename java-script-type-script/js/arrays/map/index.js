const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map(obj => obj * 2);
// console.log(numerosEmDobro)

const pessoas = [
    { nome: 'Gustavo', idade: 24 },
    { nome: 'Tereza', idade: 64 },
    { nome: 'Carlos', idade: 53 },
    { nome: 'Lucas', idade: 26 },
    { nome: 'Tadeu', idade: 12 },
];
const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => obj.idade);
const ID = pessoas.map((obj,indice) =>{
    obj.id = indice;
    return obj
})
console.log(ID)


