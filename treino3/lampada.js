let turnOn = document.getElementById('turnOn')
let turnOff = document.getElementById('turnOff')
let lamp = document.getElementById('lamp')

function lampOn() {
    lamp.src = './imgs/ligada.jpg'
}

function lampOff() {
    lamp.src = './imgs/desligada.jpg'
}

function lampbroken() {
    lamp.src = './imgs/quebrada.jpg'
}


turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('dblclick', lampbroken)