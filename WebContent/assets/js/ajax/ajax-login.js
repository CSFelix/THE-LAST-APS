const botaoLogin = document.getElementById("botaoLogin");
const inputEmailLogin = document.getElementById("inputEmail");
const inputSenhaLogin = document.getElementById("inputSenha");
const toastMessageLogin = document.getElementById("toast");

var mensagemErro;
var params;
var req;

// clique no botão de cadastro
botaoLogin.addEventListener("click", () => {
	
	// inputs não preenchidos
	if (inputEmailLogin.value == "" || inputSenhaLogin == "") {
		
		// checagem do input de email
		if (inputEmailLogin.value == "") { inputEmailLogin.style.borderBottom = "4px solid red"; }
		else { inputEmailLogin.style.borderBottom = "4px solid var(--style-terciary-color)"; }
		
		// checagem do input de senha
		if (inputSenhaLogin.value == "") { inputSenhaLogin.style.borderBottom = "4px solid red"; }
		else { inputSenhaLogin.style.borderBottom = "4px solid var(--style-terciary-color)"; }
		
		// exibição da toast message
		ExibirToastMessage(1);
	}
	
	// inputs preenchidos
	else {
		
		// Reset na borderBottom dos inputs
		inputEmailLogin.style.borderBottom = "4px solid var(--style-terciary-color)";
		inputSenhaLogin.style.borderBottom = "4px solid var(--style-terciary-color)";
		
		// AJAX
		params = {
				login: inputEmailLogin.value,
			    senha: inputSenhaLogin.value
		}
		
		req = new XMLHttpRequest();
		req.open("POST", "http://localhost:3000/login", true);
		req.onreadystatechange = function() {
			
			// Servidor Fora do Ar
			if (req.readyState != 4 || req.status != 200) {  }
			
			// Falha no Login ou Efetuação com Sucesso
			else {
				
				// Falha no Login- Email e/ou Senha incorretos
				if (JSON.parse(this.responseText).status == 500) { ExibirToastMessage(5); }
				
				// Login efetuado com sucesso
				else { 
					sessionStorage.setItem("idUsuario", JSON.parse(this.responseText).id);
					sessionStorage.setItem("login", JSON.parse(this.responseText).login);
					sessionStorage.setItem("nome", JSON.parse(this.responseText).nome);
					sessionStorage.setItem("grauAutoridade", JSON.parse(this.responseText).grauAutoridade);
					sessionStorage.setItem("painel_foco", "1");
					window.location.href = "painel.jsp";  
				}
			}
		};
		
		// Definição do header
		// e envio dos parãmetros
		req.setRequestHeader('Content-Type', 'application/json');
		req.send(JSON.stringify(params));
	}
});
