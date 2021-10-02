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
			<jsp:include page="includes/menu-vertical-painel-post.html" />
			
			<!-- painel -->
			<jsp:include page="includes/sections/section-visualizar-post.jsp" />
		</section>
	</body>

	<!-- vue -->
	<jsp:include page="includes/vue-painel-post.html" />
	
	<!-- vue não padrão nas demais páginas -->
	<script type="text/javascript" src="assets/js/vue/languages/sections/section-visualizar-post.js"></script>
	
	<!-- scripts -->
	<jsp:include page="includes/script-painel-post.html" />
	
	<!-- scripts não padrões nas demais páginas -->
	
	<!-- ajax -->
	<script type="text/javascript" src="assets/js/ajax/ajax-visualizar-post.js"></script>
</html>