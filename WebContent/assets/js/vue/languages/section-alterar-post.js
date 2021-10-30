/* 
  Variáveis
*/

var vuePainelAlterarPost = new Vue({
  el: '#painelAlterarPost',
  data: {
	  tituloAlterarPostPortugues: 'Alterar Post',
	  tituloAlterarPostEnglish: 'Post\'s Update',
	  tituloAlterarPostAtiva: '',
	  
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
	  
	  labelDataCriacaoPortugues: 'Criado em',
	  labelDataCriacaoEnglish: 'Created in',
	  labelDataCriacaoAtiva: '',
	  
	  labelStatusPortugues: 'Status',
	  labelStatusEnglish: 'Status',
	  labelStatusAtiva: '',
	  
	  labelComentarioPortugues: 'Comentário',
	  labelComentarioEnglish: 'Comment',
	  labelComentarioAtiva: '',
	  
	  selectStatusPendentePortugues: 'Pendente',
	  selectStatusPendenteEnglish: 'Pendent',
	  selectStatusPendenteAtiva: '',
	  
	  selectStatusAvaliandoPortugues: 'Em Avaliação',
	  selectStatusAvaliandoEnglish: 'Rating',
	  selectStatusAvaliandoAtiva: '',
	  
	  selectStatusFechadoPortugues: 'Fechado',
	  selectStatusFechadoEnglish: 'Closed',
	  selectStatusFechadoAtiva: '',
	  
	  selectStatusDescartadoPortugues: 'Descartado',
	  selectStatusDescartadoEnglish: 'Discarded',
	  selectStatusDescartadoAtiva: '',
  }
});

/*
  Controladores
*/
const vueAtivarControladorIdiomaPainelAlterarPost = () => {
  navLocalStorage = localStorage.getItem('language');
	
  // português - br
  if ((navLocalStorage == '1') 
		  || (typeof navLocalStorage !== 'undefined' && navLocalStorage !== null && navLocalStorage != '2')) {
	  
	  vuePainelAlterarPost.tituloAlterarPostAtiva = vuePainelAlterarPost.tituloAlterarPostPortugues;
	  
	  vuePainelAlterarPost.botaoVoltarAtiva = vuePainelAlterarPost.botaoVoltarPortugues;
	  vuePainelAlterarPost.botaoCancelarAtiva = vuePainelAlterarPost.botaoCancelarPortugues;
	  vuePainelAlterarPost.botaoSalvarAtiva = vuePainelAlterarPost.botaoSalvarPortugues;
	  
	  vuePainelAlterarPost.labelTituloAtiva = vuePainelAlterarPost.labelTituloPortugues;
	  vuePainelAlterarPost.labelMensagemAtiva = vuePainelAlterarPost.labelMensagemPortugues;
	  vuePainelAlterarPost.labelEnderecoAtiva = vuePainelAlterarPost.labelEnderecoPortugues;
	  
	  vuePainelAlterarPost.labelDataCriacaoAtiva = vuePainelAlterarPost.labelDataCriacaoPortugues;
	  vuePainelAlterarPost.labelStatusAtiva = vuePainelAlterarPost.labelStatusPortugues;
	  vuePainelAlterarPost.labelComentarioAtiva = vuePainelAlterarPost.labelComentarioPortugues;
	  
	  vuePainelAlterarPost.selectStatusPendenteAtiva = vuePainelAlterarPost.selectStatusPendentePortugues;
	  vuePainelAlterarPost.selectStatusAvaliandoAtiva = vuePainelAlterarPost.selectStatusAvaliandoPortugues;
	  vuePainelAlterarPost.selectStatusFechadoAtiva = vuePainelAlterarPost.selectStatusFechadoPortugues;
	  vuePainelAlterarPost.selectStatusDescartadoAtiva = vuePainelAlterarPost.selectStatusDescartadoPortugues;
  }

  // english - eua
  else {
	  vuePainelAlterarPost.tituloAlterarPostAtiva = vuePainelAlterarPost.tituloAlterarPostEnglish;
	  
	  vuePainelAlterarPost.botaoVoltarAtiva = vuePainelAlterarPost.botaoVoltarEnglish;
	  vuePainelAlterarPost.botaoCancelarAtiva = vuePainelAlterarPost.botaoCancelarEnglish;
	  vuePainelAlterarPost.botaoSalvarAtiva = vuePainelAlterarPost.botaoSalvarEnglish; 
	  
	  vuePainelAlterarPost.labelTituloAtiva = vuePainelAlterarPost.labelTituloEnglish;
	  vuePainelAlterarPost.labelMensagemAtiva = vuePainelAlterarPost.labelMensagemEnglish;
	  vuePainelAlterarPost.labelEnderecoAtiva = vuePainelAlterarPost.labelEnderecoEnglish;
	  
	  vuePainelAlterarPost.labelDataCriacaoAtiva = vuePainelAlterarPost.labelDataCriacaoEnglish;
	  vuePainelAlterarPost.labelStatusAtiva = vuePainelAlterarPost.labelStatusEnglish;
	  vuePainelAlterarPost.labelComentarioAtiva = vuePainelAlterarPost.labelComentarioEnglish;
	  
	  vuePainelAlterarPost.selectStatusPendenteAtiva = vuePainelAlterarPost.selectStatusPendenteEnglish;
	  vuePainelAlterarPost.selectStatusAvaliandoAtiva = vuePainelAlterarPost.selectStatusAvaliandoEnglish;
	  vuePainelAlterarPost.selectStatusFechadoAtiva = vuePainelAlterarPost.selectStatusFechadoEnglish;
	  vuePainelAlterarPost.selectStatusDescartadoAtiva = vuePainelAlterarPost.selectStatusDescartadoEnglish;
  }
};