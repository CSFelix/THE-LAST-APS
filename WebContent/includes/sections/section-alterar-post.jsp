<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    
<section id="painelAlterarPost" class="sectionPainelBlock">
				
	<div class="sectionPainelHeader">
		<h3>{{ tituloAlterarPostAtiva }}</h3>
	</div>
				
	<br><br>
				
	<!-- botão para voltar à tabela de posts -->
	<a href="painel.jsp"><button id="botaoAlterarPostVoltar" class="botao" data-anijs="if: mouseover, do: rubberBand animated">{{ botaoVoltarAtiva }}</button></a>
	
	<br><br>
	
	<div id="formCadastroPost" class="sectionPainelContent">
	
		<!-- título -->
		<div class="campoDivForm flexCenter">
			<label id="labelTitulo" class="campoLabel labelAtiva">{{ labelTituloAtiva }}</label>
			<p>🔖</p>&nbsp&nbsp<input type="text" name="titulo" id="inputTitulo" class="campoInput" onkeyup="checkLabel('labelTitulo', this)" onkeydown="checkLabel('labelTitulo', this)" onkeypress="ApertarEnterFocus(event, inputMensagem)" autofocus required>
		</div>
		<br><br>
		
		<!-- mensagem -->
		<div class="campoDivForm flexCenter">
			<label id="labelMensagem" class="campoLabel labelAtiva">{{ labelMensagemAtiva }}</label>
			<p>📝</p>&nbsp&nbsp
			<textarea name="mensagem" id="inputMensagem" class="campoInput" rows="10" style="resize: none;"
			onkeyup="checkLabel('labelMensagem', this)" onkeydown="checkLabel('labelMensagem', this)"></textarea>
		</div>
		<br><br>
		
		<!-- endereço -->
		<div class="campoDivForm flexCenter">
			<label id="labelEndereco" class="campoLabel labelAtiva">{{ labelEnderecoAtiva }}</label>
			<p>🅱️</p>&nbsp&nbsp<input type="text" name="nome" id="inputEndereco" class="campoInput" onkeyup="checkLabel('labelEndereco', this)" onkeydown="checkLabel('labelEndereco', this)" onkeypress="ApertarEnterFocus(event, inputDataCriacao)" autofocus required>
		</div>
		<br><br>
		
		<!-- data de criação -->
		<div class="campoDivForm flexCenter">
			<p>📅 {{ labelDataCriacaoAtiva }}</p>&nbsp&nbsp<input type="datetime-local" name="dataCriacao" id="inputDataCriacao" class="campoInput" onkeypress="ApertarEnterFocus(event, statusSelecionado)" required>
		</div>
		<br><br>
		
		<br><br>
		<hr class="horizontalLine">
		<br><br>
		
		<!-- status -->
		<div class="campoDivForm flexCenter">
			<p>⭐ {{ labelStatusAtiva }}</p>&nbsp&nbsp
			
			<select id="statusSelecionado" name="statusPost" class="campoInput">
				<option selected value="Pendente">{{ selectStatusPendenteAtiva }}</option>
				<option value="Em avaliação">{{ selectStatusAvaliandoAtiva }}</option>
				<option value="Concluido">{{ selectStatusFechadoAtiva }}</option>
				<option value="Descartado">{{ selectStatusDescartadoAtiva }}</option>
			</select>
		</div>
		<br><br>
		
		<!-- comentário -->
		<div class="campoDivForm flexCenter">
			<label id="labelComentario" class="campoLabel labelAtiva">{{ labelComentarioAtiva }}</label>
			<p>📝</p>&nbsp&nbsp
			<textarea name="comentario" id="inputComentario" class="campoInput" rows="10" style="resize: none;"
			onkeyup="checkLabel('labelMensagem', this)" onkeydown="checkLabel('labelMensagem', this)"></textarea>
		</div>
		<br><br>
	</div>
	
	<br>
	<hr class="horizontalLine">
	<br>
	
	<div class="sectionPainelContent flexSpace">
		<a href="painel.jsp"><button class="botaoSecundario" data-anijs="if: mouseover, do: rubberBand animated">{{ botaoCancelarAtiva }}</button></a>
		<button id="botaoAlterarPost" class="botao" data-anijs="if: mouseover, do: rubberBand animated">{{ botaoSalvarAtiva }}</button>
	</div>
	<br>
	
</section>
