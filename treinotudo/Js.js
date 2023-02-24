

function soma() {
    let in1 = document.getElementById('inum1')
    let in2 = document.getElementById('inum2')
    let res = document.getElementById('res')

    n1 = Number(in1.value)
    n2 = Number(in2.value)

    resu = n1 * n2

    res.innerHTML = `O resultado dos números colocados é de ${resu}`
}