// funcao que tem a palavra function, tem uma variavel especial que sustenta todos os parametros passados para ela
// function funcao(){
//     let total = 0;
//     for(let argumento of arguments){
//         total += argumento;
//     }
//     console.log(total)
// }

// funcao(1,2,3,4,5,6);

// Number + undefined = NaN
// function funcao(a,b) {
//     console.log(a + b)
// }

// funcao(1);

// Maneiras de tratamento para erro a cima.
// function funcao(a, b) {
//     b = b ||0;
//     console.log(a + b)
// }

// funcao(1);
//Maneira nova de tratamento
// Pra enviar um valor a ser ignorado no parametro é nececssário undefined
// function funcao(a = 0, b = 0, c = 0) {
//     console.log(a + b + c)
// }

// funcao(10,undefined,4);


//atribuição e desestruturação
// function funcao({nome,sobrenome,idade}) {
//     console.log(nome, sobrenome, idade);
// }
// let obj = { nome: 'Gustavo', sobrenome: 'garcia', idade: 23 }
// funcao(obj);

// continuação  ^^^^^^^^^^^^^^^^

// function funcao([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
// }

// funcao(['gustavo','garcia',23]);

// rest operator (...) = [20,30,40,50]
conta = function (operador, acumulador, ...numeros){
    for(let numero of numeros){
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '/') acumulador /= numero
        if (operador === '*') acumulador *= numero
    }
    console.log(acumulador)
};

conta('-',100, 20,30,40,50);