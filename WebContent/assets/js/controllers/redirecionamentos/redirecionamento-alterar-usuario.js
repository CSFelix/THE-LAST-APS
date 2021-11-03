function RedirecionarAlterarUsuario(botaoAlterarUsuario) {
	window.location.href = "alterar-usuario.jsp?idUsuario="
						  + botaoAlterarUsuario.dataset.id
						  + "&idioma="
						  + localStorage.getItem('language'); 
}