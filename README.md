# Biblioteca Digital - Lista de Livros

Este projeto é uma aplicação web simples para exibir uma lista de livros com seus detalhes, permitindo ao usuário visualizar a sinopse em um modal acessível, alternar entre tema claro e escuro, além de exportar a lista para arquivos Excel e PDF.

---

## Funcionalidades

- Exibição da lista de livros com capa, título, autor, editora e número de páginas.
- Modal para exibição da sinopse do livro com foco preso para melhorar a acessibilidade.
- Botões para exportar a lista completa para:
  - Excel (.xlsx) usando a biblioteca [SheetJS](https://sheetjs.com/)
  - PDF (.pdf) usando a biblioteca [jsPDF](https://github.com/parallax/jsPDF)
- Alternância entre modo claro e modo escuro para melhor usabilidade.

---

## Tecnologias utilizadas

- HTML5 e CSS3 (incluindo suporte a tema claro/escuro)
- JavaScript ES6+
- [SheetJS (xlsx)](https://sheetjs.com/) para exportação Excel
- [jsPDF](https://github.com/parallax/jsPDF) para exportação PDF
- FontAwesome para ícones (opcional)

---

## Como usar

1. Clone este repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` em um navegador moderno (Chrome, Firefox, Edge, etc).
3. Visualize a lista de livros, clique no botão "Sinopse" para ver a descrição detalhada em um modal.
4. Use os botões "Exportar Excel" e "Exportar PDF" para baixar a lista em seus respectivos formatos.
5. Use o botão "Modo Escuro" para alternar entre os temas claro e escuro.

---

## Estrutura do projeto
├── index.html # Arquivo principal com HTML e referência a CSS/JS
├── stile.css # Estilos CSS para layout, modal e temas
├── script.js # Lógica JavaScript para interação e exportação
└── README.md # Este arquivo de documentação

---

## Acessibilidade

- O modal possui "focus trap", que mantém o foco dentro do modal enquanto ele estiver aberto.
- Modal pode ser fechado com o botão de fechar ou tecla `Esc`.
- Uso de atributos ARIA para melhor suporte a leitores de tela.

---

## Personalização

- Para alterar a lista de livros, edite o array `allBooks` no arquivo `script.js` com os dados desejados.
- Para alterar estilos, modifique o arquivo `stile.css`.

---

## Dependências externas

As seguintes bibliotecas são carregadas via CDN:

- SheetJS (XLSX):  
```html
<script src="https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js"></script>

FontAwesome (para ícones):
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

Contribuições
Contribuições são bem-vindas! Para sugerir melhorias ou reportar problemas, abra uma issue ou envie um pull request.

