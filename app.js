function search() {
  // Função para realizar a pesquisa e exibir os resultados
  let section = document.getElementById("resultados-pesquisa"); // Obtém a seção onde os resultados serão exibidos
  let resultado_temp = ""; // Variável para armazenar os resultados temporariamente
  let campoPesquisa = document.getElementById("campo-pesquisa").value.trim(); // Remover espaços em branco extras
  let titulo ="";
  let descricao ="";
  let tags ="";

  if (campoPesquisa === "") {
    section.innerHTML = "<p>Não encontrado</p>";
    return;
  }
 campoPesquisa =campoPesquisa.toLowerCase();
  let encontrado = false; // Variável para verificar se algum resultado foi encontrado

  // Itera sobre os dados da pesquisa
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descrição.toLowerCase();
    tags =dado.tags.toLowerCase();
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)||tags.includes(campoPesquisa)) {
      encontrado = true; // Marca que encontrou pelo menos um resultado
      // Cria um novo elemento div para cada resultado
      resultado_temp += `
        <div class="item-resultado">
          <p></p>
          <h2><img src="${dado.img}" width="100" height="100"><a href="${dado.link}" target="_blank">   ${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descrição}</p>
        </div>
      `;
    }
  }

  // Se encontrou resultados, exibe; senão, exibe "Não encontrado"
  if (encontrado) {
    section.innerHTML = resultado_temp;
  } else {
    section.innerHTML = "<p>Não encontrado</p>";
  }
}
document.getElementById("campo-pesquisa").addEventListener("keydown", function(event) {
  if (event.key === "Enter") { // Verifica se a tecla pressionada foi Enter
    search();
  }
});