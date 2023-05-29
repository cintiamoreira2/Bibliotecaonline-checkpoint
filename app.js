/* let cards = document.querySelector('.novosCards')

let titulo = document.querySelector('.titulo')

let imagem = document.querySelector('.imagem')

let autor = document.querySelector('.autor')

let textArea = document.querySelector('#textArea')

let enviar = document.getElementById('enviar')

enviar.addEventListener('click', function(){

    //if(enviar !== 0 && enviar !== null) {}


cards.innerHTML += `<div id="cards">
<h2>${titulo.value}</h2>
<img src="${imagem.value}" class="imgStilos">
<h3>${autor.value}</h3>
<p>${textArea.value}</p>
</div>`})
 */

// recebe elemento formulario
const inserir = document.querySelector('#inserir');

// recebe container onde serao adicionados os cards
const novosCards = document.querySelector('#novosCards');

// lista que ira receber os objetos cards
var cards = [];

// funcao que cria o template e adiciona o card ao container
const addCard = function (titulo, descricao, url) {
    const template = `
    <div class="card">
       <img src="${url}" alt="${titulo}" >
       <p>${titulo}</p>
       <p>${descricao}</p>
     </div>
    `;

    novosCards.innerHTML += template;
}

const form = document.querySelector('form'); // Adiciona a referência ao elemento <form>

// event onsubmit - ao clicar botao de add imagens
form.onsubmit = function (event) {
    event.preventDefault();
    var titulo = document.querySelector('#titulo').value;
    var descricao = document.querySelector('#descricao').value;
    var url = document.querySelector('#url').value;

    // criar o card ao clicar em submit
    var card = {
        titulo: titulo,
        descricao: descricao,
        url: url
    };

    // adicionar o card à lista cards
    cards.push(card);

    // executa funcao que add o card ao DOM
    addCard(titulo, descricao, url);
    
// Limpa os campos após adicionar o card
document.querySelector('#titulo').value = '';
document.querySelector('#descricao').value = '';
document.querySelector('#url').value = '';
    
}


