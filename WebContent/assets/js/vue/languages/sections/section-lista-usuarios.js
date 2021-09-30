/* 
  Variáveis
*/

var vuePainelListaUsuarios = new Vue({
  el: '#painelListaUsuarios',
  data: {
	  tituloListaUsuariosPortugues: 'Lista de Usuários',
	  tituloListaUsuariosEnglish: 'Users\' List',
	  tituloListaUsuariosAtiva: '',
	  
	  palavraPaginaPortugues: 'Página',
	  palavraPaginaEnglish: 'Page',
	  palavraPaginaAtiva: '',
	  
	  palavraDePortugues: 'de',
	  palavraDeEnglish: 'of',
	  palavraDeAtiva: '',
	  
	  trOpcoesPortugues: 'Opções',
	  trOpcoesEnglish: 'Options',
	  trOpcoesAtiva: '',
	  
	  trNomePortugues: 'Nome',
	  trNomeEnglish: 'Name',
	  trNomeAtiva: '',
	  
	  trEmailPortugues: 'Email',
	  trEmailEnglish: 'Email',
	  trEmailAtiva: '',
	  
	  trNivelAutorizacaoPortugues: 'Nível de Autorização',
	  trNivelAutorizacaoEnglish: 'Authority Level',
	  trNivelAutorizacaoAtiva: '',
	  
	  trDataCriacaoPortugues: 'Início',
	  trDataCriacaoEnglish: 'Since',
	  trDataCriacaoAtiva: '',
	  
	  trStatusPortugues: 'Status',
	  trStatusEnglish: 'Status',
	  trStatusAtiva: '',
	  
	  trOpcaoAlterarPortugues: 'Alterar',
	  trOpcaoAlterarEnglish: 'Edit',
	  trOpcaoAlterarAtiva: '',
  }
});

/*
  Controladores
*/
const vueAtivarControladorIdiomaPainelListaUsuarios = () => {
  navLocalStorage = localStorage.getItem('language');
	
  // português - br
  if ((navLocalStorage == '1') 
		  || (typeof navLocalStorage !== 'undefined' && navLocalStorage !== null && navLocalStorage != '2')) {
	  
	  vuePainelListaUsuarios.tituloListaUsuariosAtiva = vuePainelListaUsuarios.tituloListaUsuariosPortugues;
	  vuePainelListaUsuarios.palavraPaginaAtiva = vuePainelListaUsuarios.palavraPaginaPortugues;
	  vuePainelListaUsuarios.palavraDeAtiva = vuePainelListaUsuarios.palavraDePortugues;
	  
	  vuePainelListaUsuarios.trOpcoesAtiva = vuePainelListaUsuarios.trOpcoesPortugues;
	  vuePainelListaUsuarios.trNomeAtiva = vuePainelListaUsuarios.trNomePortugues;
	  vuePainelListaUsuarios.trEmailAtiva = vuePainelListaUsuarios.trEmailPortugues;
	  vuePainelListaUsuarios.trNivelAutorizacaoAtiva = vuePainelListaUsuarios.trNivelAutorizacaoPortugues;
	  
	  vuePainelListaUsuarios.trDataCriacaoAtiva = vuePainelListaUsuarios.trDataCriacaoPortugues;
	  vuePainelListaUsuarios.trStatusAtiva = vuePainelListaUsuarios.trStatusPortugues;
	  
	  vuePainelListaUsuarios.trOpcaoAlterarAtiva = vuePainelListaUsuarios.trOpcaoAlterarPortugues;
  }

  // english - eua
  else {
	  vuePainelListaUsuarios.tituloListaUsuariosAtiva = vuePainelListaUsuarios.tituloListaUsuariosEnglish;
	  vuePainelListaUsuarios.palavraPaginaAtiva = vuePainelListaUsuarios.palavraPaginaEnglish;
	  vuePainelListaUsuarios.palavraDeAtiva = vuePainelListaUsuarios.palavraDeEnglish;
	  
	  vuePainelListaUsuarios.trOpcoesAtiva = vuePainelListaUsuarios.trOpcoesEnglish;
	  vuePainelListaUsuarios.trNomeAtiva = vuePainelListaUsuarios.trNomeEnglish;
	  vuePainelListaUsuarios.trEmailAtiva = vuePainelListaUsuarios.trEmailEnglish;
	  vuePainelListaUsuarios.trNivelAutorizacaoAtiva = vuePainelListaUsuarios.trNivelAutorizacaoEnglish;
	  
	  vuePainelListaUsuarios.trDataCriacaoAtiva = vuePainelListaUsuarios.trDataCriacaoEnglish;
	  vuePainelListaUsuarios.trStatusAtiva = vuePainelListaUsuarios.trStatusEnglish;
	  
	  vuePainelListaUsuarios.trOpcaoAlterarAtiva = vuePainelListaUsuarios.trOpcaoAlterarEnglish;
  }
};