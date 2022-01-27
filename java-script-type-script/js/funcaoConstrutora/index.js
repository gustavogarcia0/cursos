// função construtora -> objetos
// função fabrica -> objetos

//Constutora -> Pessoa (new)

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ' sou metodo')
    };
}
const p1 = new Pessoa('Gustavo', 'Garcia');
p1.metodo( );