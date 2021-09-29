<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<!DOCTYPE html>
	
<html lang="pt-br, en">
	<!-- recuperação das informações na session -->
	<script>
		sessionStorage.setItem("usuario_nome", "<%=(String) session.getAttribute("usuario_nome") %>");
		sessionStorage.setItem("usuario_nascimento", "<%=(String) session.getAttribute("usuario_nascimento") %>");
		sessionStorage.setItem("usuario_uuid", "<%=(String) session.getAttribute("usuario_uuid")%>");
	</script>
	
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
			<jsp:include page="includes/menu-vertical.html" />
			
			<!-- painéis -->
			<jsp:include page="includes/sections/section-info.jsp" />
			<jsp:include page="includes/sections/section-lista-posts.jsp" />
			<jsp:include page="includes/sections/section-lista-usuarios.jsp" />
		</section>
	</body>

	<!-- vue -->
	<jsp:include page="includes/vue-painel.html" />
	
	<!-- vue não padrão nas demais páginas -->
	
	
	<!-- scripts -->
	<jsp:include page="includes/script-painel.html" />
	
	<!-- scripts não padrões nas demais páginas -->
</html>