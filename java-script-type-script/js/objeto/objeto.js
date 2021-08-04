// function criaPessoa (nome,sobrenome,idade){
//     return{
//         nome: nome,
//         sobrenome: sobrenome, 
//         idade: idade
//     };
// }
//Caso os parametros sejam o mesmo titulo e o valor recebido essa é uma forma de simplificar
function criaPessoa (nome,sobrenome,idade){
    return{ nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('gustavo','garcia',23);
const pessoa2 = criaPessoa('eduarda','fraga',20);
const pessoa3 = criaPessoa('raquel','w',26);
const pessoa4 = criaPessoa('mario','junior',65);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);