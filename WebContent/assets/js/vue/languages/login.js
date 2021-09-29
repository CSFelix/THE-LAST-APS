/* 
	Variáveis
*/

var vueMainContent = new Vue({
  el: '#mainContent',
  data: {
    labelLoginPortugues: 'Seu Nome',
    labelLoginEnglish: 'Your Name',
    labelLoginAtiva: '',

    labelSenhaPortugues: 'Sua Senha',
    labelSenhaEnglish: 'Your Password',
    labelSenhaAtiva: '',

    botaoLoginPortugues: 'Entrar',
    botaoLoginEnglish: 'Sign In',
    botaoLoginAtiva: '',

    botaoCadastrarPortugues: 'Cadastre-se',
    botaoCadastrarEnglish: 'Sign Up',
    botaoCadastrarAtiva: '',

    esqueceuSenhaPortugues: 'Esqueceu sua Senha?',
    esqueceuSenhaEnglish: 'Forgot your Password?',
    esqueceuSenhaAtiva: '',
    
    statusContaPortugues: 'Desativar | Reativar Conta',
    statusContaEnglish: 'Disable | Enable Account',
    statusContaAtiva: ''
  }
});

/*
	Controladores
*/
const vueAtivarControladorIdiomaLogin = () => {
	
	loginLocalStorage = localStorage.getItem('language');
	
	// português - br
	if ((loginLocalStorage == '1') 
		|| (typeof loginLocalStorage !== 'undefined' && loginLocalStorage !== null && loginLocalStorage != '2')) {
		
		vueMainContent.labelLoginAtiva = vueMainContent.labelLoginPortugues;
		vueMainContent.labelSenhaAtiva = vueMainContent.labelSenhaPortugues;
		vueMainContent.botaoLoginAtiva = vueMainContent.botaoLoginPortugues;
		vueMainContent.botaoCadastrarAtiva = vueMainContent.botaoCadastrarPortugues;
		vueMainContent.esqueceuSenhaAtiva = vueMainContent.esqueceuSenhaPortugues;
		vueMainContent.statusContaAtiva = vueMainContent.statusContaPortugues;
	}

	// english - eua
	else {
		vueMainContent.labelLoginAtiva = vueMainContent.labelLoginEnglish;
		vueMainContent.labelSenhaAtiva = vueMainContent.labelSenhaEnglish;
		vueMainContent.botaoLoginAtiva = vueMainContent.botaoLoginEnglish;
		vueMainContent.botaoCadastrarAtiva = vueMainContent.botaoCadastrarEnglish;
		vueMainContent.esqueceuSenhaAtiva = vueMainContent.esqueceuSenhaEnglish;
		vueMainContent.statusContaAtiva = vueMainContent.statusContaEnglish;
	}
};