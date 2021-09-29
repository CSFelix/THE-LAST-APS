/*
 * - Primeira Função: focus em campo ao apertar 'enter' no input
 * - Segunda Função: clique em botão ao apertar 'enter' no input
 * */

function ApertarEnterFocus(event, inputFocus) { if (event.which === 13) { inputFocus.focus(); } }
function ApertarEnterCliqueBotao(event, botao) { if (event.which === 13) { botao.click(); } }

//onkeypress="ApertarEnterFocus(event, inputSenha)"