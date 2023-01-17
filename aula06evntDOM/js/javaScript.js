function Somar() {
    tn1 = document.getElementById('inum1')
    tn2 = document.getElementById('inum2')
    s = document.getElementById('res')
    n1 = Number(tn1.value)
    n2 = Number(tn2.value)
    s = n1 + n2
    res.innerHTML = `A soma entre eles é de ${s}`
}