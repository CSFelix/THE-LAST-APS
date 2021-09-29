/* 
	Variáveis
*/

var vueMainContent = new Vue({
  el: '#mainContent',
  data: {
	tituloAlterarSenhaPortugues: 'Alterar Senha',
	tituloAlterarSenhaEnglish: 'Change Password',
	tituloAlterarSenhaAtiva: '',
	
    labelEmailPortugues: 'Seu Email',
    labelEmailEnglish: 'Your Email',
    labelEmailAtiva: '',

    labelSenhaPortugues: 'Sua Senha',
    labelSenhaEnglish: 'Your Password',
    labelSenhaAtiva: '',
    
    labelConfirmarSenhaPortugues: 'Confirme sua Senha',
    labelConfirmarSenhaEnglish: 'Confirm the Password',
    labelConfirmarSenhaAtiva: '',

    botaoVoltarLoginPortugues: 'Voltar ao Login',
    botaoVoltarLoginEnglish: 'Back to Login',
    botaoVoltarLoginAtiva: '',

    botaoAlterarSenhaPortugues: 'Alterar',
    botaoAlterarSenhaEnglish: 'Change',
    botaoAlterarSenhaAtiva: '',
  }
});

/*
	Controladores
*/
const vueAtivarControladorIdiomaAlterarSenha = () => {
	
	loginLocalStorage = localStorage.getItem('language');
	
	// português - br
	if ((loginLocalStorage == '1') 
		|| (typeof loginLocalStorage !== 'undefined' && loginLocalStorage !== null && loginLocalStorage != '2')) {
		
		vueMainContent.tituloAlterarSenhaAtiva = vueMainContent.tituloAlterarSenhaPortugues;
		vueMainContent.labelEmailAtiva = vueMainContent.labelEmailPortugues;
		vueMainContent.labelSenhaAtiva = vueMainContent.labelSenhaPortugues;
		vueMainContent.labelConfirmarSenhaAtiva = vueMainContent.labelConfirmarSenhaPortugues;
		
		vueMainContent.botaoVoltarLoginAtiva = vueMainContent.botaoVoltarLoginPortugues;
		vueMainContent.botaoAlterarSenhaAtiva = vueMainContent.botaoAlterarSenhaPortugues;
	}

	// english - eua
	else {
		vueMainContent.tituloAlterarSenhaAtiva = vueMainContent.tituloAlterarSenhaEnglish;
		vueMainContent.labelEmailAtiva = vueMainContent.labelEmailEnglish;
		vueMainContent.labelSenhaAtiva = vueMainContent.labelSenhaEnglish;
		vueMainContent.labelConfirmarSenhaAtiva = vueMainContent.labelConfirmarSenhaEnglish;
		
		vueMainContent.botaoVoltarLoginAtiva = vueMainContent.botaoVoltarLoginEnglish;
		vueMainContent.botaoAlterarSenhaAtiva = vueMainContent.botaoAlterarSenhaEnglish;
	}
};