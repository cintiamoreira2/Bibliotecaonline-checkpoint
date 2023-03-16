let novosCards = document.querySelector('.novosCards')

let cards = document.querySelector('.cards')

let titulo = document.querySelector('.titulo')

let imagem = document.querySelector('.imagem')

let autor = document.querySelector('.autor')

let textArea = document.querySelector('#textArea')

let enviar = document.querySelector('.enviar')

enviar.addEventListener('click', function(e){
    e.preventDefault()
    novosCards.innerHTML += `<div id="cards">
<h2>${titulo.value}</h2>
<img src="${imagem.value}" class="imgStilos">
<h3>${autor.value}</h3>
<p>${textArea.value}</p>
</div>`
})

