// try{
//     //É executada quando não há erros
// }

// catch (e){
//     //É executada quando há erros
// }

// finally{
//     // Sempre vai ser executado
// }


function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date');
    }

    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute:'2-digit',
        scond: '2-digit',
        hour12: false
    })
}
try{
    const data = new Date('01-01-1979 12:58:12');
    const hora = retornaHora(11);
    console.log(hora);
}catch(e){
    // Tratar erro
    console.log(e);
}finally{
    console.log('Tenha um bom dia.');
}