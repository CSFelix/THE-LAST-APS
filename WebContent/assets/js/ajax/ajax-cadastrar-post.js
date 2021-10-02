const botaoSalvarPost = document.getElementById("botaoSalvarPost");

const inputTituloCadastrarPost = document.getElementById("inputTitulo");
const inputMensagemCadastrarPost = document.getElementById("inputMensagem");
const inputEnderecoCadastrarPost = document.getElementById("inputEndereco");

const toastMessageCadastro = document.getElementById("toast");

var mensagemErro;
var params;
var req;

// clique no botão de cadastro de post
botaoSalvarPost.addEventListener("click", () => {
	
	// inputs não preenchidos
	if (   inputTituloCadastrarPost.value == "" || inputMensagemCadastrarPost.value == "" 
		|| inputEnderecoCadastrarPost.value == "") {
		
		// checagem do input de título
		if (inputTituloCadastrarPost.value == "") { inputTituloCadastrarPost.style.borderBottom = "4px solid red"; }
		else { inputTituloCadastrarPost.style.borderBottom = "4px solid var(--style-terciary-color)"; }
		
		// checagem do input de mensagem
		if (inputMensagemCadastrarPost.value == "") { inputMensagemCadastrarPost.style.borderBottom = "4px solid red"; }
		else { inputMensagemCadastrarPost.style.borderBottom = "4px solid var(--style-terciary-color)"; }
		
		// checagem do input de endereço
		if (inputEnderecoCadastrarPost.value == "") { inputEnderecoCadastrarPost.style.borderBottom = "4px solid red"; }
		else { inputEnderecoCadastrarPost.style.borderBottom = "4px solid var(--style-terciary-color)"; }
		
		// exibição da toast message
		ExibirToastMessage(1);
	}
	
	// inputs preenchidos
	else {
		
		// Reset na borderBottom dos inputs
		inputTituloCadastrarPost.style.borderBottom = "4px solid var(--style-terciary-color)";
		inputMensagemCadastrarPost.style.borderBottom = "4px solid var(--style-terciary-color)";
		inputEnderecoCadastrarPost.style.borderBottom = "4px solid var(--style-terciary-color)";
		
		// AJAX
		params = "titulo=" + inputTituloCadastrarPost.value
		       + "&mensagem=" + inputMensagemCadastrarPost.value
		       + "&endereco=" + inputEnderecoCadastrarPost.value;
		
		req = new XMLHttpRequest();
		req.open("POST", "http://localhost:7777/", true);
		req.onreadystatechange = function() {
			
			// Servidor Fora do Ar
			if (req.readyState != 4 || req.status != 200) {  }
			
			// Cadastro Efetuado com Sucesso
			else { 
				
				/* back deve retornar a id do Post a fim ded redirecionar usuário
				 * à página de visualização */
				window.location.href = "visualizar-post.jsp?idPost=" + this.responseText; 
			}
		};
		
		// Definição do header do método HTTP POST
		// e envio dos parãmetros
		req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		req.send(params);
	}
});