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
			
			<!--  toast messages -->
			<div id="toast" class="toastMessageErro"></div>
			
			<!-- formulário de cadastro -->
			<section class="formLogin neon">
				<div class="formLoginHeader"><h3>{{ tituloCadastroAtiva }}</h3></div>
				<br><br>
				
				<div class="formLoginContent">
				
					<!-- email -->
					<div class="campoDivForm flexCenter">
						<label id="labelEmail" class="campoLabel">{{ labelEmailAtiva }}</label>
						<p>📧</p>&nbsp&nbsp<input type="email" name="email" id="inputEmail" class="campoInput" onkeyup="checkLabel('labelEmail', this)" onkeydown="checkLabel('labelEmail', this)" onkeypress="ApertarEnterFocus(event, inputNome)" autofocus required>
					</div>
					<br><br>
				
					<!-- nome -->
					<div class="campoDivForm flexCenter">
						<label id="labelNome" class="campoLabel">{{ labelNomeAtiva }}</label>
						<p>👤</p>&nbsp&nbsp<input type="text" name="nome" id="inputNome" class="campoInput" onkeyup="checkLabel('labelNome', this)" onkeydown="checkLabel('labelNome', this)" onkeypress="ApertarEnterFocus(event, inputAutoridade)" required>
					</div>
					<br><br>
					
					<!-- nível autoridade -->
					<div class="campoDivForm flexCenter">
						<label id="labelAutoridade" class="campoLabel">{{ labelAutoridadeAtiva }}</label>
						<p>🏷️</p>&nbsp&nbsp<input type="text" name="autoridade" id="inputAutoridade" class="campoInput" onkeyup="checkLabel('labelAutoridade', this)" onkeydown="checkLabel('labelAutoridade', this)" onkeypress="ApertarEnterFocus(event, inputSenha)" required>
					</div>
					
					<br><br>
					<hr class="horizontalLine">
					<br><br>
				
					<!-- senha -->
					<div class="campoDivForm flexCenter">
						<label id="labelSenha" class="campoLabel">{{ labelSenhaAtiva }}</label>
						<p>🔒</p>&nbsp&nbsp<input type="password" name="senha" id="inputSenha" class="campoInput" onkeyup="checkLabel('labelSenha', this)" onkeydown="checkLabel('labelSenha', this)" onkeypress="ApertarEnterFocus(event, inputConfirmarSenha)"  required>

						<!-- 
							Visualizar senha em texto:
							<i class="fas fa-eye"></i> >> ativar visualização
							<i class="far fa-eye-slash"></i> >> desativar visualização
						-->
						&nbsp&nbsp<i class="fas fa-eye visualizarSenha"></i>
					</div>
					<br><br>
					
					<!-- confirmar senha -->
					<div class="campoDivForm flexCenter">
						<label id="labelConfirmarSenha" class="campoLabel">{{ labelConfirmarSenhaAtiva }}</label>
						<p>🔒</p>&nbsp&nbsp<input type="password" name="confirmarSenha" id="inputConfirmarSenha" class="campoInput" onkeyup="checkLabel('labelConfirmarSenha', this)" onkeydown="checkLabel('labelConfirmarSenha', this)" required>
					</div>
					<br><br>
				</div>
				
				<div class="formLoginFooter flexSpace">
					<a href="index.jsp"><button id="botaoVoltarLogin" class="botaoSecundario" data-anijs="if: mouseover, do: rubberBand animated">{{ botaoVoltarLoginAtiva }}</button></a>
					<button id="botaoCadastrar" class="botao" data-anijs="if: mouseover, do: rubberBand animated">{{ botaoCadastrarAtiva }}</button>
				</div>
				<br>
			</section>
		</section>
		
		<!-- footer -->
		<jsp:include page="includes/footer.html" />
	</body>
	
	<!-- vue -->
	<jsp:include page="includes/vue-login.html" />
	
	<!-- vue não padrão nas demais páginas -->
	<script type="text/javascript" src="assets/js/vue/languages/cadastro.js"></script>
	
	<!-- scripts -->
	<jsp:include page="includes/script-login.html" />
	
	<!-- scripts não padrões nas demais páginas -->
	<script type="text/javascript" src="assets/js/effects/visualizar-senha-cadastro.js"></script>
	<script type="text/javascript" src="assets/js/controllers/labels-inputs/label-ativa-cadastro.js"></script>
	
	<!-- ajax -->
	<script type="text/javascript" src="assets/js/ajax/ajax-cadastro-usuario.js"></script>
</html>