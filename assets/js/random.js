$(document).ready(function(){
	var links = ["../../../gb/index.html", "../../../us/index.html", "../../../vn/index.html"];

	$("#random").on("click", function(e){
		e.preventDefault();
		window.location = links[Math.floor(Math.random()*links.length)];
	});
});