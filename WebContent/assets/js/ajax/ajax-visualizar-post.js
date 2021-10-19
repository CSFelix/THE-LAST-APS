const inputTituloVisualizarPost = document.getElementById("inputTitulo");
const inputMensagemVisualizarPost = document.getElementById("inputMensagem");
const inputEnderecoVisualizarPost = document.getElementById("inputEndereco");
const inputDataCriacaoVisualizarPost = document.getElementById("inputDataCriacao");
const inputStatusSelecionadoVisualizarPost = document.getElementById("statusSelecionado");
const inputComentarioVisualizarPost = document.getElementById("inputComentario");
var params;
var req;

// AJAX
req = new XMLHttpRequest();
req.open("GET", "http://localhost:3000//autoridade/" + localStorage.getItem("idPost"), true);
req.onreadystatechange = function() {
	
	// Servidor Fora do Ar
	if (req.readyState != 4 || req.status != 200) {  }
	
	// Busca das Informações Efetuada com Sucesso
	else { 
		
		/* To-Do: ver como que informações virão do back e atribuir valores aos campos */
		inputTituloVisualizarPost.value;
		inputMensagemVisualizarPost.value;
		inputEnderecoVisualizarPost.value;
		inputDataCriacaoVisualizarPost.value;
		inputStatusSelecionadoVisualizarPost.value;
		inputComentarioVisualizarPost.value;
	}
};

// Definição do header do método HTTP POST
// e envio dos parãmetros
req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
req.send();
