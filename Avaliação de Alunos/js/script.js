const form = document.getElementById('form-registro');
const tabela = document.getElementById('tabela-alunos').querySelector('tbody');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const tri1 = parseFloat(document.getElementById('1tri').value);
    const tri2 = parseFloat(document.getElementById('2tri').value);
    const tri3 = parseFloat(document.getElementById('3tri').value);
    const frequencia = document.getElementById('frequencia').value
    const media = ((tri1 + tri2 + tri3) / 3).toFixed(1);

    const registro = document.createElement('tr');

    registro.innerHTML =
    "<td>" + nome + "</td>" +
    "<td>" + tri1 + "</td>" +
    "<td>" + tri2 + "</td>" +
    "<td>" + tri3 + "</td>" +
    "<td>" + frequencia + "%</td>" +
    "<td>" + media + "</td>";

    tabela.appendChild(registro);
    form.reset();
});