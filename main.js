

$(document).ready(function(){
	for (var j = 0; j < 5; j++) {
		for (var i = 0; i < 5; i++) {
			$("body").append("<div></div>");
		}
	$("div:last-child").attr("style","clear: left");
}
});