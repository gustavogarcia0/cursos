const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function (acumulador, valor){
    if(valor % 2 === 0 ) acumulador += valor;
    return acumulador;
}, 0);


const pessoas = [
    { nome: 'Gustavo', idade: 24 },
    { nome: 'Tereza', idade: 64 },
    { nome: 'Carlos', idade: 53 },
    { nome: 'Lucas', idade: 26 },
    { nome: 'Tadeu', idade: 12 },
];


const velha = pessoas.reduce((acumulador, valor)=>{
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
}, 0);

console.log(velha);