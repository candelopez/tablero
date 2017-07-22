
$(document).ready(function(){


$("#boton").click(function(){
	var lados=window.prompt("Numero de lados",20);
	var pixLados=500/lados;
	creaDivs(lados,pixLados);
	coloreaDivs();
	});
});

function creaDivs(lados,numLados){
	$("#tablero div").remove();

	$("#tablero").append("<div></div>")

	for (var j = 0; j < lados; j++) {
		for (var i = 0; i < lados; i++) {
			$("#tablero").append("<div></div>");
				}
		$("div:last-child").attr("style","clear: left");
	}

	$("#tablero div:last-child").remove();

	$('#tablero div').css('width', numLados+'px');
	$('#tablero div').css('height', numLados+'px');
}

function coloreaDivs(){
	$("#tablero div").hover(function(){
	$(this).css('background-color','red');
	});
}