const pontuacaoUsuario = 1999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário vip' : 'Usuário normal';


const corUsuario = 'branco';
                                //Fall back
const corPadr = corUsuario || 'preta';

console.log(nivelUsuario, corPadr);
// if(pontuacaoUsuario >= 1000){
//     console.log('vip');
// } else {
//     console.log('usuário normal');
// }

