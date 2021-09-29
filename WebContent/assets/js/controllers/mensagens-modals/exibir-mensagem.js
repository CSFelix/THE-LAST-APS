ExibirToastMessage = (codigoMensagem) => {
	
	const toast = document.getElementById("toast");
	var mensagem;
	
	// (1) Campos obrigatórios não preenchidos
	if (codigoMensagem == 1) { 
		if (localStorage.getItem('language') === "1") { mensagem = msgInputNaoPreenchidoPortugues; }
		else { mensagem = msgInputNaoPreenchidoEnglish; }
	}
	
	// (2) Campos de Senha e Confirmar Senha não estão iguais
	else if (codigoMensagem == 2) { 
		if (localStorage.getItem('language') === "1") { mensagem = msgSenhasDiferentesPortugues; }
		else { mensagem = msgSenhasDiferentesEnglish; }
	}
	
	// (3) Servidor Fora do Ar
	else if (codigoMensagem == 3) { 
		if (localStorage.getItem('language') === "1") { mensagem = msgServidorForaPortugues; }
		else { mensagem = msgServidorForaEnglish; }
	}
	
	// (4) Nome já cadastrado
	else if (codigoMensagem == 4) { 
		if (localStorage.getItem('language') === "1") { mensagem = msgNomeCadastradoPortugues; }
		else { mensagem = msgNomeCadastradoEnglish; }
	}
	
	// (5) Nome e Senha Incorretos
	else if (codigoMensagem == 5) { 
		if (localStorage.getItem('language') === "1") { mensagem = msgNomeSenhaIncorretosPortugues; }
		else { mensagem = msgNomeSenhaIncorretosEnglish; }
	}
	
	// (6) Alteração Efetuada
	else if (codigoMensagem == 6) { 
		if (localStorage.getItem('language') === "1") { mensagem = msgAlteracaoEfetuadaPortugues; }
		else { mensagem = msgAlteracaoEfetuadaEnglish; }
	}
	
	// (7) Conta Desativada
	else if (codigoMensagem == 7) { 
		if (localStorage.getItem('language') === "1") { mensagem = msgContaDesativadaPortugues; }
		else { mensagem = msgContaDesativadaEnglish; }
	}
	
	// Processamento e exibição da mensagem
	if (codigoMensagem == 6) { 
		toast.classList.remove("toastMessageErro");
		toast.classList.add("toastMessageSucesso");
	}
	
	toast.innerHTML = mensagem;
	toast.classList.add('show');
	setTimeout(() => { toast.classList.remove('show'); }, 2000);
	
	if (codigoMensagem == 6) { 
		toast.classList.add("toastMessageErro");
		toast.classList.remove("toastMessageSucesso");
	}
}