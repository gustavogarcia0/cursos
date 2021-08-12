const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto = getDayWeekText(diaSemana);


function getDayWeekText(diaSemana){
    let diaSemanaTexto;
switch(diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
    break;
    
    case 1:
        diaSemanaTexto = 'Segunda';
    break;
    
    case 2:
        diaSemanaTexto = 'Terça';
    break;
    
    case 3:
        diaSemanaTexto = 'Quarta';
    break;
    
    case 4:
        diaSemanaTexto = 'Quinta';
    break;
    
    case 5:
        diaSemanaTexto = 'Sexta';
    break;
    
    case 6:
        diaSemanaTexto = 'Sabádo';
    break;
    
    case 7:
        diaSemanaTexto = '';
        break;
    }
    return diaSemanaTexto;
}
console.log(diaSemana, diaSemanaTexto);



// if (diaSemana === 0){
    //     diaSemanaTexto = 'Domingo';
// }else if(diaSemana === 1){
//     diaSemanaTexto = 'segunda';
// }else if(diaSemana === 2){
//     diaSemanaTexto = 'Terça';
// }else if(diaSemana === 3){
//     diaSemanaTexto = 'quarta';
// }else if(diaSemana === 4){
//     diaSemanaTexto = 'quinta';
// }else if(diaSemana === 5){
//     diaSemanaTexto = 'sexta';
// }else if(diaSemana === 6){
//     diaSemanaTexto = 'sabádo';
// }else{
//     diaSemanaTexto = '';
// }
