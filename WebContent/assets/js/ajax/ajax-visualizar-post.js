const inputTituloVisualizarPost = document.getElementById("inputTitulo");
const inputMensagemVisualizarPost = document.getElementById("inputMensagem");
const inputEnderecoVisualizarPost = document.getElementById("inputEndereco");
const inputDataCriacaoVisualizarPost = document.getElementById("inputDataCriacao");
const inputStatusSelecionadoVisualizarPost = document.getElementById("statusSelecionado");
const inputComentarioVisualizarPost = document.getElementById("inputComentario");
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
		inputTituloVisualizarPost.value = JSON.parse(this.responseText).titulo;
		inputMensagemVisualizarPost.value = JSON.parse(this.responseText).mensagem;
		inputEnderecoVisualizarPost.value = JSON.parse(this.responseText).endereco;
		inputDataCriacaoVisualizarPost.value = JSON.parse(this.responseText).dataCriacao;
		inputStatusSelecionadoVisualizarPost.value = JSON.parse(this.responseText).status.nome;
		inputComentarioVisualizarPost.value = JSON.parse(this.responseText).comentario;
	}
};

// Definição do header
// e envio dos parãmetros
req.setRequestHeader('Content-Type', 'application/json');
req.send();
