function criaPessoa (nome,sobrenome,idade){
    return{
        nome: nome,
        sobrenome: sobrenome, 
        idade: idade
    };
}

const pessoa1 = criaPessoa('gustavo','garcia','23');

console.log(pessoa1);