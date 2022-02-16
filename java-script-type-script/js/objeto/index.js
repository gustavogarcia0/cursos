// const pessoa = {
//     nome : 'guastavo',
//     sobrenome: 'garcia'
// };

// const chave ='nome'

// console.log(pessoa.nome)
// console.log(pessoa['nome'])


const pessoa1 = new Object();

pessoa1.nome = 'gustavo';
pessoa1.sobrenome = 'garcia';
pessoa1.idade = 24;
pessoa1.falarNome = function (){
    // console.log(`${this.nome} estpa falando seu nome.`)
}

pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

const pessoa2 = {
     nome : 'eduarda',
     sobrenome: 'fraga'

}

for (let chave in pessoa1) {
    // console.log(pessoa1[chave])
}
// função para criar pessoas sem precisar programar
// Factory Function
function criaPessoa(nome, sobrenome){
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

// const p1 = criaPessoa('Gustavo', 'Garcia');
// console.log(p1.nomeCompleto)


// Função construtora 
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
// palavra new cria objeto vazio. 
// {} <- this. This atrela a chave na pessoal atual. Em caso de p2 com outra pessoa
const p1 = new Pessoa ('Gustavo', 'Garcia');
const p2 = new Pessoa('Eduarda', 'Fraga');
console.log(p1, p2)