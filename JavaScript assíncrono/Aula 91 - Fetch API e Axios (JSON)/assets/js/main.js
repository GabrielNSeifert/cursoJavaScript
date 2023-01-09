fetch('pessoas.json')
    .then(response => response.json()
    .then(json => showData(json)))

function showData(json) {
    const table = document.createElement('table')

    for(let pessoas of json) {
        const tr = document.createElement('tr')

        let td = document.createElement('td')
        td.innerHTML = pessoas.nome
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = pessoas.idade
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = pessoas.salario
        tr.appendChild(td)

        table.appendChild(tr)
    }

    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table)
}