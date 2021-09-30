/* 
  Variáveis
*/

var vuePainelCadastroPost = new Vue({
  el: '#painelCadastroPost',
  data: {
	  tituloCadastroPostPortugues: 'Cadastro de Post',
	  tituloCadastroPostEnglish: 'Post\'s Insert',
	  tituloCadastroPostAtiva: '',
	  
	  botaoVoltarPortugues: 'Voltar',
	  botaoVoltarEnglish: 'Back',
	  botaoVoltarAtiva: '',
	  
	  botaoCancelarPortugues: 'Cancelar',
	  botaoCancelarEnglish: 'Cancel',
	  botaoCancelarAtiva: '',
	  
	  botaoSalvarPortugues: 'Salvar',
	  botaoSalvarEnglish: 'Confirm',
	  botaoSalvarAtiva: '',
	  
	  labelTituloPortugues: 'Título',
	  labelTituloEnglish: 'Title',
	  labelTituloAtiva: '',
	  
	  labelMensagemPortugues: 'Descrição',
	  labelMensagemEnglish: 'Description',
	  labelMensagemAtiva: '',
	  
	  labelEnderecoPortugues: 'Endereço',
	  labelEnderecoEnglish: 'Address',
	  labelEnderecoAtiva: '',
  }
});

/*
  Controladores
*/
const vueAtivarControladorIdiomaPainelCadastroPost = () => {
  navLocalStorage = localStorage.getItem('language');
	
  // português - br
  if ((navLocalStorage == '1') 
		  || (typeof navLocalStorage !== 'undefined' && navLocalStorage !== null && navLocalStorage != '2')) {
	  
	  vuePainelCadastroPost.tituloCadastroPostAtiva = vuePainelCadastroPost.tituloCadastroPostPortugues;
	  
	  vuePainelCadastroPost.botaoVoltarAtiva = vuePainelCadastroPost.botaoVoltarPortugues;
	  vuePainelCadastroPost.botaoCancelarAtiva = vuePainelCadastroPost.botaoCancelarPortugues;
	  vuePainelCadastroPost.botaoSalvarAtiva = vuePainelCadastroPost.botaoSalvarPortugues;
	  
	  vuePainelCadastroPost.labelTituloAtiva = vuePainelCadastroPost.labelTituloPortugues;
	  vuePainelCadastroPost.labelMensagemAtiva = vuePainelCadastroPost.labelMensagemPortugues;
	  vuePainelCadastroPost.labelEnderecoAtiva = vuePainelCadastroPost.labelEnderecoPortugues;
  }

  // english - eua
  else {
	  vuePainelCadastroPost.tituloCadastroPostAtiva = vuePainelCadastroPost.tituloCadastroPostEnglish;
	  
	  vuePainelCadastroPost.botaoVoltarAtiva = vuePainelCadastroPost.botaoVoltarEnglish;
	  vuePainelCadastroPost.botaoCancelarAtiva = vuePainelCadastroPost.botaoCancelarEnglish;
	  vuePainelCadastroPost.botaoSalvarAtiva = vuePainelCadastroPost.botaoSalvarEnglish;
	  
	  vuePainelCadastroPost.labelTituloAtiva = vuePainelCadastroPost.labelTituloEnglish;
	  vuePainelCadastroPost.labelMensagemAtiva = vuePainelCadastroPost.labelMensagemEnglish;
	  vuePainelCadastroPost.labelEnderecoAtiva = vuePainelCadastroPost.labelEnderecoEnglish;
  }
};