<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<!DOCTYPE html>
	
<html lang="pt-br, en">
	
	<!-- head -->
	<jsp:include page="includes/head-painel.html" />

	<body>
	
		<!-- menu principal -->
		<jsp:include page="includes/nav.html" />

		<section id="mainContent">
		
			<!-- blobs -->
			<div id="left-top-corner" class="blob"></div>
			<div id="right-bottom-corner" class="blob"></div>
			
			<!--  toast messages -->
			<div id="toast" class="toastMessageErro"></div>
			
			<!-- menu veritcal -->
			<jsp:include page="includes/menu-vertical-painel-usuario.html" />
			
			<!-- painel -->
			<jsp:include page="includes/sections/section-alterar-usuario.jsp" />
		</section>
	</body>

	<!-- vue -->
	<jsp:include page="includes/vue-painel-usuario.html" />
	
	<!-- vue não padrão nas demais páginas -->
	
	<!-- scripts -->
	<jsp:include page="includes/script-painel-usuario.html" />
	
	<!-- scripts não padrões nas demais páginas -->
	
	<!-- ajax -->
	<script type="text/javascript" src="assets/js/ajax/ajax-status-usuario.js"></script>
</html>