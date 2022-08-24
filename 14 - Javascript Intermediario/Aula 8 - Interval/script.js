

let contador = document.querySelector('#contador')

let count = 0



let intervalo = setInterval(function(){
count++
 contador .innerText = count
}, 500)

let pausar = document.querySelector('#pausar')

pausar.onclick = function(){
    clearInterval(intervalo)
}