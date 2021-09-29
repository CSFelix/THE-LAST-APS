/* 
	Variáveis
*/

var vueMenuVertical = new Vue({
  el: '#verticalMenu',
  data: {
	  
	  opcaoListaPostsPortugues: 'Postagens',
	  opcaoListaPostsEnglish: 'Posts',
	  opcaoListaPostsAtiva: '',
	  
	  opcaoListaUsuariosPortugues: 'Usuários',
	  opcaoListaUsuariosEnglish: 'Users',
	  opcaoListaUsuariosAtiva: '',
	  
	  opcaoConfiguracoesPortugues: 'Info',
	  opcaoConfiguracoesEnglish: 'Info',
	  opcaoConfiguracoesAtiva: '',
	  
	  opcaoSairPortugues: 'Sair',
	  opcaoSairEnglish: 'Log Out',
	  opcaoSairAtiva: '',
  }
});

/*
	Controladores
*/
const vueAtivarControladorMenuVertical = () => {

	loginLocalStorage = localStorage.getItem('language');
	
	// português - br
	if ((loginLocalStorage == '1') 
			|| (typeof loginLocalStorage !== 'undefined' && loginLocalStorage !== null && loginLocalStorage != '2')) {
		
		vueMenuVertical.opcaoListaPostsAtiva = vueMenuVertical.opcaoListaPostsPortugues;
		vueMenuVertical.opcaoListaUsuariosAtiva = vueMenuVertical.opcaoListaUsuariosPortugues;
		vueMenuVertical.opcaoConfiguracoesAtiva = vueMenuVertical.opcaoConfiguracoesPortugues;
		vueMenuVertical.opcaoSairAtiva = vueMenuVertical.opcaoSairPortugues;
	}

	// english - eua
	else {
		vueMenuVertical.opcaoListaPostsAtiva = vueMenuVertical.opcaoListaPostsEnglish;
		vueMenuVertical.opcaoListaUsuariosAtiva = vueMenuVertical.opcaoListaUsuariosEnglish;
		vueMenuVertical.opcaoConfiguracoesAtiva = vueMenuVertical.opcaoConfiguracoesEnglish;
		vueMenuVertical.opcaoSairAtiva = vueMenuVertical.opcaoSairEnglish;
	}
};