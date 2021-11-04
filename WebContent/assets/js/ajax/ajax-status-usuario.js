const botaoSalvarUsuario = document.getElementById("botaoSalvarUsuario");

const inputEmail = document.getElementById("inputEmail");
const inputNome = document.getElementById("inputNome");
const inputAutoridade = document.getElementById("inputAutoridade");
const inputDataCriacao = document.getElementById("inputDataCriacao");
const inputStatusSelecionadoUsuario = document.getElementById("statusSelecionado");

const toastMessageUsuario = document.getElementById("toast");

var mensagemErro;
var params;
var req;

// Captura do Parâmetro
var url = new URLSearchParams(window.location.search);
var id = url.get('idUsuario');

//AJAX
req = new XMLHttpRequest();
req.open("GET", "http://localhost:3000/autoridade/find-by-id/" + id, true);
req.onreadystatechange = function() {
	
	// Servidor Fora do Ar
	if (req.readyState != 4 || req.status != 200) {  }
	
	// Busca das Informações Efetuada com Sucesso
	else { 
		inputEmail.value = JSON.parse(this.responseText).titulo;
		inputNome.value = JSON.parse(this.responseText).mensagem;
		inputAutoridade.value = JSON.parse(this.responseText).endereco;
		inputDataCriacao.value = JSON.parse(this.responseText).dataCriacao;
		inputStatusSelecionadoUsuario.value = JSON.parse(this.responseText).status.nome;
	}
};

// Definição do header
// e envio dos parãmetros
req.setRequestHeader('Content-Type', 'application/json');
req.send();

// definição dos valores dos inputs ao carregar página
inputEmail.value = sessionStorage.getItem("loginAlterar");
inputNome.value = sessionStorage.getItem("nomeAlterar");
inputAutoridade.value = sessionStorage.getItem("grauAutoridadeAlterar");
inputDataCriacao.value = sessionStorage.getItem("dataCriacaoAlterar");
inputStatusSelecionadoUsuario.value = sessionStorage.getItem("statusAlterar");

// clique no botão de alteração de status e nível de acesso do usuário
botaoSalvarUsuario.addEventListener("click", () => {
	
	// inputs não preenchidos
	if (inputStatusSelecionadoUsuario.value == "") {
			
		// checagem do input de mensagem
		if (inputStatusSelecionadoUsuario.value == "") { inputStatusSelecionadoUsuario.style.borderBottom = "4px solid red"; }
		else { inputStatusSelecionadoUsuario.style.borderBottom = "4px solid var(--style-terciary-color)"; }
		
		// exibição da toast message
		ExibirToastMessage(1);
	}
	
	// inputs preenchidos
	else {
		
		// Reset na borderBottom dos inputs
		inputStatusSelecionadoUsuario.style.borderBottom = "4px solid var(--style-terciary-color)";
		
		// AJAX
		params = {
			    ativo: inputStatusSelecionadoUsuario.value,
			    id: id
		}
		
		req = new XMLHttpRequest();
		req.open("POST", "http://localhost:3000/autoridade-update-status", true);
		req.onreadystatechange = function() {
			
			// Servidor Fora do Ar
			if (req.readyState != 4 || req.status != 200) {  }
			
			// Sucesso ou Falha na Alteração
			else {
				
				// Falha interna
				if (JSON.parse(this.responseText).status == 500) {  }
				
				// Alteração Efetuada com sucesso
				else { window.location.href = "painel.jsp"; }
			}
		};
		
		// Definição do header
		// e envio dos parãmetros
		// req.setRequestHeader('Authorization', localStorage.getItem("Authorization"));
		req.setRequestHeader('Content-Type', 'application/json');
		req.send(JSON.stringify(params));
	}
});
