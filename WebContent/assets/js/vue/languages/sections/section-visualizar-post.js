/* 
  Variáveis
*/

var vuePainelVisualizarPost = new Vue({
  el: '#painelVisualizarPost',
  data: {
	  tituloVisualizarPostPortugues: 'Visualizar Post',
	  tituloVisualizarPostEnglish: 'Post\'s View',
	  tituloVisualizarPostAtiva: '',
	  
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
	  
	  labelEnderecoPortugues: 'Endedreço',
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
const vueAtivarControladorIdiomaPainelVisualizarPost = () => {
  navLocalStorage = localStorage.getItem('language');
	
  // português - br
  if ((navLocalStorage == '1') 
		  || (typeof navLocalStorage !== 'undefined' && navLocalStorage !== null && navLocalStorage != '2')) {
	  
	  vuePainelVisualizarPost.tituloVisualizarPostAtiva = vuePainelVisualizarPost.tituloVisualizarPostPortugues;
	  
	  vuePainelVisualizarPost.botaoVoltarAtiva = vuePainelVisualizarPost.botaoVoltarPortugues;
	  vuePainelVisualizarPost.botaoCancelarAtiva = vuePainelVisualizarPost.botaoCancelarPortugues;
	  vuePainelVisualizarPost.botaoSalvarAtiva = vuePainelVisualizarPost.botaoSalvarPortugues;
	  
	  vuePainelVisualizarPost.labelTituloAtiva = vuePainelVisualizarPost.labelTituloPortugues;
	  vuePainelVisualizarPost.labelMensagemAtiva = vuePainelVisualizarPost.labelMensagemPortugues;
	  vuePainelVisualizarPost.labelEnderecoAtiva = vuePainelVisualizarPost.labelEnderecoPortugues;
	  
	  vuePainelVisualizarPost.labelDataCriacaoAtiva = vuePainelVisualizarPost.labelDataCriacaoPortugues;
	  vuePainelVisualizarPost.labelStatusAtiva = vuePainelVisualizarPost.labelStatusPortugues;
	  vuePainelVisualizarPost.labelComentarioAtiva = vuePainelVisualizarPost.labelComentarioPortugues;
	  
	  vuePainelVisualizarPost.selectStatusPendenteAtiva = vuePainelVisualizarPost.selectStatusPendentePortugues;
	  vuePainelVisualizarPost.selectStatusAvaliandoAtiva = vuePainelVisualizarPost.selectStatusAvaliandoPortugues;
	  vuePainelVisualizarPost.selectStatusFechadoAtiva = vuePainelVisualizarPost.selectStatusFechadoPortugues;
	  vuePainelVisualizarPost.selectStatusDescartadoAtiva = vuePainelVisualizarPost.selectStatusDescartadoPortugues;
  }

  // english - eua
  else {
	  vuePainelVisualizarPost.tituloVisualizarPostAtiva = vuePainelVisualizarPost.tituloVisualizarPostEnglish;
	  
	  vuePainelVisualizarPost.botaoVoltarAtiva = vuePainelVisualizarPost.botaoVoltarEnglish;
	  vuePainelVisualizarPost.botaoCancelarAtiva = vuePainelVisualizarPost.botaoCancelarEnglish;
	  vuePainelVisualizarPost.botaoSalvarAtiva = vuePainelVisualizarPost.botaoSalvarEnglish; 
	  
	  vuePainelVisualizarPost.labelTituloAtiva = vuePainelVisualizarPost.labelTituloEnglish;
	  vuePainelVisualizarPost.labelMensagemAtiva = vuePainelVisualizarPost.labelMensagemEnglish;
	  vuePainelVisualizarPost.labelEnderecoAtiva = vuePainelVisualizarPost.labelEnderecoEnglish;
	  
	  vuePainelVisualizarPost.labelDataCriacaoAtiva = vuePainelVisualizarPost.labelDataCriacaoEnglish;
	  vuePainelVisualizarPost.labelStatusAtiva = vuePainelVisualizarPost.labelStatusEnglish;
	  vuePainelVisualizarPost.labelComentarioAtiva = vuePainelVisualizarPost.labelComentarioEnglish;
	  
	  vuePainelVisualizarPost.selectStatusPendenteAtiva = vuePainelVisualizarPost.selectStatusPendenteEnglish;
	  vuePainelVisualizarPost.selectStatusAvaliandoAtiva = vuePainelVisualizarPost.selectStatusAvaliandoEnglish;
	  vuePainelVisualizarPost.selectStatusFechadoAtiva = vuePainelVisualizarPost.selectStatusFechadoEnglish;
	  vuePainelVisualizarPost.selectStatusDescartadoAtiva = vuePainelVisualizarPost.selectStatusDescartadoEnglish;
  }
};