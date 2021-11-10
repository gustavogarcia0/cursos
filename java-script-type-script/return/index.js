// return
// retorna um valor
// termina a função


//Função propriamente dita sem o return não faz nada. O return faz com que o valor e resultado seja retornado, lembrando que console é para exibição não para retorno

// function soma(a,b){
//     return a + b;
// }

// console.log(soma(2,5));



// function criaPessoa(nome, sobrenome){
//     return{
//         nome: nome,
//         sobrenome: sobrenome
//     }
// }

// const p1 = criaPessoa ('gustavo', 'garcia')

// console.log(p1)

// function falaFrase(comeco){
//     function falaresto(resto){
//         return comeco + ' ' + resto;
//     }
//     return falaresto;
// }

// const olaMundo = falaFrase('Olá');

// console.log(olaMundo('mundo'))


function duplica(n){
    return n * 2;
}

function triplica(n) {
    return n * 3;
}
function quadriplica(n) {
    return n * 4;
}
console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica (2))