

let formulario = document.querySelector('#formCadastro')

formulario.onsubmit = function(evento){
    evento.preventDefault() // Previnir de passar para proxima pagina sem validar
    
    //console.log(document.forms['formCadastro']['nome'].value) // para pegar o valor dele, adcione o  .value

let temErro = false

let = inputNome = document.forms['formCadastro']['nome']

   if (!inputNome.value){
    temErro = true
    inputNome.classList.add('inputError')
    

    let span = inputNome.nextSibling.nextSibling
    span.innerText = 'Digite o nome corretamente'
    
   }else{
    temErro = false
    inputNome.classList.remove('inputError')

    let span = inputNome.nextSibling.nextSibling
    span.innerText = ''
   }



   let = inputEmail = document.forms['formCadastro']['email']

   if (!inputEmail.value){
    temErro = true
    inputEmail.classList.add('inputError')
    

    let span = inputEmail.nextSibling.nextSibling
    span.innerText = 'Digite o e-mail corretamente'
   }else{
    
    inputEmail.classList.remove('inputError')
    
    let span = inputEmail.nextSibling.nextSibling
    span.innerText = ''
   }



   let = selectCidade = document.forms['formCadastro']['cidade']

   if (!selectCidade.value){
    temErro = true
    selectCidade.classList.add('inputError')
    

    let span = selectCidade.nextSibling.nextSibling
    span.innerText = 'Selecione uma cidade'
   }else{
    
    selectCidade.classList.remove('inputError')
    
    let span = selectCidade.nextSibling.nextSibling
    span.innerText = ''
   }

   if(!temErro){
       formulario.submit()

   }
}


