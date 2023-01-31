
let numeracao = [8 , 3, 7, 9, 5]
numeracao.sort()

console.log (`${numeracao}`)

console.log(`O vetor tem ${numeracao.length} posicoes`)

let pos = numeracao.indexOf(8)
  
if (pos == -1) {
    console.log(`Valor não encontrado tente novamente`)
}else {
    console.log(`O valor selecionado esta na posicao ${pos}`)
}

