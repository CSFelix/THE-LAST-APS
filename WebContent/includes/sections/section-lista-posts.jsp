<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<section id="painelListaPosts" class="sectionPainel">
	
	<div class="sectionPainelHeader">
		<h3>{{ tituloListaPostsAtiva }}</h3>
	</div>
	
	<br><br>
	
	<!-- botões de adicionar e atualizar postagens -->
	<a href="cadastro-post.jsp"><button id="botaoAdicionarPostagem" class="botao" data-anijs="if: mouseover, do: rubberBand animated"><i class="fas fa-plus"></i></button></a>
	<button id="botaoAtualizarTabelaListaPostagens" class="botao" data-anijs="if: mouseover, do: rubberBand animated"><i class="fas fa-sync-alt"></i></button>
	<br><br>
	
	<!-- título -->
	<div class="campoDivForm flexCenter">
		<label id="labelTituloPesquisa" class="campoLabel">{{ trTituloAtiva }}</label>
		<p>🔖</p>&nbsp&nbsp<input type="text" name="tituloPesquisa" id="inputTituloPesquisa" class="campoInput" onkeyup="checkLabel('labelTituloPesquisa', this)" onkeydown="checkLabel('labelTituloPesquisa', this)" onkeypress="ApertarEnterCliqueBotao(event, botaoTituloPesquisa)" autofocus required>
		<button id="botaoTituloPesquisa" class="botao" data-anijs="if: mouseover, do: rubberBand animated"><i class="fas fa-search"></i></button>
	</div>
	<br><br>
	
	<!-- tabela das postagens -->
	<table id="tabelaListaPostagens" class="tabelaPrincipal" data-anijs="if: load, on: window, do: rubberBand animated">
	  	
	  	<!-- 
	 	<tr id="tabelaHeader">
	 		<th>{{ trOpcoesAtiva }}</th>
	    	<th>{{ trTituloAtiva }}</th>
	   	 	<th>{{ trCriacaoAtiva }}</th>
	    	<th>{{ trStatusAtiva }}</th>
		</tr>
		
		
		<tr>
			<td>
				<button class="botao" data-anijs="if: mouseover, do: rubberBand animated">{{ trOpcaoAvaliarAtiva }}</button>
				&nbsp&nbsp&nbsp
				<button class="botao" data-anijs="if: mouseover, do: rubberBand animated">{{ trOpcaoVisualizarAtiva }}</button>
			</td>
			<td>Esferas do Dragão Desaparecidas</td>
			<td>2021-09-28</td>
			<td>{{ trStatusPendenteAtiva }}</td>
		</tr>
		
		<tr>
			<td>
				<button class="botao" data-anijs="if: mouseover, do: rubberBand animated">{{ trOpcaoAlterarAtiva }}</button>
				&nbsp&nbsp&nbsp
				<button class="botao" data-anijs="if: mouseover, do: rubberBand animated">{{ trOpcaoAvaliarAtiva }}</button>
				&nbsp&nbsp&nbsp
				<button class="botao" data-anijs="if: mouseover, do: rubberBand animated">{{ trOpcaoVisualizarAtiva }}</button>
			</td>
			<td>Tomura Shigaraki volta a Aterrorizar Hosu</td>
			<td>2021-09-28</td>
			<td>{{ trStatusAvaliandoAtiva }}</td>
		</tr>
		
		<tr>
			<td>
				<button class="botao" data-anijs="if: mouseover, do: rubberBand animated">{{ trOpcaoAlterarAtiva }}</button>
				&nbsp&nbsp&nbsp
				<button class="botao" data-anijs="if: mouseover, do: rubberBand animated">{{ trOpcaoAvaliarAtiva }}</button>
				&nbsp&nbsp&nbsp
				<button class="botao" data-anijs="if: mouseover, do: rubberBand animated">{{ trOpcaoVisualizarAtiva }}</button>
			</td>
			<td>Zeref ded volta à vida?!</td>
			<td>2021-09-28</td>
			<td>{{ trStatusFechadoAtiva }}</td>
		</tr>
		
		<tr>
			<td>
				<button class="botao" data-anijs="if: mouseover, do: rubberBand animated">{{ trOpcaoAlterarAtiva }}</button>
				&nbsp&nbsp&nbsp
				<button class="botao" data-anijs="if: mouseover, do: rubberBand animated">{{ trOpcaoAvaliarAtiva }}</button>
				&nbsp&nbsp&nbsp
				<button class="botao" data-anijs="if: mouseover, do: rubberBand animated">{{ trOpcaoVisualizarAtiva }}</button>
			</td>
			<td>Kuririn morreu de novo...</td>
			<td>2021-09-08</td>
			<td>{{ trStatusDescartadoAtiva }}</td>
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