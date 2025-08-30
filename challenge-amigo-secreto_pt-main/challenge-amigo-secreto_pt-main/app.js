// Lista de participantes
let amigos = [];

// Adiciona um amigo
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (!nome) {
        alert("Digite um nome válido!");
        return;
    }
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    input.value = "";
    input.focus();
    atualizarLista();
}

// Atualiza a UL com os nomes
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        const remover = document.createElement("button");
        remover.textContent = "❌";
        remover.style.marginLeft = "10px";
        remover.onclick = () => removerAmigo(index);

        li.appendChild(remover);
        lista.appendChild(li);
    });

    // sempre que a lista muda, apaga um resultado antigo
    document.getElementById("resultado").innerHTML = "";
}

// Remove um nome
function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

// Sorteia 1 amigo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }
    const indice = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[indice];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}

/* ==== NOVO: reinícios ==== */

// Limpa apenas o resultado do sorteio (mantém participantes)
function reiniciarSorteio() {
    document.getElementById("resultado").innerHTML = "";
    // se quiser dar foco para digitar mais nomes
    document.getElementById("amigo").focus();
}

// Zera tudo: participantes e resultado
function reiniciarTudo() {
    amigos = [];
    atualizarLista();            // já limpa o resultado também
    document.getElementById("amigo").focus();
}
