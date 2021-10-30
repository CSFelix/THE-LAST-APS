<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    
<section id="painelAlterarUsuario" class="sectionPainelBlock">
				
	<div class="sectionPainelHeader">
		<h3>{{ tituloAlterarUsuarioAtiva }}</h3>
	</div>
				
	<br><br>
				
	<!-- botão para voltar à tabela de posts -->
	<a href="painel.jsp"><button id="botaoAlterarUsuarioVoltar" class="botao" data-anijs="if: mouseover, do: rubberBand animated">{{ botaoVoltarAtiva }}</button></a>
	
	<br><br>
	
	<div id="formCadastroPost" class="sectionPainelContent">
	
		<!-- email -->
		<div class="campoDivForm flexCenter">
			<label id="labelEmail" class="campoLabel labelAtiva">{{ labelEmailAtiva }}</label>
			<p>📧</p>&nbsp&nbsp<input type="email" name="email" id="inputEmail" class="campoInput" readonly>
		</div>
		<br><br>
				
		<!-- nome -->
		<div class="campoDivForm flexCenter">
			<label id="labelNome" class="campoLabel labelAtiva">{{ labelNomeAtiva }}</label>
			<p>👤</p>&nbsp&nbsp<input type="text" name="nome" id="inputNome" class="campoInput" readonly>
		</div>
		<br><br>
		
		<!-- nível autoridade -->
		<div class="campoDivForm flexCenter">
			<label id="labelAutoridade" class="campoLabel labelAtiva">{{ labelAutoridadeAtiva }}</label>
			<p>🏷️</p>&nbsp&nbsp<input type="text" name="autoridade" id="inputAutoridade" class="campoInput" readonly>
		</div>
		<br><br>
		
		<!-- data de criação -->
		<div class="campoDivForm flexCenter">
			<p>📅 {{ labelDataCriacaoAtiva }}</p>&nbsp&nbsp<input type="datetime-local" name="dataCriacao" id="inputDataCriacao" class="campoInput" readonly>
		</div>
		
		<br><br>
		<hr class="horizontalLine">
		<br><br>
		
		<!-- status -->
		<div class="campoDivForm flexCenter">
			<p>🔐 {{ labelStatusAtiva }}</p>&nbsp&nbsp
						
			<select id="statusSelecionado" name="statusUsuario" class="campoInput">
				<option value="1">{{ selectStatusLiberadoAtiva }}</option>
				<option value="2">{{ selectStatusBloqueadoAtiva }}</option>
			</select>
		</div>
		<br><br>
		
	</div>
	
	<br>
	<hr class="horizontalLine">
	<br>
	
	<div class="sectionPainelContent flexSpace">
		<a href="painel.jsp"><button class="botaoSecundario" data-anijs="if: mouseover, do: rubberBand animated">{{ botaoCancelarAtiva }}</button></a>
		<button id="botaoSalvarUsuario" class="botao" data-anijs="if: mouseover, do: rubberBand animated">{{ botaoSalvarAtiva }}</button>
	</div>
	<br>
	
</section>