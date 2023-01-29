
let numeracao = [8 , 3, 7, 9, 5]

console.log (`${numeracao}`)

for(let pos in numeracao) {
      console.log(numeracao[pos])
}

let pos = numeracao.indexOf(5670)
  
if (pos == -1) {
    console.log(`Valor não encontrado tente novamente`)
}else {
    console.log(`O valor selecionado esta na posicao ${pos}`)
}

