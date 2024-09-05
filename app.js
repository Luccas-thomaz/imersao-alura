function search() {
  // Função para realizar a pesquisa e exibir os resultados
  let section = document.getElementById("resultados-pesquisa"); // Obtém a seção onde os resultados serão exibidos
  let resultado_temp = ""; // Variável para armazenar os resultados temporariamente

  // Itera sobre os dados da pesquisa
  for (let dado of dados) {
    // Cria um novo elemento div para cada resultado
    resultado_temp += `
      <div class="item-resultado">
        <p></p>
        <h2><img src="${dado.img}" width="100" height="100"><a href="${dado.link}" target="_blank">   ${dado.titulo}</a></h2>
        <p class="descricao-meta">${dado.descrição}</p>
      </div>
    `;
  }

  // Atribui os resultados montados à seção
  section.innerHTML = resultado_temp;
}