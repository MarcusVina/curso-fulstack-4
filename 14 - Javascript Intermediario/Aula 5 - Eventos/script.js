

let botaoTeste = document.querySelector('#botaoTeste')

let contador = 0

function cliqueBotao(){
    contador++
    console.log('mensagem 1')

    if (contador >=5) // so vai remover o contador quando for maior ou igual a 5

    botaoTeste.removeEventListener('click', cliqueBotao)
}

// addEventListener 
 botaoTeste.addEventListener('click', cliqueBotao)



// onclick 

// botaoTeste.onclick = cliqueBotao