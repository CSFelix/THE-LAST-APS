// botões do menu
const listaPosts = document.getElementById("listaPosts"); // painel foco 1
const listaUsuarios = document.getElementById("listaUsuarios"); // painel foco 2
const configuracoes = document.getElementById("configuracoes"); // painel foco 3

// identificador de qual botão do menu está ativo
var opcaoAtiva;

// painéis
const painelListaPosts = document.getElementById("painelListaPosts");
const painelListaUsuarios = document.getElementById("painelListaUsuarios");
const painelInfo = document.getElementById("painelInfo");

// exibição do painel foco ao carregar/recarregar a página
if (sessionStorage.getItem("painel_foco") == "1") { 
	painelListaPosts.style.display = "block";
	ativarOpcaoMenu(listaPosts);
}

else if (sessionStorage.getItem("painel_foco") == "2") { 
	painelListaUsuarios.style.display = "block";
	ativarOpcaoMenu(listaUsuarios);
}

else if (sessionStorage.getItem("painel_foco") == "3") { 
	painelInfo.style.display = "block";
	ativarOpcaoMenu(configuracoes); 
}

// função de ativação da opção do menu
function ativarOpcaoMenu(opcaoClicada) {
	opcaoAtiva = document.querySelectorAll(".active");
	opcaoAtiva[0].classList.remove("active");
	opcaoClicada.classList.add("active");
}

// ativação painel lista postagens
listaPosts.addEventListener("click", () => { 
	
	// ocultar painel ativo
	painelListaUsuarios.style.display = "none";
	painelInfo.style.display = "none";
	
	// ativar painel e foco na opção do menu vertical
	painelListaPosts.style.display = "block";
	ativarOpcaoMenu(listaPosts); 
	
	// session
	sessionStorage.setItem("painel_foco", "1");
});

// ativação painel lista usuários
listaUsuarios.addEventListener("click", () => { 
	
	// ocultar painel ativo
	painelListaPosts.style.display = "none";
	painelInfo.style.display = "none";
	
	// ativar painel e foco na opção do menu vertical
	painelListaUsuarios.style.display = "block";
	ativarOpcaoMenu(listaUsuarios); 
	
	// session
	sessionStorage.setItem("painel_foco", "2");
});

// ativação painel configurações
configuracoes.addEventListener("click", () => { 
	
	// ocultar painel ativo
	painelListaUsuarios.style.display = "none";
	painelListaPosts.style.display = "none";
	
	// ativar painel e foco na opção do menu vertical
	painelInfo.style.display = "block";
	ativarOpcaoMenu(configuracoes); 
	
	// session
	sessionStorage.setItem("painel_foco", "3");
});