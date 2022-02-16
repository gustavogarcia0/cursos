// Retorne a soma do dobro de todos os pares
// -> Filtrar os pares
// -> Dobrar os Valores
// -> Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
.filter((valor)=> valor % 2 === 0) // está pegando todos números pares === [ 50, 80, 2, 8, 22 ]
.map((valor) => valor * 2) // irá multiplicar por 2 todos os números retornados do filter (no caso todos números pares) === [ 100, 160, 4, 16, 44 ]
.reduce((ac, valor) => ac + valor); // irá retornar a soma de todos os valores retornado por map (no caso todos os pares multiplicados por 2) === 324

console.log(numerosPares);