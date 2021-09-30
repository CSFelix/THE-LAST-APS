/* 
  Variáveis
*/

var vuePainelAlterarUsuario = new Vue({
  el: '#painelAlterarUsuario',
  data: {
	  tituloAlterarUsuarioPortugues: 'Alterar Usuário',
	  tituloAlterarUsuarioEnglish: 'User\'s Update',
	  tituloAlterarUsuarioAtiva: '',
	  
	  botaoVoltarPortugues: 'Voltar',
	  botaoVoltarEnglish: 'Back',
	  botaoVoltarAtiva: '',
	  
	  botaoCancelarPortugues: 'Cancelar',
	  botaoCancelarEnglish: 'Cancel',
	  botaoCancelarAtiva: '',
	  
	  botaoSalvarPortugues: 'Salvar',
	  botaoSalvarEnglish: 'Confirm',
	  botaoSalvarAtiva: '',
	  
	  labelEmailPortugues: 'Email',
	  labelEmailEnglish: 'Email',
	  labelEmailAtiva: '',
	  
	  labelNomePortugues: 'Nome',
	  labelNomeEnglish: 'Name',
	  labelNomeAtiva: '',
	  
	  labelDataCriacaoPortugues: 'Criado em',
	  labelDataCriacaoEnglish: 'Created in',
	  labelDataCriacaoAtiva: '',
	  
	  labelNivelAutorizacaoPortugues: 'Nível de Autoridade',
	  labelNivelAutorizacaoEnglish: 'Authority Level',
	  labelNivelAutorizacaoAtiva: '',
	  
	  labelStatusPortugues: 'Status',
	  labelStatusEnglish: 'Status',
	  labelStatusAtiva: '',
	  
	  selectStatusAutoridadePublicaPortugues: 'Autoridade Pública',
	  selectStatusAutoridadePublicaEnglish: 'Public Authority',
	  selectStatusAutoridadePublicaAtiva: '',
	  
	  selectStatusAdministradorPortugues: 'Administrador',
	  selectStatusAdministradorEnglish: 'Admin',
	  selectStatusAdministradorAtiva: '',
	  
	  selectStatusLiberadoPortugues: 'Liberado',
	  selectStatusLiberadoEnglish: 'Unlocked',
	  selectStatusLiberadoAtiva: '',
	  
	  selectStatusBloqueadoPortugues: 'Bloqueado',
	  selectStatusBloqueadoEnglish: 'Locked',
	  selectStatusBloqueadoAtiva: '',
  }
});

/*
  Controladores
*/
const vueAtivarControladorIdiomaPainelAlterarUsuario = () => {
  navLocalStorage = localStorage.getItem('language');
	
  // português - br
  if ((navLocalStorage == '1') 
		  || (typeof navLocalStorage !== 'undefined' && navLocalStorage !== null && navLocalStorage != '2')) {
	  
	  vuePainelAlterarUsuario.tituloAlterarUsuarioAtiva = vuePainelAlterarUsuario.tituloAlterarUsuarioPortugues;
	  
	  vuePainelAlterarUsuario.botaoVoltarAtiva = vuePainelAlterarUsuario.botaoVoltarPortugues;
	  vuePainelAlterarUsuario.botaoCancelarAtiva = vuePainelAlterarUsuario.botaoCancelarPortugues;
	  vuePainelAlterarUsuario.botaoSalvarAtiva = vuePainelAlterarUsuario.botaoSalvarPortugues;
	  
	  vuePainelAlterarUsuario.labelEmailAtiva = vuePainelAlterarUsuario.labelEmailPortugues;
	  vuePainelAlterarUsuario.labelNomeAtiva = vuePainelAlterarUsuario.labelNomePortugues;
	  vuePainelAlterarUsuario.labelDataCriacaoAtiva = vuePainelAlterarUsuario.labelDataCriacaoPortugues;
	  vuePainelAlterarUsuario.labelNivelAutorizacaoAtiva = vuePainelAlterarUsuario.labelNivelAutorizacaoPortugues;
	  vuePainelAlterarUsuario.labelStatusAtiva = vuePainelAlterarUsuario.labelStatusPortugues;
	  
	  vuePainelAlterarUsuario.selectStatusAutoridadePublicaAtiva = vuePainelAlterarUsuario.selectStatusAutoridadePublicaPortugues;
	  vuePainelAlterarUsuario.selectStatusAdministradorAtiva = vuePainelAlterarUsuario.selectStatusAdministradorPortugues;
	  vuePainelAlterarUsuario.selectStatusLiberadoAtiva = vuePainelAlterarUsuario.selectStatusLiberadoPortugues;
	  vuePainelAlterarUsuario.selectStatusBloqueadoAtiva = vuePainelAlterarUsuario.selectStatusBloqueadoPortugues;
  }

  // english - eua
  else {
	  vuePainelAlterarUsuario.tituloAlterarUsuarioAtiva = vuePainelAlterarUsuario.tituloAlterarUsuarioEnglish;
	  
	  vuePainelAlterarUsuario.botaoVoltarAtiva = vuePainelAlterarUsuario.botaoVoltarEnglish;
	  vuePainelAlterarUsuario.botaoCancelarAtiva = vuePainelAlterarUsuario.botaoCancelarEnglish;
	  vuePainelAlterarUsuario.botaoSalvarAtiva = vuePainelAlterarUsuario.botaoSalvarEnglish; 
	  
	  vuePainelAlterarUsuario.labelEmailAtiva = vuePainelAlterarUsuario.labelEmailEnglish;
	  vuePainelAlterarUsuario.labelNomeAtiva = vuePainelAlterarUsuario.labelNomeEnglish;
	  vuePainelAlterarUsuario.labelDataCriacaoAtiva = vuePainelAlterarUsuario.labelDataCriacaoEnglish;
	  vuePainelAlterarUsuario.labelNivelAutorizacaoAtiva = vuePainelAlterarUsuario.labelNivelAutorizacaoEnglish;
	  vuePainelAlterarUsuario.labelStatusAtiva = vuePainelAlterarUsuario.labelStatusEnglish;
	  
	  vuePainelAlterarUsuario.selectStatusAutoridadePublicaAtiva = vuePainelAlterarUsuario.selectStatusAutoridadePublicaEnglish;
	  vuePainelAlterarUsuario.selectStatusAdministradorAtiva = vuePainelAlterarUsuario.selectStatusAdministradorEnglish;
	  vuePainelAlterarUsuario.selectStatusLiberadoAtiva = vuePainelAlterarUsuario.selectStatusLiberadoEnglish;
	  vuePainelAlterarUsuario.selectStatusBloqueadoAtiva = vuePainelAlterarUsuario.selectStatusBloqueadoEnglish;
  }
};