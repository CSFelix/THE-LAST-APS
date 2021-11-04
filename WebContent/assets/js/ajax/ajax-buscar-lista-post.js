const botaoAtualizarTabelaListaPostagens = document.getElementById("botaoAtualizarTabelaListaPostagens");
const tabelaListaPostagens = document.getElementById("tabelaListaPostagens");

const toastMessagePostagens = document.getElementById("toast");

var mensagemErro;
var req;

// clique no botão de busca de posts
botaoAtualizarTabelaListaPostagens.addEventListener("click", () => { BuscarDadosPostsSemFiltro(); });

// função para busca dos dados
function BuscarDadosPostsSemFiltro() {
	
	// AJAX
	req = new XMLHttpRequest();
	req.open("GET", "http://localhost:3000/postagem/all", true);
	req.onreadystatechange = function() {
			
		//	Servidor Fora do Ar
		if (req.readyState != 4 || req.status != 200) {  }
			
			// Sucesso ou Falha na Busca por Posts
			else {
				
				// Falha Interna
				if (JSON.parse(this.responseText).status == 500) { ExibirToastMessage(3); }
				
				// Alteração Efetuada com sucesso
				else { 
					var dados = JSON.parse(this.responseText);
					
					// há posts cadastrados
					if (dados.length > 0) {
						for (i = 0; i < dados.length; i++) {
							tabelaListaPostagens.innerHTML = "<tr id='tabelaHeader'>"
														   + "   <th>" + vuePainelListaPosts.trOpcoesAtiva + "</th>"
							   							   + "   <th>" + vuePainelListaPosts.trTituloAtiva + "</th>"
							   							   + "   <th>" + vuePainelListaPosts.trCriacaoAtiva + "</th>"
							   							   + "   <th>" + vuePainelListaPosts.trStatusAtiva + "</th>"
							   							   + "</tr>"
														   + "<tr>"
								   						   + "	<td><button onclick='RedirecionarAlterarPost(this)' class='botao' data-id='" + dados[i].id + "' data-anijs='if: mouseover, do: rubberBand animated'>" + vuePainelListaPosts.trOpcaoAvaliarAtiva + "</button>&nbsp&nbsp&nbsp<button onclick='RedirecionarVisualizarPost(this)' class='botao' data-id='" + dados[i].id + "' data-anijs='if: mouseover, do: rubberBand animated'>" + vuePainelListaPosts.trOpcaoVisualizarAtiva + "</button></td>"
								   						   + "	<td>" + dados[i].titulo + "</td>"
								   						   + "	<td>" + TransformacaoDataHora(dados[i].dataCriacao) + "</td>"
								   						   + "	<td>" + dados[i].status.nome + "</td>"
								   						   + "</tr>";
						}
					}
					
					// não há posts cadastrados
					else {
						tabelaListaPostagens.innerHTML = "<tr id='tabelaHeader'>"
							   						   + "   <th>" + vuePainelListaPosts.trOpcoesAtiva + "</th>"
							   						   + "   <th>" + vuePainelListaPosts.trTituloAtiva + "</th>"
							   						   + "   <th>" + vuePainelListaPosts.trCriacaoAtiva + "</th>"
							   						   + "   <th>" + vuePainelListaPosts.trStatusAtiva + "</th>"
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
