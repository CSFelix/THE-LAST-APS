<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    
<section id="painelCadastroPost" class="sectionPainelBlock">
				
	<div class="sectionPainelHeader">
		<h3>{{ tituloCadastroPostAtiva }}</h3>
	</div>
				
	<br><br>
				
	<!-- botão para voltar à tabela de posts -->
	<a href="painel.jsp"><button id="botaoCadastroPostVoltar" class="botao" data-anijs="if: mouseover, do: rubberBand animated">{{ botaoVoltarAtiva }}</button></a>
	
	<br><br>
	
	<div id="formCadastroPost" class="sectionPainelContent">
		
		<!-- título -->
		<div class="campoDivForm flexCenter">
			<label id="labelTitulo" class="campoLabel">{{ labelTituloAtiva }}</label>
			<p>🔖</p>&nbsp&nbsp<input type="text" name="titulo" id="inputTitulo" class="campoInput" onkeyup="checkLabel('labelTitulo', this)" onkeydown="checkLabel('labelTitulo', this)" onkeypress="ApertarEnterFocus(event, inputMensagem)" autofocus required>
		</div>
		<br><br>
		
		<!-- mensagem -->
		<div class="campoDivForm flexCenter">
			<label id="labelMensagem" class="campoLabel">{{ labelMensagemAtiva }}</label>
			<p>📝</p>&nbsp&nbsp
			<textarea name="mensagem" id="inputMensagem" class="campoInput" rows="10" style="resize: none;"
			onkeyup="checkLabel('labelMensagem', this)" onkeydown="checkLabel('labelMensagem', this)"></textarea>
		</div>
		<br><br>
		
		<!-- endereço -->
		<div class="campoDivForm flexCenter">
			<label id="labelEndereco" class="campoLabel">{{ labelEnderecoAtiva }}</label>
			<p>🅱️</p>&nbsp&nbsp<input type="text" name="nome" id="inputEndereco" class="campoInput" onkeyup="checkLabel('labelEndereco', this)" onkeydown="checkLabel('labelEndereco', this)" onkeypress="ApertarEnterCliqueBotao(event, botaoSalvarPost)" autofocus required>
		</div>
		<br><br>
	</div>
	
	<br>
	<hr class="horizontalLine">
	<br>
	
	<div class="sectionPainelContent flexSpace">
		<a href="painel.jsp"><button class="botaoSecundario" data-anijs="if: mouseover, do: rubberBand animated">{{ botaoCancelarAtiva }}</button></a>
		<button id="botaoSalvarPost" class="botao" data-anijs="if: mouseover, do: rubberBand animated">{{ botaoSalvarAtiva }}</button>
	</div>
	<br>
	
</section>