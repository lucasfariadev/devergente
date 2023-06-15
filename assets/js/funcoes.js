function irParaPagina(pagina) {
  window.location.href = pagina;
}

function limparValor(element) {
  element.value = '';
}

function toggleOptions(optionsListId) {
  var optionsListNasc = document.getElementById('optionsListNasc');
  var optionsListGenero = document.getElementById('optionsListGenero');
  
  if (optionsListId === 'optionsListNasc') {
    optionsListNasc.style.display = optionsListNasc.style.display === 'block' ? 'none' : 'block';
    optionsListGenero.style.display = 'none';
  } else if (optionsListId === 'optionsListGenero') {
    optionsListGenero.style.display = optionsListGenero.style.display === 'block' ? 'none' : 'block';
    optionsListNasc.style.display = 'none';
  }
}

function selectOption(option) {
  var generoElement = document.getElementById('genero');
  var nascElement = document.getElementById('nasc');

  var optionsListNasc = document.getElementById('optionsListNasc');
  var optionsListGenero = document.getElementById('optionsListGenero');

  if (optionsListNasc.style.display === 'block') {
    nascElement.textContent = option;
    optionsListNasc.style.display = 'none';
  } else if (optionsListGenero.style.display === 'block') {
    generoElement.textContent = option;
    optionsListGenero.style.display = 'none';
  }


  if (option == "Não Binário"){
    document.getElementById('genero').style.fontSize = "11px";
  }
}

    // Função para redirecionar para a página desejada
    function redirectToPage(pageUrl) {
      window.location.href = pageUrl;
    }

    // Função para tratar o evento de clique no campo
    function handleFieldClick(pageUrl) {
      redirectToPage(pageUrl);
    }

    // Função para tratar o evento de clique no checkbox
    function handleCheckboxClick(checkbox, pageUrl) {
      if (checkbox.checked) {
        redirectToPage(pageUrl);
      }
    }