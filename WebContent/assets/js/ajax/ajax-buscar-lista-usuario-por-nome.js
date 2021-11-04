const botaoAtualizarTabelaListaUsuariosFiltroNome = document.getElementById("botaoNomePesquisa");
const tabelaListaUsuariosFiltroNome = document.getElementById("tabelaListaUsuarios");

const inputNomePesquisaFiltroNome = document.getElementById("inputNomePesquisa");
const toastMessageUsuariosFiltroNome = document.getElementById("toast");

var mensagemErro;
var params;
var req;

// clique no botão de busca de usuários com filtro no nome
botaoAtualizarTabelaListaUsuariosFiltroNome.addEventListener("click", () => { BuscarDadosUsuariosComFiltro(); });

// função para busca dos dados
function BuscarDadosUsuariosComFiltro() {
	
	// busca é feita somente se input de nome está preenchido
	if (inputNomePesquisaFiltroNome.value != "") {
		
		// AJAX
		req = new XMLHttpRequest();
		req.open("GET", "http://localhost:3000/autoridade/find-nome/" + inputNomePesquisaFiltroNome.value, true);
		req.onreadystatechange = function() {
			
			//	Servidor Fora do Ar
			if (JSON.parse(this.responseText).status == 500) {  }
				
				// Sucesso ou Falha na Busca por Posts
				else {
					
					// Falha Interna
					if (JSON.parse(this.responseText).status == 500) { ExibirToastMessage(3); }
					
					// Alteração Efetuada com sucesso
					else { 
						var dados = JSON.parse(this.responseText);
						
						// há posts cadastrados
						if (dados.lenght > 0) {
							for (i = 0; i < dados.length; i++) {
								
								tabelaListaUsuarios.innerHTML = "<tr id='tabelaHeader'>"
															   + "  <th>" + vuePainelListaUsuarios.trOpcoesAtiva + "</th>"
															   + "  <th>" + vuePainelListaUsuarios.trNomeAtiva + "</th>"
															   + "  <th>" + vuePainelListaUsuarios.trEmailAtiva + "</th>"
															   + "  <th>" + vuePainelListaUsuarios.trNivelAutorizacaoAtiva + "</th>"
															   + "  <th>" + vuePainelListaUsuarios.trDataCriacaoAtiva + "</th>"
															   + "  <th>" + vuePainelListaUsuarios.trStatusAtiva + "</th>"
															   + "</tr>"
															   + "<tr>"
															   + "	<td><button onclick='RedirecionarAlterarUsuario(this)' class='botao' data-id='" + dados[i].id + "' data-anijs='if: mouseover, do: rubberBand animated'>" + vuePainelListaUsuarios.trOpcaoAlterarAtiva +"</button></td>"
									   						   + "	<td>" + dados[i].nome + "</td>"
									   						   + "	<td>" + dados[i].login + "</td>"
									   						   + "	<td>" + dados[i].grauAutoridade + "</td>"
									   						   + "	<td>" + FormatarDataHoraListaUsuarios(dados[i].dataCriada) + "</td>"
									   						   + "	<td>" + dados[i].ativo + "</td>"
									   						   + "</tr>";
							}
						}
						
						// não há posts cadastrados
						else {
							tabelaListaUsuarios.innerHTML = "<tr id='tabelaHeader'>"
								   						  + "  <th>" + vuePainelListaUsuarios.trOpcoesAtiva + "</th>"
								   						  + "  <th>" + vuePainelListaUsuarios.trNomeAtiva + "</th>"
								   						  + "  <th>" + vuePainelListaUsuarios.trEmailAtiva + "</th>"
								   						  + "  <th>" + vuePainelListaUsuarios.trNivelAutorizacaoAtiva + "</th>"
								   						  + "  <th>" + vuePainelListaUsuarios.trDataCriacaoAtiva + "</th>"
								   						  + "  <th>" + vuePainelListaUsuarios.trStatusAtiva + "</th>"
								   						  + "</tr>";
						}
					}
				}
			};
			
		// Definição do header do método HTTP POST
		// e envio dos parãmetros
		//req.setRequestHeader('Authorization', localStorage.getItem("Authorization"));
		req.setRequestHeader('Content-Type', 'application/json');
		req.send();
	}
}
