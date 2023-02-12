

function Calcular() {
    let nome = document.getElementById('inome').value;
    let altura = document.getElementById('ialtura').value;
    let peso = document.getElementById('ipeso').value;
    let resu = document.getElementById('res')

    if(nome !== '' && altura !== '' && peso !== '') {
        
    }else {
        resu.textContent = 'Preencha os campos acima'
        
    }
}