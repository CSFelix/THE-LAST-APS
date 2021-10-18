const botaoAlterarSenha = document.getElementById("botaoAlterarSenha");

const inputEmailAlterarSenha = document.getElementById("inputEmail");
const inputSenhaAlterarSenha = document.getElementById("inputSenha");
const inputConfirmarSenhaAlterarSenha = document.getElementById("inputConfirmarSenha");

const toastMessageCadastro = document.getElementById("toast");

var mensagemErro;
var params;
var req;

// clique no botão de alteração da senha
botaoAlterarSenha.addEventListener("click", () => {
	
	// inputs não preenchidos
	if (   inputEmailAlterarSenha.value == "" || inputSenhaAlterarSenha.value == "" 
		|| inputConfirmarSenhaAlterarSenha.value == "") {
		
		// checagem do input de email
		if (inputEmailAlterarSenha.value == "") { inputEmailAlterarSenha.style.borderBottom = "4px solid red"; }
		else { inputEmailAlterarSenha.style.borderBottom = "4px solid var(--style-terciary-color)"; }
		
		// checagem do input de senha
		if (inputSenhaAlterarSenha.value == "") { inputSenhaAlterarSenha.style.borderBottom = "4px solid red"; }
		else { inputSenhaAlterarSenha.style.borderBottom = "4px solid var(--style-terciary-color)"; }
		
		// checagem do input de confirmar senha
		if (inputConfirmarSenhaAlterarSenha.value == "") { inputConfirmarSenhaAlterarSenha.style.borderBottom = "4px solid red"; }
		else { inputConfirmarSenhaAlterarSenha.style.borderBottom = "4px solid var(--style-terciary-color)"; }
		
		// exibição da toast message
		ExibirToastMessage(1);
	}
	
	// campos de senha e confirmar senha diferentesS
	else if (inputSenhaAlterarSenha.value != inputConfirmarSenhaAlterarSenha.value) {

		// reset dos demais campos
		inputEmailAlterarSenha.style.borderBottom = "4px solid var(--style-terciary-color)";

		// focus nos campos de senha e confirmar senha
		inputSenhaAlterarSenha.style.borderBottom = "4px solid red";
		inputConfirmarSenhaAlterarSenha.style.borderBottom = "4px solid red";
		
		// exibição da toast message
		ExibirToastMessage(2);
	}
	
	// inputs preenchidos
	else {
		
		// Reset na borderBottom dos inputs
		inputEmailAlterarSenha.style.borderBottom = "4px solid var(--style-terciary-color)";
		inputSenhaAlterarSenha.style.borderBottom = "4px solid var(--style-terciary-color)";
		inputConfirmarSenhaAlterarSenha.style.borderBottom = "4px solid var(--style-terciary-color)";
		
		// AJAX
		params = "login=" + inputEmailAlterarSenha.value
		       + "&senha=" + inputSenhaAlterarSenha.value;
		
		req = new XMLHttpRequest();
		req.open("POST", "http://localhost:7777/update-login-senha", true);
		req.onreadystatechange = function() {
			
			// Servidor Fora do Ar
			if (req.readyState != 4 || req.status != 200) {  }
			
			// Falha no Cadastro ou Efetuação com Sucesso
			else {
				
				// Email não cadastrado no banco de dados
				if (this.responseText.includes("0")) { ExibirToastMessage(6); }
				
				// Alteração de senha efetuada com sucesso
				else { window.location.href = "operacao-realizada.jsp"; }
			}
		};
		
		// Definição do header do método HTTP POST
		// e envio dos parãmetros
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		req.send(params);
	}
});
