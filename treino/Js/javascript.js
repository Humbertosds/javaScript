

function Somar() {
    txts1 = document.getElementById('isoma')
    txts2 = document.getElementById('isoma2')
    re = document.getElementById('Soma')
    s1 = Number(txts1.value)
    s2 = Number(txts2.value)
    s = s1 + s2

    re.innerHTML = `O valor entre os números é ${s}`
}

function multi() {
    txtm1 = document.getElementById('ivezes')
    txtm2 = document.getElementById('ivezes2')
    res = document.getElementById('multipli')
    m1 = Number(txtm1.value)
    m2 = Number(txtm2.value)
    m = m1 * m2

    res.innerHTML = `O valor entre os números é de ${m}`
}

function dividir() {
    txtd1 = document.getElementById('idividir1')
    txtd2 = document.getElementById('idividir2')
    resp = document.getElementById('divi')
    d1 = Number(txtd1.value)
    d2 = Number(txtd2.value)
    
    d = d1 / d2

    resp.innerHTML = `A divisão entre os números é de ${d}`
}

function subtracao() {
    txtsub1 = document.getElementById('isub1')
    txtsub2 = document.getElementById('isub2')
    respo = document.getElementById('sub')
    sub1 = Number(txtsub1.value)
    sub2 = Number(txtsub2.value)
    sub = sub1 - sub2

    respo.innerHTML = `A divisão entre os números é de ${sub}`
}
