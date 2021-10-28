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
				
				// Busca Efetuada com sucesso
				else { tabelaListaUsuarios.innerHTML = this.responseText; }
			}
		};
		
	// Definição do header
	// e envio dos parãmetros
	// req.setRequestHeader('Authorization', localStorage.getItem("Authorization"));
	req.setRequestHeader('Content-Type', 'application/json');
	req.send();
}
