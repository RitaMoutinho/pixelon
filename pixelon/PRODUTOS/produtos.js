// Navbar
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('active');
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

// Toggle filtro visível
document.querySelectorAll('.toggle-filter').forEach(element => {
  element.addEventListener('click', function() {
    const targetId = this.getAttribute('data-target');
    const filterOptions = document.getElementById(targetId);

    // No mobile, alterna a visibilidade das opções
    if (window.innerWidth <= 768) {
      filterOptions.style.display = filterOptions.style.display === 'none' ? 'block' : 'none';
    }
  });
});

// Definir valores iniciais
const priceSlider = document.getElementById('price-slider');
const priceDisplay = document.getElementById('price-display');
const colorFilters = document.querySelectorAll('.color-filter');
const categoryFilters = document.querySelectorAll('.category-filter');
const keywordFilters = document.querySelectorAll('.keyword-filter');

// Verificar se os elementos existem
if (!priceSlider || !priceDisplay) {
  console.error('Elementos de preço não encontrados.');
} else {
  // Inicializa os filtros no carregamento
  window.onload = function() {
    priceSlider.value = 8000; // Define o valor inicial do slider
    priceDisplay.textContent = `Até R$ 8000`; // Exibe o valor inicial
    filterProducts(); // Chama o filtro ao carregar a página
  };
}

// Adiciona os eventos de mudança de filtro
priceSlider.addEventListener('input', function() {
  priceDisplay.textContent = ` R$ ${this.value}`;
  filterProducts();
});

colorFilters.forEach(filter => {
  filter.addEventListener('change', function() {
    filterProducts();
  });
});

categoryFilters.forEach(filter => {
  filter.addEventListener('change', function() {
    filterProducts();
  });
});

keywordFilters.forEach(filter => {
  filter.addEventListener('change', function() {
    filterProducts();
  });
});

function filterProducts() {
  const maxPrice = parseFloat(priceSlider.value); // Obtém o valor do slider
  console.log(`Max Price selected: R$ ${maxPrice}`);

  const selectedColors = Array.from(colorFilters)
    .filter(input => input.checked)
    .map(input => input.value.toLowerCase());
  const selectedCategories = Array.from(categoryFilters)
    .filter(input => input.checked)
    .map(input => input.value.toLowerCase());
  const selectedKeywords = Array.from(keywordFilters)
    .filter(input => input.checked)
    .map(input => input.value.toLowerCase());

  const productContainer = document.getElementById('productContainer');
  
  // Verifica se o container de produtos existe
  if (!productContainer) {
    console.error('Container de produtos não encontrado.');
    return;
  }

  const products = productContainer.querySelectorAll('.product');

  products.forEach(product => {
    // Pega o preço do produto
    const productPriceText = product.querySelector('.price') ? product.querySelector('.price').textContent : '0';
    
    // Remove "R$", vírgulas, pontos e converte para número
    const productPrice = parseFloat(productPriceText.replace('R$', '').replace('.', '').replace(',', '.').trim());
    console.log(`Price of product: R$ ${productPrice}`);

    // Verifica se o produto deve ser ocultado ou não baseado no preço
    if (productPrice > maxPrice) {
      product.style.display = 'none'; // Oculta o produto se o preço for maior que o máximo
    } else {
      product.style.display = ''; // Exibe o produto caso contrário
    }

    // Filtra por cor
    const productColor = product.getAttribute('data-color').toLowerCase();
    if (selectedColors.length > 0 && !selectedColors.includes(productColor)) {
      product.style.display = 'none';
    }

    // Filtra por categoria
    const productCategory = product.getAttribute('data-category').toLowerCase();
    if (selectedCategories.length > 0 && !selectedCategories.includes(productCategory)) {
      product.style.display = 'none';
    }

    // Filtra por palavras-chave
    const productKeywords = product.getAttribute('data-keywords') ? product.getAttribute('data-keywords').toLowerCase().split(', ') : [];
    if (selectedKeywords.length > 0 && !selectedKeywords.some(keyword => productKeywords.includes(keyword))) {
      product.style.display = 'none';
    }
  });
}


// Definir valores iniciais


const sizeFilters = document.querySelectorAll('.size-filter');


// Verificar se os elementos existem
if (!priceSlider || !priceDisplay) {
  console.error('Elementos de preço não encontrados.');
} else {
  // Inicializa os filtros no carregamento
  window.onload = function () {
    priceSlider.value = 15000; // Define o valor inicial do slider
    priceDisplay.textContent = `Até R$ 15.000`; // Exibe o valor inicial
    filterProducts(); // Chama o filtro ao carregar a página
  };
}

// Adiciona os eventos de mudança de filtro
priceSlider.addEventListener('input', function () {
  priceDisplay.textContent = `R$ ${this.value}`;
  filterProducts();
});

sizeFilters.forEach(filter => {
  filter.addEventListener('change', function () {
    filterProducts();
  });
});

categoryFilters.forEach(filter => {
  filter.addEventListener('change', function () {
    filterProducts();
  });
});

keywordFilters.forEach(filter => {
  filter.addEventListener('change', function () {
    filterProducts();
  });
});

