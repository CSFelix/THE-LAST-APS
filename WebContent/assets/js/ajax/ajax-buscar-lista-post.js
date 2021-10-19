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
				if (this.responseText.includes("0")) { ExibirToastMessage(3); }
				
				// Alteração Efetuada com sucesso
				else { tabelaListaPostagens.innerHTML = this.responseText; }
			}
		};
		
	// Definição do header do método HTTP POST
	// e envio dos parãmetros
	req.setRequestHeader('Authorization', localStorage.getItem("Authorization"));
	req.send();
}
