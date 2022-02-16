const a1 = [1,23,3]
const a2 = [4,5,6]
// const a1 = num1 + nums = Transforma em string 
//const a3 = a1.concat(a2, [7, 8, 9], 'gustavo') = para concatenar e adicionar
//... rest -> ... spread
//No caso de array literal, caso adicione ele sem o spread, ele ira adicionar o array, e não o valor dele em si. 
//O spread é utilizado para adicionar os valores em uma variavel array.
const a3 = [...a1, 'Gustavo', ...a2, ...[7,8,9]]
console.log(a3)