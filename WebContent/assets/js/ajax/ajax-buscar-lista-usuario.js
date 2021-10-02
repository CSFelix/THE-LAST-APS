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
	req.open("POST", "http://localhost:7777/", true);
	req.onreadystatechange = function() {
			
		//	Servidor Fora do Ar
		if (req.readyState != 4 || req.status != 200) {  }
			
			// Sucesso ou Falha na Busca por Posts
			else {
				
				// Falha Interna
				if (this.responseText.includes("0")) { ExibirToastMessage(3); }
				
				// Busca Efetuada com sucesso
				else { tabelaListaUsuarios.innerHTML = this.responseText; }
			}
		};
		
	// Definição do header do método HTTP POST
	// e envio dos parãmetros
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	req.send();
}