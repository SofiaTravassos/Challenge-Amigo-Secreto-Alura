// Array para armazenar os nomes dos amigos
let amigos = [];
// Array para armazenar os nomes já sorteados
let sorteados = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo'); // Obtém o campo de input
    const nomeAmigo = inputAmigo.value.trim(); // Remove espaços em branco no início e no final

    // Verifica se o campo está vazio
    if (nomeAmigo === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    // Verifica se o nome já está na lista
    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);

    // Atualiza a lista de amigos na tela
    atualizarListaAmigos();

    // Limpa o campo de input
    inputAmigo.value = "";
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos'); // Obtém o elemento <ul> da lista
    listaAmigos.innerHTML = ""; // Limpa a lista atual

    // Adiciona cada amigo à lista
    amigos.forEach((amigo) => {
        const itemLista = document.createElement('li'); // Cria um novo <li>
        itemLista.textContent = amigo; // Define o texto do <li>
        listaAmigos.appendChild(itemLista); // Adiciona o <li> à <ul>
    });
}

// Função para sortear um nome aleatório
function sortearAmigo() {
    // Verifica se ainda há nomes para sortear
    if (amigos.length === sorteados.length) {
        alert("Todos os nomes já foram sorteados!");
        return;
    }

    // Filtra os nomes que ainda não foram sorteados
    const nomesDisponiveis = amigos.filter((amigo) => !sorteados.includes(amigo));

    // Sorteia um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * nomesDisponiveis.length);
    const nomeSorteado = nomesDisponiveis[indiceSorteado]; // Obtém o nome sorteado

    // Adiciona o nome sorteado à lista de sorteados
    sorteados.push(nomeSorteado);

    // Exibe o nome sorteado
    const resultado = document.getElementById('resultado'); // Obtém o elemento <ul> do resultado
    resultado.innerHTML = `<li>Nome sorteado: ${nomeSorteado}</li>`; // Exibe o nome sorteado
}

// Função para reiniciar o sorteio (opcional)
function reiniciarSorteio() {
    amigos = []; // Limpa a lista de amigos
    sorteados = []; // Limpa a lista de sorteados
    atualizarListaAmigos(); // Atualiza a lista na tela
    document.getElementById('resultado').innerHTML = ""; // Limpa o resultado
}