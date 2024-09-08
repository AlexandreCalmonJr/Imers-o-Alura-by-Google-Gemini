function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = ""; 
    let descricao = "";
    let tipo = "";

    // Itera sobre cada dado da lista de dados
    for (let cartasYuGiOh of cartasYuGiOh) {
        nome = cartasYuGiOh.nome.toLowerCase()
        descricao = cartasYuGiOh.descricao.toLowerCase()
        tags = cartasYuGiOh.tipo.toLowerCase()
        // se nome includes campoPesquisa
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tipo.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${cartasYuGiOh.nome}</a>
                </h2>
                <p class="descricao-meta">${cartasYuGiOh.descricao}</p>
                <a href=${cartasYuGiOh.tipo} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}