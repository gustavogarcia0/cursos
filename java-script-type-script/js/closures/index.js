function retornaFuncao(){
    const nome = 'gustavo'
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao();

console.dir(funcao())