const botaoSalvarInfo = document.getElementById("botaoSalvar");

const inputEmailInfo = document.getElementById("inputEmail");
const inputNomeInfo = document.getElementById("inputNome");
const inputAutoridadeInfo = document.getElementById("inputAutoridade");

const toastMessageInfo = document.getElementById("toast");

var mensagemErro;
var params;
var req;

// clique no botão de alteração de usuário
botaoSalvarInfo.addEventListener("click", () => {
	
	// inputs não preenchidos
	if (inputEmailInfo.value == "" || inputNomeInfo.value == "" || inputAutoridadeInfo.value == "") {
		
		// checagem do input de título
		if (inputEmailInfo.value == "") { inputEmailInfo.style.borderBottom = "4px solid red"; }
		else { inputEmailInfo.style.borderBottom = "4px solid var(--style-terciary-color)"; }
		
		// checagem do input de mensagem
		if (inputNomeInfo.value == "") { inputNomeInfo.style.borderBottom = "4px solid red"; }
		else { inputNomeInfo.style.borderBottom = "4px solid var(--style-terciary-color)"; }
		
		// checagem do input de autoridade
		if (inputAutoridadeInfo.value == "") { inputAutoridadeInfo.style.borderBottom = "4px solid red"; }
		else { inputAutoridadeInfo.style.borderBottom = "4px solid var(--style-terciary-color)"; }
		
		// exibição da toast message
		ExibirToastMessage(1);
	}
	
	// inputs preenchidos
	else {
		
		// Reset na borderBottom dos inputs
		inputEmailInfo.style.borderBottom = "4px solid var(--style-terciary-color)";
		inputNomeInfo.style.borderBottom = "4px solid var(--style-terciary-color)";
		inputAutoridadeInfo.style.borderBottom = "4px solid var(--style-terciary-color)";
		
		// AJAX
		params = {
			    login: inputEmailInfo.value,
			    nome: inputNomeInfo.value,
			    grauAutoridade: inputAutoridadeInfo.value,
			    id: localStorage("idUsuario"),
		}
		
		req = new XMLHttpRequest();
		req.open("POST", "http://localhost:3000/login-nome", true);
		req.onreadystatechange = function() {
			
			// Servidor Fora do Ar
			if (req.readyState != 4 || req.status != 200) {  }
			
			// Sucesso ou Falha na Alteração
			else {
				
				// Email já cadastrado por outro usuário
				if (this.responseText.includes("0")) { ExibirToastMessage(8); }
				
				// Alteração Efetuada com sucesso
				else { ExibirToastMessage(4); }
			}
		};
		
		// Definição do header do método HTTP POST
		// e envio dos parãmetros
		//req.setRequestHeader('Authorization', localStorage.getItem("Authorization"));
		req.setRequestHeader('Content-Type', 'application/json');
		req.send(JSON.stringify(params));
	}
});
