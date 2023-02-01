let num = document.getElementById('num')

let lista = document.getElementById('flista')

let result = document.getElementById('res')

let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function adicionar() {
     if (isNumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        result.innerHTML = ''
    }else {
        window.alert('Valor inválido ou já esta na lista')
     }
     num.value = ''
     num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores')
    }else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                  maior = valores[pos]
            if (valores[pos] < menor)
                  menor = valores[pos]
            
            media = soma / tot
        }
            

        result.innerHTML = ''
        result.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        result.innerHTML += `<p>O maior valor informado foi de ${maior}</p>`
        result.innerHTML += `<p>O menor valor informado foi de ${menor}</p>`
        result.innerHTML += `<p>A soma entre os valores selecionados foi de ${soma}</p>`
        result.innerHTML += `<p>A média entre os valores colocados é de ${media}</p>`
    }
}
