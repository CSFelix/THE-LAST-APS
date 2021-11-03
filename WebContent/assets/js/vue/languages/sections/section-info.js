/* 
  Variáveis
*/

var vuePainelInfo = new Vue({
  el: '#painelInfo',
  data: {
	  tituloInfoPortugues: 'Info',
	  tituloInfoEnglish: 'Info',
	  tituloInfoAtiva: '',
	  
	  botaoEditarPortugues: 'Editar',
	  botaoEditarEnglish: 'Edit',
	  botaoEditarAtiva: '',
	  
	  labelNomePortugues: 'Nome',
	  labelNomeEnglish: 'Name',
	  labelNomeAtiva: '',
	  
	  labelEmailPortugues: 'Email',
	  labelEmailEnglish: 'Email',
	  labelEmailAtiva: '',
	  
	  labelAutoridadePortugues: 'Autoridade',
	  labelAutoridadeEnglish: 'Authority',
	  labelAutoridadeAtiva: '',
	  
	  botaoCancelarPortugues: 'Cancelar',
	  botaoCancelarEnglish: 'Cancel',
	  botaoCancelarAtiva: '',
	  
	  botaoSalvarPortugues: 'Salvar',
	  botaoSalvarEnglish: 'Confirm',
	  botaoSalvarAtiva: '',
	  
	  alterarSenhaPortugues: 'Alterar Senha',
	  alterarSenhaEnglish: 'Change Password',
	  alterarSenhaAtiva: '',
  }
});

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
	  vuePainelInfo.labelEmailAtiva = vuePainelInfo.labelEmailPortugues;
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
	   vuePainelInfo.labelEmailAtiva = vuePainelInfo.labelEmailEnglish;
	   vuePainelInfo.labelAutoridadeAtiva = vuePainelInfo.labelAutoridadeEnglish;
	   vuePainelInfo.botaoCancelarAtiva = vuePainelInfo.botaoCancelarEnglish;
	   vuePainelInfo.botaoSalvarAtiva = vuePainelInfo.botaoSalvarEnglish;
	   vuePainelInfo.alterarSenhaAtiva = vuePainelInfo.alterarSenhaEnglish;
  }
};
