const botaoAtualizarTabelaListaUsuariosFiltroNome = document.getElementById("botaoAtualizarTabelaListaUsuarios");
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
						
						for (i = 0; i < dados.length; i++) {
							tabelaListaUsuarios.innerHTML += "<tr>"
								   						   + "	<td><button onclick='RedirecionarAlterarUsuario(this)' class='botao' data-id='" + dados[i].id + "' data-anijs='if: mouseover, do: rubberBand animated'>Update / Alterar</button></td>"
								   						   + "	<td>" + dados[i].nome + "</td>"
								   						   + "	<td>" + dados[i].login + "</td>"
								   						   + "	<td>" + dados[i].grauAutoridade + "</td>"
								   						   + "	<td>" + dados[i].dataCriada + "</td>"
								   						   + "	<td>" + dados[i].ativo + "</td>"
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
