/* 
	Variáveis
*/

var vueMainContent = new Vue({
  el: '#mainContent',
  data: {
	tituloCadastroPortugues: 'Cadastro',
	tituloCadastroEnglish: 'Sign Up',
	tituloCadastroAtiva: '',
	
	labelEmailPortugues: 'Seu Email',
	labelEmailEnglish: 'Your Email',
	labelEmailAtiva: '',
	
    labelNomePortugues: 'Seu Nome',
    labelNomeEnglish: 'Your Name',
    labelNomeAtiva: '',

    labelAutoridadePortugues: 'Autoridade',
    labelAutoridadeEnglish: 'Authority',
    labelAutoridadeAtiva: '',
    
    labelSenhaPortugues: 'Sua Senha',
    labelSenhaEnglish: 'Your Password',
    labelSenhaAtiva: '',
    
    labelConfirmarSenhaPortugues: 'Confirme sua Senha',
    labelConfirmarSenhaEnglish: 'Confirm the Password',
    labelConfirmarSenhaAtiva: '',

    labelNivelAutorizacaoPortugues: 'Nível de Acesso',
    labelNivelAutorizacaoEnglish: 'Access Level',
    labelNivelAutorizacaoAtiva: '',
    
    selectStatusAutoridadePublicaPortugues: 'Autoridade Pública',
    selectStatusAutoridadePublicaEnglish: 'Public Authority',
    selectStatusAutoridadePublicaAtiva: '',
    
    selectStatusAdministradorPortugues: 'Administrador',
    selectStatusAdministradorEnglish: 'Admin',
    selectStatusAdministradorAtiva: '',
    
    botaoVoltarLoginPortugues: 'Voltar ao Login',
    botaoVoltarLoginEnglish: 'Back to Login',
    botaoVoltarLoginAtiva: '',

    botaoCadastrarPortugues: 'Cadastre-se',
    botaoCadastrarEnglish: 'Sign Up',
    botaoCadastrarAtiva: '',
  }
});

/*
	Controladores
*/
const vueAtivarControladorIdiomaCadastro = () => {
	
	loginLocalStorage = localStorage.getItem('language');
	
	// português - br
	if ((loginLocalStorage == '1') 
		|| (typeof loginLocalStorage !== 'undefined' && loginLocalStorage !== null && loginLocalStorage != '2')) {
		
		vueMainContent.tituloCadastroAtiva = vueMainContent.tituloCadastroPortugues;
		
		vueMainContent.labelEmailAtiva = vueMainContent.labelEmailPortugues;
		vueMainContent.labelNomeAtiva = vueMainContent.labelNomePortugues;
		vueMainContent.labelAutoridadeAtiva = vueMainContent.labelAutoridadePortugues;
		vueMainContent.labelSenhaAtiva = vueMainContent.labelSenhaPortugues;
		vueMainContent.labelConfirmarSenhaAtiva = vueMainContent.labelConfirmarSenhaPortugues;
		vueMainContent.labelNivelAutorizacaoAtiva = vueMainContent.labelNivelAutorizacaoPortugues;
		vueMainContent.selectStatusAutoridadePublicaAtiva = vueMainContent.selectStatusAutoridadePublicaPortugues;
		vueMainContent.selectStatusAdministradorAtiva = vueMainContent.selectStatusAdministradorPortugues;
		
		vueMainContent.botaoVoltarLoginAtiva = vueMainContent.botaoVoltarLoginPortugues;
		vueMainContent.botaoCadastrarAtiva = vueMainContent.botaoCadastrarPortugues;
	}

	// english - eua
	else {
		vueMainContent.tituloCadastroAtiva = vueMainContent.tituloCadastroEnglish;
		
		vueMainContent.labelEmailAtiva = vueMainContent.labelEmailEnglish;
		vueMainContent.labelNomeAtiva = vueMainContent.labelNomeEnglish;
		vueMainContent.labelAutoridadeAtiva = vueMainContent.labelAutoridadeEnglish;
		vueMainContent.labelSenhaAtiva = vueMainContent.labelSenhaEnglish;
		vueMainContent.labelConfirmarSenhaAtiva = vueMainContent.labelConfirmarSenhaEnglish;
		vueMainContent.labelNivelAutorizacaoAtiva = vueMainContent.labelNivelAutorizacaoEnglish;
		vueMainContent.selectStatusAutoridadePublicaAtiva = vueMainContent.selectStatusAutoridadePublicaEnglish;
		vueMainContent.selectStatusAdministradorAtiva = vueMainContent.selectStatusAdministradorEnglish;
		
		vueMainContent.botaoVoltarLoginAtiva = vueMainContent.botaoVoltarLoginEnglish;
		vueMainContent.botaoCadastrarAtiva = vueMainContent.botaoCadastrarEnglish;
	}
};