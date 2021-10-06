function selectForm() {
    const form = document.querySelector('.formContainer');
    form.addEventListener('submit', function(e){
    e.preventDefault();
    pegarTarefa();
    });
}
function pegarTarefa(){
    const valueTarefa = document.querySelector('.input-teste-1').value;
    adicionarTarefaNoHTML(valueTarefa);
}


function adicionarTarefaNoHTML(valueTarefa){
    const pegarContainerForm = document.querySelector('.tarefa');
    pegarContainerForm.innerHTML += `<p>${valueTarefa}</p>`;
}


function adicionarRemoveNaTarefa(){
    const pegarTarefa = document.querySelectorAll('.tarefa p');
    pegarTarefa.forEach((tarefa) =>{
        let buttonDelete = document.createElement('button');
        tarefa.querySelector.appendChild(buttonDelete);

    })
}
selectForm();