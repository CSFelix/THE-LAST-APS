/* 
  Variáveis
*/

var vuePainelListaPosts = new Vue({
  el: '#painelListaPosts',
  data: {
	  tituloListaPostsPortugues: 'Lista de Postagens',
	  tituloListaPostsEnglish: 'Posts\' List',
	  tituloListaPostsAtiva: '',
	  
	  palavraPaginaPortugues: 'Página',
	  palavraPaginaEnglish: 'Page',
	  palavraPaginaAtiva: '',
	  
	  palavraDePortugues: 'de',
	  palavraDeEnglish: 'of',
	  palavraDeAtiva: '',
	  
	  trOpcoesPortugues: 'Opções',
	  trOpcoesEnglish: 'Options',
	  trOpcoesAtiva: '',
	  
	  trTituloPortugues: 'Título',
	  trTituloEnglish: 'Title',
	  trTituloAtiva: '',
	  
	  trCriacaoPortugues: 'Data de Criação',
	  trCriacaoEnglish: 'Created in',
	  trCriacaoAtiva: '',
	  
	  trStatusPortugues: 'Status',
	  trStatusEnglish: 'Status',
	  trStatusAtiva: '',
	  
	  trStatusPendentePortugues: 'Pendente',
	  trStatusPendenteEnglish: 'Pendent',
	  trStatusPendenteAtiva: '',
	  
	  trStatusAvaliandoPortugues: 'Em Avaliação',
	  trStatusAvaliandoEnglish: 'Rating',
	  trStatusAvaliandoAtiva: '',
	  
	  trStatusFechadoPortugues: 'Fechado',
	  trStatusFechadoEnglish: 'Closed',
	  trStatusFechadoAtiva: '',
	  
	  trStatusDescartadoPortugues: 'Descartado',
	  trStatusDescartadoEnglish: 'Discarded',
	  trStatusDescartadoAtiva: '',
	  
	  trOpcaoAlterarPortugues: 'Alterar',
	  trOpcaoAlterarEnglish: 'Edit',
	  trOpcaoAlterarAtiva: '',
	  
	  trOpcaoAvaliarPortugues: 'Avaliar',
	  trOpcaoAvaliarEnglish: 'Rate',
	  trOpcaoAvaliarAtiva: '',
	  
	  trOpcaoVisualizarPortugues: 'Visualizar',
	  trOpcaoVisualizarEnglish: 'View',
	  trOpcaoVisualizarAtiva: '',
  }
});

/*
  Controladores
*/
const vueAtivarControladorIdiomaPainelListaPosts = () => {
  navLocalStorage = localStorage.getItem('language');
	
  // português - br
  if ((navLocalStorage == '1') 
		  || (typeof navLocalStorage !== 'undefined' && navLocalStorage !== null && navLocalStorage != '2')) {
	  
	  vuePainelListaPosts.tituloListaPostsAtiva = vuePainelListaPosts.tituloListaPostsPortugues;
	  vuePainelListaPosts.palavraPaginaAtiva = vuePainelListaPosts.palavraPaginaPortugues;
	  vuePainelListaPosts.palavraDeAtiva = vuePainelListaPosts.palavraDePortugues;
	 
	  vuePainelListaPosts.trOpcoesAtiva = vuePainelListaPosts.trOpcoesPortugues;
	  vuePainelListaPosts.trTituloAtiva = vuePainelListaPosts.trTituloPortugues;
	  vuePainelListaPosts.trCriacaoAtiva = vuePainelListaPosts.trCriacaoPortugues;
	  vuePainelListaPosts.trStatusAtiva = vuePainelListaPosts.trStatusPortugues;
	  
	  vuePainelListaPosts.trStatusPendenteAtiva = vuePainelListaPosts.trStatusPendentePortugues;
	  vuePainelListaPosts.trStatusAvaliandoAtiva = vuePainelListaPosts.trStatusAvaliandoPortugues;
	  vuePainelListaPosts.trStatusFechadoAtiva = vuePainelListaPosts.trStatusFechadoPortugues;
	  vuePainelListaPosts.trStatusDescartadoAtiva = vuePainelListaPosts.trStatusDescartadoPortugues;
	  
	  vuePainelListaPosts.trOpcaoAlterarAtiva = vuePainelListaPosts.trOpcaoAlterarPortugues;
	  vuePainelListaPosts.trOpcaoAvaliarAtiva = vuePainelListaPosts.trOpcaoAvaliarPortugues;
	  vuePainelListaPosts.trOpcaoVisualizarAtiva = vuePainelListaPosts.trOpcaoVisualizarPortugues;
  }

  // english - eua
  else {
	  vuePainelListaPosts.tituloListaPostsAtiva = vuePainelListaPosts.tituloListaPostsEnglish;
	  vuePainelListaPosts.palavraPaginaAtiva = vuePainelListaPosts.palavraPaginaEnglish;
	  vuePainelListaPosts.palavraDeAtiva = vuePainelListaPosts.palavraDeEnglish;
	  
	  vuePainelListaPosts.trOpcoesAtiva = vuePainelListaPosts.trOpcoesEnglish;
	  vuePainelListaPosts.trTituloAtiva = vuePainelListaPosts.trTituloEnglish;
	  vuePainelListaPosts.trCriacaoAtiva = vuePainelListaPosts.trCriacaoEnglish;
	  vuePainelListaPosts.trStatusAtiva = vuePainelListaPosts.trStatusEnglish;
	  
	  vuePainelListaPosts.trStatusPendenteAtiva = vuePainelListaPosts.trStatusPendenteEnglish;
	  vuePainelListaPosts.trStatusAvaliandoAtiva = vuePainelListaPosts.trStatusAvaliandoEnglish;
	  vuePainelListaPosts.trStatusFechadoAtiva = vuePainelListaPosts.trStatusFechadoEnglish;
	  vuePainelListaPosts.trStatusDescartadoAtiva = vuePainelListaPosts.trStatusDescartadoEnglish;
	  
	  vuePainelListaPosts.trOpcaoAlterarAtiva = vuePainelListaPosts.trOpcaoAlterarEnglish;
	  vuePainelListaPosts.trOpcaoAvaliarAtiva = vuePainelListaPosts.trOpcaoAvaliarEnglish;
	  vuePainelListaPosts.trOpcaoVisualizarAtiva = vuePainelListaPosts.trOpcaoVisualizarEnglish;
  }
};