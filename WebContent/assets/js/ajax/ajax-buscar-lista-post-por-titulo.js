const botaoAtualizarTabelaListaPostagensFiltroTitulo = document.getElementById("botaoTituloPesquisa");
const tabelaListaPostagensFiltroTitulo = document.getElementById("tabelaListaPostagens");

const inputTituloPesquisaFiltroTitulo = document.getElementById("inputTituloPesquisa");
const toastMessagePostagensFiltroTitulo = document.getElementById("toast");

var mensagemErro;
var params;
var req;

// clique no botão de busca de posts com filtro no título
botaoAtualizarTabelaListaPostagensFiltroTitulo.addEventListener("click", () => { BuscarDadosPostsComFiltro(); });

// função para busca dos dados
function BuscarDadosPostsComFiltro() {
	
	// busca é feita somente se input de título preenchido
	if (inputTituloPesquisaFiltroTitulo.value != "") {
		
		// AJAX
		req = new XMLHttpRequest();
		req.open("GET", "http://localhost:3000/find-title/" + inputTituloPesquisaFiltroTitulo.value, true);
		req.onreadystatechange = function() {
			
			//	Servidor Fora do Ar
			if (req.readyState != 4 || req.status != 200) {  }
				
				// Sucesso ou Falha na Busca por Posts
				else {
					
					// Falha Interna
					if (this.responseText.includes("0")) { ExibirToastMessage(3); }
					
					// Alteração Efetuada com sucesso
					else { 
						var dados = JSON.parse(this.responseText);
						
						for (i = 0; i < dados.length; i++) {
							tabelaListaPostagens.innerHTML = "<tr>"
								   						   + "	<td><button onclick='RedirecionarAlterarPost(this)' class='botao' data-id='" + dados[i].id + "' data-anijs='if: mouseover, do: rubberBand animated'>{{ trOpcaoAvaliarAtiva }}</button>&nbsp&nbsp&nbsp<button class='botao' data-anijs='if: mouseover, do: rubberBand animated'>{{ trOpcaoVisualizarAtiva }}</button></td>"
								   						   + "	<td>" + dados[i].titulo + "</td>"
								   						   + "	<td>" + dados[i].dataCriacao + "</td>"
								   						   + "	<td>" + dados[i].status + "</td>"
								   						   + "</tr>";
						}
					}
				}
			};
			
		// Definição do header do método HTTP POST
		// e envio dos parãmetros
		req.setRequestHeader('Authorization', localStorage.getItem("Authorization"));
		req.send();
	}
}
