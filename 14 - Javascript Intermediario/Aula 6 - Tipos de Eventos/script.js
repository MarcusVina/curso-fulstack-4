

let quadrado = document.querySelector('.quadrado')

function minhaFuncao(evento){
    console.log(evento.key)
}

// quadrado.onclick = minhaFuncao

// quadrado.onmousemove = minhaFuncao - detecta o movimento do mouse quando eu passar 

// quadrado.onmouseenter = minhaFuncao

// quadrado.onmouseout = minhaFuncao

// window.addEventListener('resize', minhaFuncao)

window.addEventListener('keypress', minhaFuncao)