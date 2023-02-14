let turnOn = document.getElementById('turnOn')
let turnOff = document.getElementById('turnOff')
let lamp = document.getElementById('lamp')
let turnOnOff = document.getElementById('turnOnOff')

function lampOn() {
    lamp.src = './imgs/ligada.jpg'
}

function lampOff() {
    lamp.src = './imgs/desligada.jpg'
}

function lampbroken() {
    lamp.src = './imgs/quebrada.jpg'
}

function lampOnOff() {
    if (turnOnOff.textContent == 'Ligar') {
        lampOn()
        turnOnOff.textContent = 'Desligar'
    }else {
        lampOff()
        turnOnOff.textContent = 'Ligar'
    }
}


turnOnOff.addEventListener('click', lampOnOff)
lamp.addEventListener('dblclick', lampbroken)