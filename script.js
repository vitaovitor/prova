const tableBody = document.querySelector('#quartosTabela')
const URL = 'http://localhost:8000/quartos.php'

function carregarQuartos() {
    fetch(URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    })
        .then(response => response.json())
        .then(quartos => {
            tableBody.innerHTML = ''


            quartos.forEach(quartos => {
                const tr = document.createElement('tr')
                tr.innerHTML = `
            
            <td>${quartos.numero}</td>
            <td>${quartos.tipo}</td>
            <td>${quartos.disponivel}</td>
            <td>${quartos.preco}</td>
            `
                tableBody.appendChild(tr)

            })
        })
}
carregarQuartos()