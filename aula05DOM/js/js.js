  
a = window.document.getElementById('container')

  function Clique() {
    a.innerText = 'Clicou!!!!!!!!'
    a.style.background = 'green'
}

  function Entrar() {
    a.innerText = 'O mouse esta aqui!'
  }

  function Sair() {
    a.innerText = 'O mouse saiu!'
    a.style.background = 'darkred'
  }