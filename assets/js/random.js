// source: http://www.javascriptkit.com/script/cut1.shtml

var links = ["http://nouveauruig.sparrowinspace.com/gb/index.html", "http://nouveauruig.sparrowinspace.com/us/index.html", "http://nouveauruig.sparrowinspace.com/vn/index.html"];

$("#random").on("click", function(e){
	e.preventDefault();
	window.location = links[Math.floor(Math.random()*links.length)];
});