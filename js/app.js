let filmes = [];

const listaFilmes = document.getElementById("listaFilmes");
const status = document.getElementById("status");
const btnBuscar = document.getElementById("btnBuscar");

async function carregarFilmes(params) {
    
    try {

        status.textContent = "Carregando filmes...";
        const resposta = await fetch("filmes.json")

        if (!resposta.ok) {
            throw new Error("Não foi possível carregar o JSON.");
        }

        filmes = await resposta.json();

    } catch (erro) {

                status.textContent = `Erro: {erro.message}`;
    }
}

function mostrarFilmes(lista) {

    listaFilmes.innerHTML = "";

    lista.forEach((filme) => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <h2>${filme.nome}</h2>
            <p><strong>Lançamento:</strong> ${filme.lancamento}</p>
            <p><strong>Gênero:</strong> ${filme.genero}</p>
            <p><strong>Duração:</strong> ${filme.duracao}</p>
        `;

        listaFilmes.appendChild(card);
    });
}

btnBuscar.addEventListener("click", () => {
            status.textContent = `${filmes.length} filmes carregados.`;
    mostrarFilmes(filmes);
});

carregarFilmes();