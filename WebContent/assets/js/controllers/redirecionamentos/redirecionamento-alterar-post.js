function RedirecionarAlterarPost(botaoAlterarPost) {
	window.location.href = "alterar-post.jsp?idPost="
						  + botaoAlterarPost.dataset.id
						  + "&idioma="
						  + localStorage.getItem('language'); 
}