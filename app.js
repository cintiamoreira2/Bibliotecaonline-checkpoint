// script.js - Leiturama Atualizado

// Variáveis DOM
const registerForm = document.getElementById("register");
const bookNameInput = document.getElementById("bookName");
const authorInput = document.getElementById("author");
const publisherInput = document.getElementById("publisher");
const pagesInput = document.getElementById("pages");
const synopsisInput = document.getElementById("synopsis");

const searchInput = document.getElementById("searchBook");
const btnSearch = document.getElementById("btnSearch");

const listOfAllBooks = document.getElementById("listOfAllBooks");
const emptyBookList = document.getElementById("emptyBookList");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const txtSynopsis = document.getElementById("txtSynopsis");
const btnCloseModal = document.getElementById("btnCloseModal");

let allBooks = [];

// Inicializa a lista com dados do localStorage
function init() {
  const savedBooks = localStorage.getItem("leituramaBooks");
  if (savedBooks) {
    allBooks = JSON.parse(savedBooks);
  }
  renderBookList(allBooks);
}

// Salva dados no localStorage
function saveToStorage() {
  localStorage.setItem("leituramaBooks", JSON.stringify(allBooks));
}

// Renderiza lista de livros passada como parâmetro
function renderBookList(books) {
  listOfAllBooks.innerHTML = "";

  if (books.length === 0) {
    emptyBookList.style.display = "block";
    return;
  }
  emptyBookList.style.display = "none";

  books.forEach(book => {
    // Criar container do livro
    const bookDiv = document.createElement("div");
    bookDiv.dataset.bookName = book.bookName;

    // Imagem placeholder (pode trocar por imagem real, se desejar)
    const img = document.createElement("img");
    img.src = book.imageUrl || "https://via.placeholder.com/90x130?text=Livro";
    img.alt = `Capa do livro ${book.bookName}`;
    bookDiv.appendChild(img);

    // Título
    const titleP = document.createElement("p");
    titleP.className = "bookTitle";
    titleP.textContent = book.bookName;
    bookDiv.appendChild(titleP);

    // Autor
    const authorP = document.createElement("p");
    authorP.textContent = `Autor: ${book.author}`;
    bookDiv.appendChild(authorP);

    // Editora
    const publisherP = document.createElement("p");
    publisherP.textContent = `Editora: ${book.publisher}`;
    bookDiv.appendChild(publisherP);

    // Páginas
    const pagesP = document.createElement("p");
    pagesP.textContent = `Páginas: ${book.pages}`;
    bookDiv.appendChild(pagesP);

    // Botão Sinopse
    const btnSynopsis = document.createElement("button");
    btnSynopsis.className = "actionButton btnSynopsis";
    btnSynopsis.type = "button";
    btnSynopsis.innerHTML = `<i class="fas fa-file-alt"></i> Sinopse`;
    btnSynopsis.setAttribute("aria-label", `Ver sinopse do livro ${book.bookName}`);
    btnSynopsis.addEventListener("click", () => {
      openModal(book.bookName, book.synopsis);
    });
    bookDiv.appendChild(btnSynopsis);

    // Botão Remover
    const btnRemove = document.createElement("button");
    btnRemove.className = "actionButton btnRemove";
    btnRemove.type = "button";
    btnRemove.innerHTML = `<i class="fas fa-trash-alt"></i> Remover`;
    btnRemove.setAttribute("aria-label", `Remover livro ${book.bookName}`);
    btnRemove.addEventListener("click", () => {
      removeBook(book.bookName);
    });
    bookDiv.appendChild(btnRemove);

    listOfAllBooks.appendChild(bookDiv);
  });
}

// Função para abrir modal com sinopse
function openModal(title, synopsis) {
  modalTitle.textContent = `Sinopse do livro "${title}"`;
  txtSynopsis.textContent = synopsis;
  modal.style.display = "block";
  modal.focus();
}

// Fecha modal
function closeModal() {
  modal.style.display = "none";
}

// Remove livro da lista e atualiza localStorage e tela
function removeBook(bookName) {
  if (confirm(`Tem certeza que deseja remover o livro "${bookName}"?`)) {
    allBooks = allBooks.filter(book => book.bookName.toLowerCase() !== bookName.toLowerCase());
    saveToStorage();
    renderBookList(allBooks);
  }
}

// Busca livros por parte do nome
function searchBooks(query) {
  const filteredBooks = allBooks.filter(book =>
    book.bookName.toLowerCase().includes(query.toLowerCase())
  );
  renderBookList(filteredBooks);
}

// Validação simples do formulário
function validateForm() {
  const errors = [];
  if (!bookNameInput.value.trim()) errors.push("Título do livro é obrigatório.");
  if (!authorInput.value.trim()) errors.push("Autor é obrigatório.");
  if (!publisherInput.value.trim()) errors.push("Editora é obrigatória.");
  if (!pagesInput.value || pagesInput.value < 1) errors.push("Número de páginas inválido.");
  if (!synopsisInput.value.trim()) errors.push("Sinopse é obrigatória.");

  // Checar duplicata
  const exists = allBooks.some(book =>
    book.bookName.toLowerCase() === bookNameInput.value.trim().toLowerCase()
  );
  if (exists) errors.push("Este livro já está cadastrado.");

  return errors;
}

// Limpa inputs do formulário
function clearForm() {
  registerForm.reset();
  bookNameInput.focus();
}

// Eventos

// Ao enviar formulário, validar e adicionar livro
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const errors = validateForm();
  if (errors.length > 0) {
    alert(errors.join("\n"));
    return;
  }
  const newBook = {
    bookName: bookNameInput.value.trim(),
    author: authorInput.value.trim(),
    publisher: publisherInput.value.trim(),
    pages: Number(pagesInput.value),
    synopsis: synopsisInput.value.trim(),
    imageUrl: null // placeholder, pode implementar upload futuramente
  };
  allBooks.push(newBook);
  saveToStorage();
  renderBookList(allBooks);
  clearForm();
});

// Botão buscar por título (usando input search)
btnSearch.addEventListener("click", () => {
  searchBooks(searchInput.value.trim());
});

// Busca ao digitar no input
searchInput.addEventListener("input", () => {
  if (searchInput.value.trim() === "") {
    renderBookList(allBooks);
  }
});

// Fechar modal ao clicar no botão
btnCloseModal.addEventListener("click", closeModal);

// Fechar modal ao clicar fora do conteúdo
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Fechar modal com ESC (acessibilidade)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "block") {
    closeModal();
  }
});

// Inicialização
init();
