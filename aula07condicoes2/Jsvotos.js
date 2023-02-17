idade = 21
if (idade < 16) {
    console.log('Não Vota')
}else{
    if (idade >= 16 && idade < 18) {
        console.log('Vota Opcionalmente')
    }else if (idade >= 18 && idade < 70) {
        console.log('Vota')
    }else {
        console.log('Vota Opcionalmente')
    }
}
