const botaoSalvarUsuario = document.getElementById("botaoSalvarUsuario");

const inputNivelSelecionadoUsuario = document.getElementById("nivelSelecionado");
const inputStatusSelecionadoUsuario = document.getElementById("statusSelecionado");

const toastMessageUsuario = document.getElementById("toast");

var mensagemErro;
var params;
var req;

// clique no botão de alteração de status e nível de acesso do usuário
botaoSalvarUsuario.addEventListener("click", () => {
	
	// inputs não preenchidos
	if (inputNivelSelecionadoUsuario.value == "" || inputStatusSelecionadoUsuario.value == "") {
		
		// checagem do input de título
		if (inputNivelSelecionadoUsuario.value == "") { inputNivelSelecionadoUsuario.style.borderBottom = "4px solid red"; }
		else { inputNivelSelecionadoUsuario.style.borderBottom = "4px solid var(--style-terciary-color)"; }
		
		// checagem do input de mensagem
		if (inputStatusSelecionadoUsuario.value == "") { inputStatusSelecionadoUsuario.style.borderBottom = "4px solid red"; }
		else { inputStatusSelecionadoUsuario.style.borderBottom = "4px solid var(--style-terciary-color)"; }
		
		// exibição da toast message
		ExibirToastMessage(1);
	}
	
	// inputs preenchidos
	else {
		
		// Reset na borderBottom dos inputs
		inputNivelSelecionadoUsuario.style.borderBottom = "4px solid var(--style-terciary-color)";
		inputStatusSelecionadoUsuario.style.borderBottom = "4px solid var(--style-terciary-color)";
		
		// AJAX
		params = "grauAutoridade=" + inputNivelSelecionadoUsuario.value
		       + "&ativo=" + inputStatusSelecionadoUsuario.value
		       + "&id=" + sessionStorage.getItem("idUsuario"); // previamente armazenado após cadastro ou login
		
		req = new XMLHttpRequest();
		req.open("POST", "http://localhost:7777/", true);
		req.onreadystatechange = function() {
			
			// Servidor Fora do Ar
			if (req.readyState != 4 || req.status != 200) {  }
			
			// Sucesso ou Falha na Alteração
			else {
				
				// Falha interna
				if (this.responseText.includes("0")) {  }
				
				// Alteração Efetuada com sucesso
				else { window.location.href = "painel.jsp"; }
			}
		};
		
		// Definição do header do método HTTP POST
		// e envio dos parãmetros
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		req.send(params);
	}
});
