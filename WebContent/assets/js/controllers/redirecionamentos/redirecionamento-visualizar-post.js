function RedirecionarVisualizarPost(botaoVisualizarPost) {
	window.location.href = "visualizar-post.jsp?idPost="
						  + botaoVisualizarPost.dataset.id
						  + "&idioma="
						  + localStorage.getItem('language'); 
}