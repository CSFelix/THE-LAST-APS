<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    
<!DOCTYPE html>

<html lang="pt-br, en">

	<jsp:include page="includes/head-login.html" />
	
	<body>
	
		<!-- menu principal -->
		<jsp:include page="includes/nav.html" />
		
		<section id="mainContent">
			
			<!-- blobs -->
			<div id="left-bottom-corner" class="blob"></div>
			<div id="right-top-corner" class="blob"></div>
			
			<!-- formulário de login -->
			<section class="formLogin neon">
				<div class="formLoginHeader"><h3>{{ tituloOperacaoAtiva }}</h3></div>
				<br><br>
				
				<div class="formLoginContent flexCenterColumn">
					<img class="imagemSucesso" src="assets/imagens/sucesso.svg">
					<br>
					<p class="mensagem">{{ mensagemOperacaoAtiva }}</p>
					<br><br>
				</div>
				
				<div class="formLoginFooter flexSpace">
					<a href="index.jsp"><button class="botaoSecundario" data-anijs="if: mouseover, do: rubberBand animated">{{ botaoVoltarLoginAtiva }}</button></a>
				</div>
				<br><br>
			</section>
		</section>
		
		<!-- footer -->
		<jsp:include page="includes/footer.html" />
	</body>
	
	<!-- vue -->
	<jsp:include page="includes/vue-login.html" />
	
	<!-- vue não padrão nas demais páginas -->
	<script type="text/javascript" src="assets/js/vue/languages/operacao-realizada.js"></script>
	
	<!-- scripts -->
	<jsp:include page="includes/script-login.html" />
	
	<!-- scripts não padrões nas demais páginas -->
</html>