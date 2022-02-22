// Prototype está por padrão em todos os objetos criados. O único detalhe é que é necessário definir ele.

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

//Não funciona com arrow function
Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
};

// instância 
const p1 = new Pessoa ('Gustavo', 'Garcia');
const p2 = new Pessoa ('Eduarda', 'Fraga');

console.log(p1.nomeCompleto())
console.log(p2);