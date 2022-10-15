const form = document.getElementById('form-agenda');
const contatos = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaTotal();
});

function adicionaLinha() {

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    contatos.push(inputNomeContato.value);

    let linha = '<tr>';
    linha += `<td>${inputNumeroContato.value}<td>`;
    linha += `<td>${inputNomeContato.value}<td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaTotal() {
    const total = somaContatos();

    document.getElementById('total-final').innerHTML = total;
}

function  somaContatos() {
    let somaDosContato = 0
    for (let i = 0; i < contato; i++) {
        somaDosContato += contatos[i];
    }

    return somaDosContato;
}