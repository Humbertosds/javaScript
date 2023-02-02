function relogio() {
    let hora = new Date()
    let horas = hora.getHours()
    let min = hora.getMinutes()
    let seg = hora.getSeconds()
    let tot = horas + ":" + min + ":" + seg
    let rel = document.getElementById('relogio')
    rel.innerHTML = tot
}
setInterval(relogio,500)