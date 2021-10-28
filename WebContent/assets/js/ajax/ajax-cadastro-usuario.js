const botaoCadastrar = document.getElementById("botaoCadastrar");

const inputEmailCadastro = document.getElementById("inputEmail");
const inputNomeCadastro = document.getElementById("inputNome");
const inputAutoridadeCadastro = docuemnt.getElementById("inputAutoridade");
const inputSenhaCadastro = document.getElementById("inputSenha");
const inputConfirmarSenhaCadastro = document.getElementById("inputConfirmarSenha");

const toastMessageCadastro = document.getElementById("toast");

var mensagemErro;
var params;
var req;

// clique no botão de cadastro
botaoCadastrar.addEventListener("click", () => {
	
	// inputs não preenchidos
	if (   inputEmailCadastro.value == "" || inputNomeCadastro.value == ""
		|| inputSenhaCadastro.value == "" || inputConfirmarSenhaCadastro.value == ""
		|| inputAutoridadeCadastro.value == "") {
		
		// checagem do input de email
		if (inputEmailCadastro.value == "") { inputEmailCadastro.style.borderBottom = "4px solid red"; }
		else { inputEmailCadastro.style.borderBottom = "4px solid var(--style-terciary-color)"; }
		
		// checagem do input de nome
		if (inputNomeCadastro.value == "") { inputNomeCadastro.style.borderBottom = "4px solid red"; }
		else { inputNomeCadastro.style.borderBottom = "4px solid var(--style-terciary-color)"; }
		
		// checagem do input de autoridade
		if (inputAutoridadeCadastro.value == "") { inputAutoridadeCadastro.style.borderBottom = "4px solid red"; }
		else { inputAutoridadeCadastro.style.borderBottom = "4px solid var(--style-terciary-color)"; }
		
		// checagem do input de senha
		if (inputSenhaCadastro.value == "") { inputSenhaCadastro.style.borderBottom = "4px solid red"; }
		else { inputSenhaCadastro.style.borderBottom = "4px solid var(--style-terciary-color)"; }
		
		// checagem do input de confirmar senha
		if (inputConfirmarSenhaCadastro.value == "") { inputConfirmarSenhaCadastro.style.borderBottom = "4px solid red"; }
		else { inputConfirmarSenhaCadastro.style.borderBottom = "4px solid var(--style-terciary-color)"; }
		
		// exibição da toast message
		ExibirToastMessage(1);
	}
	
	// campos de senha e confirmar senha diferentesS
	else if (inputSenhaCadastro.value != inputConfirmarSenhaCadastro.value) {

		// reset dos demais campos
		inputEmailCadastro.style.borderBottom = "4px solid var(--style-terciary-color)";
		inputNomeCadastro.style.borderBottom = "4px solid var(--style-terciary-color)";
		inputAutoridadeCadastro.style.borderBottom = "4px solid var(--style-terciary-color)";
		
		// focus nos campos de senha e confirmar senha
		inputSenhaCadastro.style.borderBottom = "4px solid red";
		inputConfirmarSenhaCadastro.style.borderBottom = "4px solid red";
		
		// exibição da toast message
		ExibirToastMessage(2);
	}
	
	// inputs preenchidos
	else {
		
		// Reset na borderBottom dos inputs
		inputEmailCadastro.style.borderBottom = "4px solid var(--style-terciary-color)";
		inputNomeCadastro.style.borderBottom = "4px solid var(--style-terciary-color)";
		inputAutoridadeCadastro.style.borderBottom = "4px solid var(--style-terciary-color)";
		inputSenhaCadastro.style.borderBottom = "4px solid var(--style-terciary-color)";
		inputConfirmarSenhaCadastro.style.borderBottom = "4px solid var(--style-terciary-color)";
		
		// AJAX
		params =  {
	            login: inputEmailCadastro.value,
	            nome: inputNomeCadastro.value,
	            senha: inputSenhaCadastro.value,
	            grauAutoridade: inputAutoridadeCadastro.value,
	            ativo: true
	    }; 
		
		req = new XMLHttpRequest();
		req.open("POST", "http://localhost:3000/autoridade", true);
		req.onreadystatechange = function() {
			
			// Servidor Fora do Ar
			if (req.readyState != 4 || req.status != 200) {  }
			
			// Falha no Cadastro ou Efetuação com Sucesso
			else {
				
				// Email já cadastrado por outro usuário
				if (this.responseText.includes("0")) { ExibirToastMessage(4); }
				
				// Cadastro efetuado com sucesso
				else { 
					sessionStorage.setItem("painel_foco", "1");
					window.location.href = "painel.jsp";  
				}
			}
		};
		
		// Definição do header
		// e envio dos parâmetros
		req.setRequestHeader('Content-Type', 'application/json');
		req.send(JSON.stringify(params));
	}
});
