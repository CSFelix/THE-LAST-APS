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
			
			<!-- formulário de login -->
			<section class="formLogin neon">
				<div class="formLoginHeader"><h3>Login</h3></div>
				<br><br>
				
				<div class="formLoginContent">
					<!-- nome -->
					<div class="campoDivForm flexCenter">
						<label id="labelLogin" class="campoLabel">{{ labelLoginAtiva }}</label>
						<p>👤</p>&nbsp&nbsp<input type="text" name="nome" id="inputNome" class="campoInput" onkeyup="checkLabel('labelLogin', this)" onkeydown="checkLabel('labelLogin', this)" onkeypress="ApertarEnterFocus(event, inputSenha)" autofocus required>
					</div>
					<br><br>
				
					<!-- senha -->
					<div class="campoDivForm flexCenter">
						<label id="labelSenha" class="campoLabel">{{ labelSenhaAtiva }}</label>
						<p>🔒</p>&nbsp&nbsp<input type="password" name="senha" id="inputSenha" class="campoInput" onkeyup="checkLabel('labelSenha', this)" onkeydown="checkLabel('labelSenha', this)" onkeypress="ApertarEnterCliqueBotao(event, botaoLogin)"  required>

						<!-- 
							Visualizar senha em texto:
							<i class="fas fa-eye"></i> >> ativar visualização
							<i class="far fa-eye-slash"></i> >> desativar visualização
						-->
						&nbsp&nbsp<i class="fas fa-eye visualizarSenha"></i>
					</div>
					<br><br>
				</div>
				
				<div class="formLoginFooter flexSpace">
					<a href="cadastro.jsp"><button id="botaoCadastrar" class="botaoSecundario" data-anijs="if: mouseover, do: rubberBand animated">{{ botaoCadastrarAtiva }}</button></a>
					<button id="botaoLogin" class="botao" data-anijs="if: mouseover, do: rubberBand animated">{{ botaoLoginAtiva }}</button>
				</div>
				<br><br>

				<div class="formLoginFooter flexCenterColumn">
					<a href="alterar-senha.jsp" id="esqueceuSenha" class="esqueceuSenha" data-anijs="if: mouseover, do: swing animated">{{ esqueceuSenhaAtiva }}</a>
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
	<script type="text/javascript" src="assets/js/vue/languages/login.js"></script>
	
	<!-- scripts -->
	<jsp:include page="includes/script-login.html" />
	
	<!-- scripts não padrões nas demais páginas -->
	<!-- <script type="text/javascript" src="assets/js/ajax/ajax-login.js"></script>-->
	<script type="text/javascript" src="assets/js/effects/visualizar-senha-login.js"></script>
	<script type="text/javascript" src="assets/js/controllers/labels-inputs/label-ativa-login.js"></script>
</html>