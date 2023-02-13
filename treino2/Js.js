function Calcular() {
    let nome = document.getElementById('inome').value;
    let altura = document.getElementById('ialtura').value;
    let peso = document.getElementById('ipeso').value;
    let resu = document.getElementById('res')
    if(nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1)
        let classificacao = ''
        if (valorIMC < 18.5) {
            classificacao = 'Abaixo do Peso'
        }else if (valorIMC < 25) {
            classificacao = 'Peso ideal'
        }else if (valorIMC < 30) {
            classificacao = 'Levemente acima do peso'
        }else if (valorIMC < 35) {
            classificacao = 'Acima do peso'
        }else if (valorIMC < 40) {
            classificacao = 'Bem acima do peso'
        }else {
            classificacao = 'OBESO(A)'
        }
        resu.textContent = `${nome} seu IMC é ${valorIMC} e voçê esta ${classificacao}`;
    }else {
        resu.textContent = 'Preencha os campos acima'
        
    }
}