const botaoAlterarPost = document.getElementById("botaoAlterarPost");

const inputTituloAlterarPost = document.getElementById("inputTitulo");
const inputMensagemAlterarPost = document.getElementById("inputMensagem");
const inputEnderecoAlterarPost = document.getElementById("inputEndereco");
const inputDataCriacaoAlterarPost = document.getElementById("inputDataCriacao");
const inputStatusSelecionadoAlterarPost = document.getElementById("statusSelecionado");
const inputComentarioAlterarPost = document.getElementById("inputComentario");


const toastMessageAlteracao = document.getElementById("toast");

var mensagemErro;
var params;
var req;

// clique no botão de cadastro de post
botaoAlterarPost.addEventListener("click", () => {
	
	// inputs não preenchidos
	if (   inputTituloAlterarPost.value == "" || inputMensagemAlterarPost.value == "" 
		|| inputEnderecoAlterarPost.value == "" || inputDataCriacaoAlterarPost.value == ""
		|| inputStatusSelecionadoAlterarPost.value == "" || inputComentarioAlterarPost.value == "") {
		
		// checagem do input de título
		if (inputTituloAlterarPost.value == "") { inputTituloAlterarPost.style.borderBottom = "4px solid red"; }
		else { inputTituloAlterarPost.style.borderBottom = "4px solid var(--style-terciary-color)"; }
		
		// checagem do input de mensagem
		if (inputMensagemAlterarPost.value == "") { inputMensagemAlterarPost.style.borderBottom = "4px solid red"; }
		else { inputMensagemAlterarPost.style.borderBottom = "4px solid var(--style-terciary-color)"; }
		
		// checagem do input de endereço
		if (inputEnderecoAlterarPost.value == "") { inputEnderecoAlterarPost.style.borderBottom = "4px solid red"; }
		else { inputEnderecoAlterarPost.style.borderBottom = "4px solid var(--style-terciary-color)"; }
		
		// checagem do input de data de criação
		if (inputDataCriacaoAlterarPost.value == "") { inputDataCriacaoAlterarPost.style.borderBottom = "4px solid red"; }
		else { inputDataCriacaoAlterarPost.style.borderBottom = "4px solid var(--style-terciary-color)"; }
		
		// checagem do input de status
		if (inputStatusSelecionadoAlterarPost.value == "") { inputStatusSelecionadoAlterarPost.style.borderBottom = "4px solid red"; }
		else { inputStatusSelecionadoAlterarPost.style.borderBottom = "4px solid var(--style-terciary-color)"; }
		
		// exibição da toast message
		ExibirToastMessage(1);
	}
	
	// inputs preenchidos
	else {
		
		// Reset na borderBottom dos inputs
		inputTituloAlterarPost.style.borderBottom = "4px solid var(--style-terciary-color)";
		inputMensagemAlterarPost.style.borderBottom = "4px solid var(--style-terciary-color)";
		inputEnderecoAlterarPost.style.borderBottom = "4px solid var(--style-terciary-color)";
		inputDataCriacaoAlterarPost.style.borderBottom = "4px solid var(--style-terciary-color)";
		inputStatusSelecionadoAlterarPost.style.borderBottom = "4px solid var(--style-terciary-color)";
		
		// AJAX
		params = "idPost=" + localStorage.getItem("idPost")
		       + "&titulo=" + inputTituloAlterarPost.value
		       + "&mensagem=" + inputMensagemAlterarPost.value
		       + "&endereco=" + inputEnderecoAlterarPost.value
		       + "&dataCriacao=" + inputDataCriacaoAlterarPost.value
		       + "&status=" + inputStatusSelecionadoAlterarPost.value
		       + "&comentario=" + inputComentarioAlteraPost.value;
		
		req = new XMLHttpRequest();
		req.open("POST", "http://localhost:7777/postagem", true);
		req.onreadystatechange = function() {
			
			// Servidor Fora do Ar
			if (req.readyState != 4 || req.status != 200) {  }
			
			// Alteração Efetuada com Sucesso
			else {
				
				/* back deve retornar a id do Post a fim ded redirecionar usuário
				 * à página de visualização */
				window.location.href = "visualizar-post.jsp?idPost=" + this.responseText.id; 
			}
		};
		
		// Definição do header do método HTTP POST
		// e envio dos parãmetros
		req.setRequestHeader('Authorization', localStorage.getItem("Authorization"));
		req.send(params);
	}
});
