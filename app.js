function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    campoPesquisa = campoPesquisa.toLowerCase()

    if (!campoPesquisa) {
        section.innerHTML = "Campo de pesquisa vazio."
        return
    };
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre os dados da pesquisa e constrói o HTML para cada resultado
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento de resultado
            resultados = `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descicao-meta">
                    ${dado.descricao}
                </p>
                <a href=${dado.link} target="_blank">Mais Informações</a>
            </div>
            `;
        }

        if (!resultados) {
            resultados = "<p>Nenhum resultado foi encontrado.</p>"
        }

    }

    // Atualiza o conteúdo HTML da seção com os resultados formatados
    section.innerHTML = resultados;
}