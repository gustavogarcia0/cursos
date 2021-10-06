function keyPresEvent(){
    let inputTarefa = document.querySelector('.input-teste-1');
    inputTarefa.addEventListener('keypress', (e)=>{
        if(e.keyCode === 13){
            if(!inputTarefa.value) return;

        }
    })
}

function limparInput(){
    let inputTarefa = document.querySelector('.input-teste-1');
    inputTarefa.value = '';
    inputTarefa.focus();
}

function selectForm() {
    const form = document.querySelector('.enviar');
    form.addEventListener('click', function(e){
    e.preventDefault();
    pegarTarefa();
    });
}
function pegarTarefa(){
    let inputTarefa = document.querySelector('.input-teste-1');
    let valorTarefa = inputTarefa.value;
    if (valorTarefa == ''){
        return;
    }
    else {
        adicionarTarefaNoHTML(valorTarefa);
    }
}


function adicionarTarefaNoHTML(valorTarefa){
    const pegarContainerForm = document.querySelector('.tarefa');
    pegarContainerForm.innerHTML += `<p>${valorTarefa}</p>`;
    adicionarRemoveNaTarefa();
    salvarTarefas();
    limparInput();
    
}

function salvarTarefas(){
    const tarefa = document.querySelector('.tarefa');
    const todastarefas = tarefa.querySelectorAll('p')
    const listaDeTarefas = [];
    for (let tarefas of todastarefas){
        let tarefaTexto = tarefas.innerText;
        tarefaTexto = tarefaTexto.replace('Completo/Remover', '').trim();
        listaDeTarefas.push(tarefaTexto);

        const tarefasJSON = JSON.stringify(listaDeTarefas);
        localStorage.setItem('tarefas', tarefasJSON);
    }
}

function adicionarRemoveNaTarefa(){
    const pegarTarefa = document.querySelectorAll('.tarefa p');
    pegarTarefa.forEach((tarefa) =>{
    const criarButton = document.createElement('button');
        criarButton.classList = 'removerTarefa';
        criarButton.type = 'submit'
        criarButton.innerText = 'Completo/Remover';
        if (tarefa.firstElementChild === null){
            tarefa.appendChild(criarButton);
            removerTarefa();
            }
        else{
            return;
        }
    });
}

function removerTarefa(){
    const selecionaParagrafo = document.querySelectorAll('.removerTarefa');
    selecionaParagrafo.forEach((element)=>{
        let selecionaPai = element.closest('p');
        element.addEventListener('click',function(event){
            event.preventDefault();
            selecionaPai.remove();
            salvarTarefas();
        })
    })
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    for (let tarefa of listaDeTarefas){
        adicionarTarefaNoHTML(tarefa);
    }
}

selectForm();
keyPresEvent();
adicionaTarefasSalvas();