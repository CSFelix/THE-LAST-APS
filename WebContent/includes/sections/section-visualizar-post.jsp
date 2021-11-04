<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    
<section id="painelVisualizarPost" class="sectionPainelBlock">
				
	<div class="sectionPainelHeader">
		<h3>{{ tituloVisualizarPostAtiva }}</h3>
	</div>
				
	<br><br>
				
	<!-- botão para voltar à tabela de posts -->
	<a href="painel.jsp"><button id="botaoVisualizarPostVoltar" class="botao" data-anijs="if: mouseover, do: rubberBand animated">{{ botaoVoltarAtiva }}</button></a>
	
	<br><br>
	
	<div id="formCadastroPost" class="sectionPainelContent">
		
		<!-- título -->
		<div class="campoDivForm flexCenter">
			<label id="labelTitulo" class="campoLabel labelAtiva">{{ labelTituloAtiva }}</label>
			<p>🔖</p>&nbsp&nbsp<input type="text" name="titulo" id="inputTitulo" class="campoInput" readonly>
		</div>
		<br><br>
		
		<!-- mensagem -->
		<div class="campoDivForm flexCenter">
			<label id="labelMensagem" class="campoLabel labelAtiva">{{ labelMensagemAtiva }}</label>
			<p>📝</p>&nbsp&nbsp
			<textarea name="mensagem" id="inputMensagem" class="campoInput" rows="10" style="resize: none;" readonly></textarea>
		</div>
		<br><br>
		
		<!-- endereço -->
		<div class="campoDivForm flexCenter">
			<label id="labelEndereco" class="campoLabel labelAtiva">{{ labelEnderecoAtiva }}</label>
			<p>🅱️</p>&nbsp&nbsp<input type="text" name="nome" id="inputEndereco" class="campoInput" readonly>
		</div>
		<br><br>
		
		<!-- data de criação -->
		<div class="campoDivForm flexCenter">
			<p>📅 {{ labelDataCriacaoAtiva }}</p>&nbsp&nbsp<input type="datetime-local" name="dataCriacao" id="inputDataCriacao" class="campoInput" readonly>
		</div>
		<br><br>
		
		<br><br>
		<hr class="horizontalLine">
		<br><br>
		
		<!-- status -->
		<div class="campoDivForm flexCenter">
			<p>⭐ {{ labelStatusAtiva }}</p>&nbsp&nbsp
			
			<!-- tipo de status:
				
				- selectStatusPendenteAtiva
				- selectStatusAvaliandoAtiva
				- selectStatusFechadoAtiva
				- selectStatusDescartadoAtiva
			 -->
			<p id="statusSelecionado" class="campoInput">{{ selectStatusPendenteAtiva }}</p>
		</div>
		<br><br>
		
		<!-- comentário -->
		<div class="campoDivForm flexCenter">
			<label id="labelComentario" class="campoLabel labelAtiva">{{ labelComentarioAtiva }}</label>
			<p>📝</p>&nbsp&nbsp
			<textarea name="comentario" id="inputComentario" class="campoInput" rows="10" style="resize: none;" readonly></textarea>
		</div>
		<br><br>
	</div>
	
	<br><br>
	
</section>
