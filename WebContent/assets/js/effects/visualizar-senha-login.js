const botaoSenha= document.querySelector('.visualizarSenha');
const inputSenhaVisualizar = document.getElementById('inputSenha');

botaoSenha.addEventListener('click', () => {
	// ativar visualizar senha
	if (botaoSenha.classList.contains('fa-eye')) {
		botaoSenha.classList.remove('fa-eye');
		botaoSenha.classList.add('fa-eye-slash');

		inputSenhaVisualizar.type = 'text';
	}

	// desativar visualizar senha
	else {
		botaoSenha.classList.remove('fa-eye-slash');
		botaoSenha.classList.add('fa-eye');

		inputSenhaVisualizar.type = 'password';
	}
});