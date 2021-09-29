// botão trigger
const botaoEditar = document.getElementById("botaoEditar");

// labels inputs
const disablerLabelNome = document.getElementById("labelNome");

// inputs
const disablerInputNome = document.getElementById("inputNome");
const disablerInputEmail = document.getElementById("inputEmail");

// botões
const disablerBotaoCancelar = document.getElementById("botaoCancelar");
const disablerBotaoSalvar = document.getElementById("botaoSalvar");

// trigger para ativar edição dos dados
botaoEditar.addEventListener("click", () => {
	
	// processamento inputs
	disablerInputNome.classList.remove("campoDesativado");
	disablerInputEmail.classList.remove("campoDesativado");
	
	disablerInputNome.readOnly = false;
	disablerInputEmail.readOnly = false;
	
	// processamento botões
	disablerBotaoCancelar.classList.remove("botaoDesativado");
	disablerBotaoSalvar.classList.remove("botaoDesativado");
	
	disablerBotaoCancelar.disabled = false;
	disablerBotaoSalvar.disabled = false;
	
	// processamento editar
	botaoEditar.classList.add("botaoDesativado");
	botaoEditar.disabled = true;
});

// triger para cancelar edição dos dados
botaoCancelar.addEventListener("click", () => {
	
	// processamento labels inputs
	disablerLabelNome.classList.add("labelAtiva");
	
	// processamento inputs
	disablerInputNome.classList.add("campoDesativado");
	disablerInputEmail.classList.add("campoDesativado");
	
	disablerInputNome.readOnly = true;
	disablerInputEmail.readOnly = true;
	
	disablerInputNome.style.borderBottom = "4px solid var(--style-terciary-color)";
	disablerInputEmail.style.borderBottom = "4px solid var(--style-terciary-color)";
	
	// processamento botões
	disablerBotaoCancelar.classList.add("botaoDesativado");
	disablerBotaoSalvar.classList.add("botaoDesativado");
	
	disablerBotaoCancelar.disabled = true;
	disablerBotaoSalvar.disabled = true;
	
	// processamento editar
	botaoEditar.classList.remove("botaoDesativado");
	botaoEditar.disabled = false;
});