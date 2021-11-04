<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<section id="painelListaUsuarios" class="sectionPainel">
	
	<div class="sectionPainelHeader">
		<h3>{{ tituloListaUsuariosAtiva }}</h3>
	</div>
	
	<br><br>
	
	<!-- botões de adicionar e atualizar usuários-->
	<a href="cadastro.jsp" target="_blank"><button id="botaoAdicionarUsuario" class="botao" data-anijs="if: mouseover, do: rubberBand animated"><i class="fas fa-plus"></i></button></a>
	<button id="botaoAtualizarTabelaListaUsuarios" class="botao" data-anijs="if: mouseover, do: rubberBand animated"><i class="fas fa-sync-alt"></i></button>
	<br><br>
	
	<!-- nome -->
	<div class="campoDivForm flexCenter">
		<label id="labelNomePesquisa" class="campoLabel">{{ trNomeAtiva }}</label>
		<p>👤</p>&nbsp&nbsp<input type="text" name="nomePesquisa" id="inputNomePesquisa" class="campoInput" onkeyup="checkLabel('labelNomePesquisa', this)" onkeydown="checkLabel('labelNomePesquisa', this)" onkeypress="ApertarEnterCliqueBotao(event, botaoNomePesquisa)" autofocus required>
		<button id="botaoNomePesquisa" class="botao" data-anijs="if: mouseover, do: rubberBand animated"><i class="fas fa-search"></i></button>
	</div>
	<br><br>
	
	<!-- tabela dos produtos -->
	<table id="tabelaListaUsuarios" class="tabelaPrincipal" data-anijs="if: load, on: window, do: rubberBand animated">  
	  	
	  	<!--
	 	<tr id="tabelaHeader">
	 		<th>{{ trOpcoesAtiva }}</th>
	    	<th>{{ trNomeAtiva }}</th>
	   	 	<th>{{ trEmailAtiva }}</th>
	    	<th>{{ trNivelAutorizacaoAtiva }}</th>
	    	<th>{{ trDataCriacaoAtiva }}</th>
	    	<th>{{ trStatusAtiva }}</th>
		</tr>
		
		 
		<tr>
			<td>
				<button class="botao" data-anijs="if: mouseover, do: rubberBand animated">{{ trOpcaoAlterarAtiva }}</button>
			</td>
			<td>Goku</td>
			<td>goku@gokuzin.com</td>
			<td>2</td>
			<td>2021-09-28</td>
			<td>1</td>
		</tr>
		
		<tr>
			<td>
				<button class="botao" data-anijs="if: mouseover, do: rubberBand animated">{{ trOpcaoAlterarAtiva }}</button>
			</td>
			<td>Midorya</td>
			<td>midorya@izuku.com</td>
			<td>2</td>
			<td>2021-09-28</td>
			<td>0</td>
		</tr>
		
		<tr>
			<td>
				<button class="botao" data-anijs="if: mouseover, do: rubberBand animated">{{ trOpcaoAlterarAtiva }}</button>
			</td>
			<td>Natsu</td>
			<td>natsu@dragneel.com</td>
			<td>1</td>
			<td>2021-09-28</td>
			<td>1</td>
		</tr>
		-->
	</table>

	<br><br>
	
	<!-- paginação -->
	<div class="flexCenter">
		<button id="botaoPaginaAnterior" class="botao" data-anijs="if: mouseover, do: rubberBand animated"><i class="fas fa-chevron-left"></i></button>
		&nbsp&nbsp&nbsp
		<i id="identificadorPaginaProduto" class="botaoSecundario">1</i>
		&nbsp&nbsp&nbsp
		<button id="botaoPaginaPosterior" class="botao" data-anijs="if: mouseover, do: rubberBand animated"><i class="fas fa-chevron-right"></i></button>
	</div>
	<br>
	
	<!-- identificador das páginas -->
	<div class="flexCenter">
		<span class="tipSpan flexCenter">
			<p>{{ palavraPaginaAtiva }}</p>&nbsp
			<p id="textoPaginaAtual">1</p>&nbsp
			<p>{{ palavraDeAtiva }}</p>&nbsp
			<p id="textoPaginaFinal">1</p>
		</span>
	</div>
	<br><br>
</section>