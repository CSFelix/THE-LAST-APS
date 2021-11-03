/*
  Controladores
*/
const vueAtivarControladorIdiomaPainelInfo = () => {
  navLocalStorage = localStorage.getItem('language');
	
  // português - br
  if ((navLocalStorage == '1') 
		  || (typeof navLocalStorage !== 'undefined' && navLocalStorage !== null && navLocalStorage != '2')) {
	  vuePainelInfo.tituloInfoAtiva = vuePainelInfo.tituloInfoPortugues;
	  vuePainelInfo.botaoEditarAtiva = vuePainelInfo.botaoEditarPortugues;
	  vuePainelInfo.labelNomeAtiva = vuePainelInfo.labelNomePortugues;
	  vuePainelInfo.labelNascimentoAtiva = vuePainelInfo.labelNascimentoPortugues; //labelAutoridadeAtiva
	  vuePainelInfo.labelAutoridadeAtiva = vuePainelInfo.labelAutoridadePortugues;
	  vuePainelInfo.botaoCancelarAtiva = vuePainelInfo.botaoCancelarPortugues;
	  vuePainelInfo.botaoSalvarAtiva = vuePainelInfo.botaoSalvarPortugues;
	  vuePainelInfo.alterarSenhaAtiva = vuePainelInfo.alterarSenhaPortugues;
  }

  // english - eua
  else {
	   vuePainelInfo.tituloInfoAtiva = vuePainelInfo.tituloInfoEnglish;
	   vuePainelInfo.botaoEditarAtiva = vuePainelInfo.botaoEditarEnglish;
	   vuePainelInfo.labelNomeAtiva = vuePainelInfo.labelNomeEnglish;
	   vuePainelInfo.labelNascimentoAtiva = vuePainelInfo.labelNascimentoEnglish;
	   vuePainelInfo.labelAutoridadeAtiva = vuePainelInfo.labelAutoridadeEnglish;
	   vuePainelInfo.botaoCancelarAtiva = vuePainelInfo.botaoCancelarEnglish;
	   vuePainelInfo.botaoSalvarAtiva = vuePainelInfo.botaoSalvarEnglish;
	   vuePainelInfo.alterarSenhaAtiva = vuePainelInfo.alterarSenhaEnglish;
  }
};
