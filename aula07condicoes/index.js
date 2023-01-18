

function Calcular() {
    txtv = document.getElementById('ivel')
    res = document.getElementById('ress')
    vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>` 
    if (vel > 70) {
     res.innerHTML += `<p>Voçê ultrapassou os 70Km/h e foi <strong>MULTADO! em um valor de R$ 300</strong>.</p>`
    }else {
        res.innerHTML += `OK`
    }
    
}

