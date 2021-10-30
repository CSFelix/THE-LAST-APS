const botaoAtualizarTabelaListaUsuarios = document.getElementById("botaoAtualizarTabelaListaUsuarios");
const tabelaListaUsuarios = document.getElementById("tabelaListaUsuarios");

const toastMessageUsuarios = document.getElementById("toast");

var mensagemErro;
var req;

// clique no botão de busca de usuários
botaoAtualizarTabelaListaUsuarios.addEventListener("click", () => { BuscarDadosUsuariosSemFiltro(); });

// função para busca dos dados
function BuscarDadosUsuariosSemFiltro() {
	
	// AJAX
	req = new XMLHttpRequest();
	req.open("GET", "http://localhost:3000/autoridade/all", true);
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
						tabelaListaUsuarios.innerHTML = "<tr>"
							   						   + "	<button onclick='RedirecionarAlterarUsuario(this)' class='botao' data-id='" + dados[i].id + "' data-anijs='if: mouseover, do: rubberBand animated'>{{ trOpcaoAlterarAtiva }}</button>"
							   						   + "	<td>" + dados[i].nome + "</td>"
							   						   + "	<td>" + dados[i].login + "</td>"
							   						   + "	<td>" + dados[i].grauAutoridade + "</td>"
							   						   + "	<td>" + dados[i].dataCriacao + "</td>"
							   						   + "	<td>" + dados[i].Status + "</td>"
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
