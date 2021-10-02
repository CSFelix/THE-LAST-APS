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
		params = "nome=" + inputNomePesquisaFiltroNome.value;
		
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
					else { tabelaListaUsuariosFiltroNome.innerHTML = this.responseText; }
				}
			};
			
		// Definição do header do método HTTP POST
		// e envio dos parãmetros
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		req.send(params);
	}
}