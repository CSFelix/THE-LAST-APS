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
				<div class="formLoginHeader"><h3>{{ tituloAlterarSenhaAtiva }}</h3></div>
				<br><br>
				
				<div class="formLoginContent">
				
					<!-- email -->
					<div class="campoDivForm flexCenter">
						<label id="labelEmail" class="campoLabel">{{ labelEmailAtiva }}</label>
						<p>📧</p>&nbsp&nbsp<input type="email" name="email" id="inputEmail" class="campoInput" onkeyup="checkLabel('labelEmail', this)" onkeydown="checkLabel('labelEmail', this)" onkeypress="ApertarEnterFocus(event, inputSenha)" autofocus required>
					</div>
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
						<p>🔒</p>&nbsp&nbsp<input type="password" name="confirmarSenha" id="inputConfirmarSenha" class="campoInput" onkeyup="checkLabel('labelConfirmarSenha', this)" onkeydown="checkLabel('labelConfirmarSenha', this)" onkeypress="ApertarEnterCliqueBotao(event, botaoAlterarSenha)" required>
					</div>
					<br><br>					
				</div>
				
				<div class="formLoginFooter flexSpace">
					<a href="index.jsp"><button id="botaoVoltarLogin" class="botaoSecundario" data-anijs="if: mouseover, do: rubberBand animated">{{ botaoVoltarLoginAtiva }}</button></a>
					<button id="botaoAlterarSenha" class="botao" data-anijs="if: mouseover, do: rubberBand animated">{{ botaoAlterarSenhaAtiva }}</button>
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
	<script type="text/javascript" src="assets/js/vue/languages/alterar-senha.js"></script>
	
	<!-- scripts -->
	<jsp:include page="includes/script-login.html" />
	
	<!-- scripts não padrões nas demais páginas -->
	<!-- <script type="text/javascript" src="assets/js/ajax/ajax-login.js"></script>-->
	<script type="text/javascript" src="assets/js/effects/visualizar-senha-alteracao-senha.js"></script>
	<script type="text/javascript" src="assets/js/controllers/labels-inputs/label-ativa-alterar-senha.js"></script>
</html>