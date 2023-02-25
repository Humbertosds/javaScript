num = [2, 6, 3, 5, 8, 9]
num.sort()

console.log(`${num}`)

console.log(`Existem ${num.length} valores`)

posi = num.indexOf(5)

if (posi === -1) {
    console.log(`Número não identificado`)
}else {
    console.log(`O valor esta na posicao ${posi}`)
}
