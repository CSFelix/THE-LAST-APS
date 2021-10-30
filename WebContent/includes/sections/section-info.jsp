<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<div id="painelInfo" class="sectionPainel">

	<!-- título da página e botão do modal -->
	<div class="sectionPainelHeader">
		<h3>{{ tituloInfoAtiva }}
	</div>
	
	<br><br>
	
	<!-- botão de edição dos dados -->
	<button id="botaoEditar" class="botao" data-anijs="if: mouseover, do: rubberBand animated">{{ botaoEditarAtiva }}</button>
	
	<br>
	<br>
	
	<div class="sectionPainelContent">

		<!-- email -->
		<div class="campoDivForm flexCenter" data-anijs="if: load, on: window, do: swing animated">
			<label id="labelEmail" class="campoLabel labelAtiva">{{ labelEmailAtiva }}</label>
			<p>📧</p>&nbsp&nbsp<input type="email" name="email" id="inputEmail" class="campoInput campoDesativado" onkeyup="checkLabel('labelEmail', this)" onkeydown="checkLabel('labelEmail', this)" onkeypress="ApertarEnterFocus(event, inputNome)" autofocus readonly>
		</div>
		<br><br>

		<!-- nome -->
		<div class="campoDivForm flexCenter" data-anijs="if: load, on: window, do: swing animated">
			<label id="labelNome" class="campoLabel labelAtiva">{{ labelNomeAtiva }}</label>
			<p>📛</p>&nbsp&nbsp<input type="text" name="nome" id="inputNome" class="campoInput campoDesativado" onkeyup="checkLabel('labelNome', this)" onkeydown="checkLabel('labelNome', this)" onkeypress="ApertarEnterFocus(event, inputAutoridade)" autofocus readonly>
		</div>
		<br><br>
		
		<!-- nível autoridade -->
		<div class="campoDivForm flexCenter" data-anijs="if: load, on: window, do: swing animated">
			<label id="labelAutoridade" class="campoLabel labelAtiva">{{ labelAutoridadeAtiva }}</label>
			<p>🏷️</p>&nbsp&nbsp<input type="text" name="autoridade" id="inputAutoridade" class="campoInput campoDesativado" onkeyup="checkLabel('labelAutoridade', this)" onkeydown="checkLabel('labelAutoridade', this)" onkeypress="ApertarEnterCliqueBotao(event, botaoSalvar)" required>
		</div>
		<br><br>
	</div>
	
	<br>
	<hr class="horizontalLine">
	<br>
	
	<div class="sectionPainelContent flexSpace">
		<button id="botaoCancelar" class="botaoSecundario botaoDesativado" data-anijs="if: mouseover, do: rubberBand animated" disabled>{{ botaoCancelarAtiva }}</button>
		<button id="botaoSalvar" class="botao botaoDesativado" data-anijs="if: mouseover, do: rubberBand animated" disabled>{{ botaoSalvarAtiva }}</button>
	</div>
	<br>
	
	<div class="sectionPainelFooter flexSpace">
		<a href="alterar-senha.jsp"><p id="trocarSenha" class="esqueceuSenha" data-anijs="if: mouseover, do: swing animated">{{ alterarSenhaAtiva }}</p></a>
	</div>
	<br>
</div>