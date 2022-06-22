let arrayEstados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MS', 'MT', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']

for (let i = 0; i < arrayEstados.length; i += 1) {
    let select = document.getElementById('estado-input');
    let createState = document.createElement('option');
    select.appendChild(createState);
    select.children[i].innerText = arrayEstados[i];
}