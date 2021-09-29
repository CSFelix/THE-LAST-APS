/* 
	Variáveis
*/

var vueMainContent = new Vue({
  el: '#mainContent',
  data: {
	tituloOperacaoPortugues: 'Operação Realizada!!',
	tituloOperacaoEnglish: 'Done!!',
	tituloOperacaoAtiva: '',
	
	mensagemOperacaoPortugues: 'Operação realizada com sucesso 🎉',
	mensagemOperacaoEnglish: 'The process\'s done successfully 🎉',
	mensagemOperacaoAtiva: '',
	
	botaoVoltarLoginPortugues: 'Voltar ao Login',
	botaoVoltarLoginEnglish: 'Back to Login',
	botaoVoltarLoginAtiva: ''
  }
});

/*
	Controladores
*/
const vueAtivarControladorIdiomaOperacaoRealizada = () => {
	
	loginLocalStorage = localStorage.getItem('language');
	
	// português - br
	if ((loginLocalStorage == '1') 
		|| (typeof loginLocalStorage !== 'undefined' && loginLocalStorage !== null && loginLocalStorage != '2')) {
		
		vueMainContent.tituloOperacaoAtiva = vueMainContent.tituloOperacaoPortugues;
		vueMainContent.mensagemOperacaoAtiva = vueMainContent.mensagemOperacaoPortugues;
		vueMainContent.botaoVoltarLoginAtiva = vueMainContent.botaoVoltarLoginPortugues;
	}

	// english - eua
	else {
		vueMainContent.tituloOperacaoAtiva = vueMainContent.tituloOperacaoEnglish;
		vueMainContent.mensagemOperacaoAtiva = vueMainContent.mensagemOperacaoEnglish;
		vueMainContent.botaoVoltarLoginAtiva = vueMainContent.botaoVoltarLoginEnglish;
	}
};