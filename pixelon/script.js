// Navbar
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('active');
}


// Carrosel


let cont = 1; // Inicia com o botão de rádio 1 ativo

// Define o primeiro botão de rádio como "checked" no início
document.getElementById('radio1').checked = true;

// Configura o intervalo para trocar as imagens a cada 5 segundos
setInterval(() => {
  proximaImg();
}, 5000);

function proximaImg() {
  cont++;

  // Reinicia o contador se ultrapassar o número de imagens
  if (cont > 3) {
    cont = 1;
  }

  // Define o botão de rádio correspondente como "checked"
  document.getElementById('radio' + cont).checked = true;
}



// Card produtos
// Selecionar todos os elementos com a classe "card"
const cards = document.querySelectorAll(".card");

// Adicionar eventos separados para cada elemento com a classe "card"
cards.forEach(card => {
  card.onmousemove = e => updateMousePosition(e, card);
});

// Função para atualizar as propriedades CSS com as coordenadas do mouse
function updateMousePosition(event, card) {
  const rect = card.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  card.style.setProperty("--mouse-x", `${x}px`);
  card.style.setProperty("--mouse-y", `${y}px`);
}


