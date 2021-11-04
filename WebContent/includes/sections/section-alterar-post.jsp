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
				<option selected value="7a8e54ba-7cf0-40c1-99ed-dea1506f0db0">{{ selectStatusPendenteAtiva }}</option>
				<option value="9e22cfca-8f27-4c59-8956-ca31a87bc2e9">{{ selectStatusAvaliandoAtiva }}</option>
				<option value="1f2be79a-f0af-44a4-88df-2025db61fa05">{{ selectStatusFechadoAtiva }}</option>
				<option value="75459812-a809-4b99-ae09-8bf01dc01c4c">{{ selectStatusDescartadoAtiva }}</option>
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
