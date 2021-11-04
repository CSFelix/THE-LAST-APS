const botaoAtualizarTabelaListaUsuarios = document.getElementById("botaoAtualizarTabelaListaUsuarios");
const tabelaListaUsuarios = document.getElementById("tabelaListaUsuarios");

const toastMessageUsuarios = document.getElementById("toast");

var mensagemErro;
var req;

// clique no botão de busca de usuários
botaoAtualizarTabelaListaUsuarios.addEventListener("click", () => { BuscarDadosUsuariosSemFiltro(); });

//função para formatação de data / hora
//TO-DO: pegar como informação vem com o guilherme para eu depois montar a formatação
function FormatarDataHoraListaUsuarios(data_hora) {
	data_hora_transformada = data_hora;
	return data_hora_transformada;
}

// função para busca dos dados
function BuscarDadosUsuariosSemFiltro() {
	
	// AJAX
	req = new XMLHttpRequest();
	req.open("GET", "http://localhost:3000/autoridade/all", true);
	req.onreadystatechange = function() {
		
		//	Servidor Fora do Ar
		if (req.readyState != 4 || req.status != 200) {  }
			
			// Sucesso ou Falha na Busca por Posts
			else {
				
				// Falha Interna
				if (JSON.parse(this.responseText).status == 500) { ExibirToastMessage(3); }
				
				// Alteração Efetuada com sucesso
				else { 
					var dados = JSON.parse(this.responseText);
					
					// há posts cadastrados
					if (dados.lenght > 0) {
						for (i = 0; i < dados.length; i++) {
							
							tabelaListaUsuarios.innerHTML = "<tr id='tabelaHeader'>"
														   + "  <th>" + vuePainelListaUsuarios.trOpcoesAtiva + "</th>"
														   + "  <th>" + vuePainelListaUsuarios.trNomeAtiva + "</th>"
														   + "  <th>" + vuePainelListaUsuarios.trEmailAtiva + "</th>"
														   + "  <th>" + vuePainelListaUsuarios.trNivelAutorizacaoAtiva + "</th>"
														   + "  <th>" + vuePainelListaUsuarios.trDataCriacaoAtiva + "</th>"
														   + "  <th>" + vuePainelListaUsuarios.trStatusAtiva + "</th>"
														   + "</tr>"
														   + "<tr>"
														   + "	<td><button onclick='RedirecionarAlterarUsuario(this)' class='botao' data-id='" + dados[i].id + "' data-anijs='if: mouseover, do: rubberBand animated'>" + vuePainelListaUsuarios.trOpcaoAlterarAtiva +"</button></td>"
								   						   + "	<td>" + dados[i].nome + "</td>"
								   						   + "	<td>" + dados[i].login + "</td>"
								   						   + "	<td>" + dados[i].grauAutoridade + "</td>"
								   						   + "	<td>" + FormatarDataHoraListaUsuarios(dados[i].dataCriada) + "</td>"
								   						   + "	<td>" + dados[i].ativo + "</td>"
								   						   + "</tr>";
						}
					}
					
					// não há posts cadastrados
					else {
						tabelaListaUsuarios.innerHTML = "<tr id='tabelaHeader'>"
							   						  + "  <th>" + vuePainelListaUsuarios.trOpcoesAtiva + "</th>"
							   						  + "  <th>" + vuePainelListaUsuarios.trNomeAtiva + "</th>"
							   						  + "  <th>" + vuePainelListaUsuarios.trEmailAtiva + "</th>"
							   						  + "  <th>" + vuePainelListaUsuarios.trNivelAutorizacaoAtiva + "</th>"
							   						  + "  <th>" + vuePainelListaUsuarios.trDataCriacaoAtiva + "</th>"
							   						  + "  <th>" + vuePainelListaUsuarios.trStatusAtiva + "</th>"
							   						  + "</tr>";
					}
				}
			}
		};
		
	// Definição do header do método HTTP POST
	// e envio dos parãmetros
	req.setRequestHeader('Content-Type', 'application/json');
	req.send();
}
