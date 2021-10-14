const inputTituloVisualizarPost = document.getElementById("inputTitulo");
const inputMensagemVisualizarPost = document.getElementById("inputMensagem");
const inputEnderecoVisualizarPost = document.getElementById("inputEndereco");
const inputDataCriacaoVisualizarPost = document.getElementById("inputDataCriacao");
const inputStatusSelecionadoVisualizarPost = document.getElementById("statusSelecionado");
const inputComentarioVisualizarPost = document.getElementById("inputComentario");

var params;
var req;

// informação deve estar previamente armazenada na session storage do navegador
// para tal, o valor deve-ser armazenado a partir do momento em que o usuário
// clica para ver a postagem
params = "id=" + sessionStorage.getItem("idPost"); 

// AJAX
req = new XMLHttpRequest();
req.open("POST", "http://localhost:7777/", true);
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
req.send(params);