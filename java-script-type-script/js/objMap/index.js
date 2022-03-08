const pessoas = [
    {id: 5, nome: 'Gustavo'},
    {id: 4, nome: 'Eduarda'},
    {id: 1, nome: 'Eloisa'},
];

// const novasPessoas = {}
// for (const pessoa of pessoas){
//     const {id} = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

for (const pessoa of novasPessoas){
    // console.log(pessoa)
}

for (const [identifier, {id, nome}] of novasPessoas){
    // console.log(nome);
}

novasPessoas.delete(4);
console.log(novasPessoas)