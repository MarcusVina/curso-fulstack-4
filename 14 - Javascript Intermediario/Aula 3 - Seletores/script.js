
// SELETOR POR ID 
document.querySelector('#titulo').innerHTML = '<i>EXEMPLO</i>'



// SELETOR POR TAG 
document.querySelector('a').innerText = '<b>Teste ancora</b>'

/*document.querySelectorAll('a') // Vai selecionar todos os ancoras */


// SELECIONANDO MAIS DE 1 ITEM POR TAG
let ancoras = document.querySelectorAll('a')

ancoras.forEach(function(elemento){ // Função anonima / calback
elemento.innerHTML = 'Teste'
})

//SELECIONANDO MAIS DE 1 ITEM POR CLASSE
let boxes = document.querySelectorAll('.box')


boxes.forEach(function(box, index){

box.innerHTML = 'Box ' + (index + 1)
})