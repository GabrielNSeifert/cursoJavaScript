const inputTarefa = document.querySelector("#inputTarefa");
const botaoTarefa = document.querySelector("#criarTarefa");
const tarefas = document.querySelector("#tarefas");

function criarLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {
        if (inputTarefa.value == '') return;
        criarTarefa(inputTarefa.value);
        limparInput();
    }
})

function limparInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
};

function criarBotaoApagar (li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    li.appendChild(botaoApagar);
    botaoApagar.setAttribute('class', 'apagar');
}

function criarTarefa (textoInput){
    const li = criarLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    criarBotaoApagar(li);
    salvarTarefas();
}

botaoTarefa.addEventListener('click', function(e){
    if (inputTarefa.value == '') return;
    criarTarefa(inputTarefa.value);
});

document.addEventListener ('click', function(e){
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
    
})

function salvarTarefas() {
    const liTarefas = document.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerHTML;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);

}

function adiconarTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas){
        criarTarefa(tarefa);
    }
}

adiconarTarefasSalvas();
