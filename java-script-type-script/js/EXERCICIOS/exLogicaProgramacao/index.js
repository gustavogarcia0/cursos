// Escreva uma função que recebe um numero e retorna o seguinte:
// Número divisivel por 3 = fizz
// Número divisivel por 5 = buzz
// Número divisivel por 3  e 5 = fizzbuzz
// Número NÃO é divisivel por 3 e 5 = Retorna próprio Número
// Checar se o número é realmente número = retorna o próprio Número
// Use a função com números de 0 a 100

function fizzBuzz(numero){
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

for(let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}