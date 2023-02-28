

function insert(n) {
    document.getElementById('current-calc').innerHTML += n;

}

function clean() {
    document.getElementById('current-calc').innerHTML = "";
}

function tirar1() {
    resultado = document.getElementById('current-calc').innerHTML;
    document.getElementById('current-calc').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {
    resultado = document.getElementById('current-calc').innerHTML;
    if(resultado) {
        document.getElementById('current-calc').innerHTML = eval(resultado)
    }

}