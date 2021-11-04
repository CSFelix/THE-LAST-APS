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


// Captura do Parâmetro
var url = new URLSearchParams(window.location.search);
var id = url.get('idPost');

// AJAX
req = new XMLHttpRequest();
req.open("GET", "http://localhost:3000/postagem/" + id, true);
req.onreadystatechange = function() {
	
	// Servidor Fora do Ar
	if (req.readyState != 4 || req.status != 200) {  }
	
	// Busca das Informações Efetuada com Sucesso
	else { 
		inputTituloAlterarPost.value = JSON.parse(this.responseText).titulo;
		inputMensagemAlterarPost.value = JSON.parse(this.responseText).mensagem;
		inputEnderecoAlterarPost.value = JSON.parse(this.responseText).endereco;
		inputDataCriacaoAlterarPost.value = JSON.parse(this.responseText).dataCriacao;
		inputStatusSelecionadoAlterarPost.value = JSON.parse(this.responseText).status.nome;
		inputComentarioAlterarPost.value = JSON.parse(this.responseText).comentario;
	}
};

// Definição do header
// e envio dos parãmetros
req.setRequestHeader('Content-Type', 'application/json');
req.send();

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
		params =  {
			    idPost: id,
			    titulo: inputTituloAlterarPost.value,
			    mensagem: inputMensagemAlterarPost.value,
			    endereco: inputEnderecoAlterarPost.value,
			    dataCriacao: inputDataCriacaoAlterarPost.value,
			    status: inputStatusSelecionadoAlterarPost.value,
			     comentario: inputComentarioAlterarPost.value
		}
		
		req = new XMLHttpRequest();
		req.open("POST", "http://localhost:3000/postagem", true);
		req.onreadystatechange = function() {
			
			// Servidor Fora do Ar
			if (req.readyState != 4 || req.status != 200) {  }
			
			// Alteração Efetuada com Sucesso
			else {
				
				/* back deve retornar a id do Post a fim ded redirecionar usuário
				 * à página de visualização */
				window.location.href = "visualizar-post.jsp?idPost=" + JSON.parse(this.responseText).id; 
			}
		};
		
		// Definição do header
		// e envio dos parãmetros
		// req.setRequestHeader('Authorization', localStorage.getItem("Authorization"));
		req.setRequestHeader('Content-Type', 'application/json');
		req.send(JSON.stringify(params));
	}
});
