var num=2;
var movers=3;

var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
var width = window.innerWidth;
var height = window.innerHeight;
var w = window.innerWidth;
var h = window.innerHeight;
var pixelateOn = false;
var rbvj;


Maptastic(canvas);

function resize() {
	width = w = window.innerWidth,
	height = h = window.innerHeight,
	canvas.width = cover.width = width;
	canvas.height = cover.height = height;
	$('#cover').html('');
	$(canvas).html('');
	scanLinesOn = false;
	gui = null;
}

window.addEventListener('resize', resize, false);

function resetEverything(){
	resize();
	strobeOn = false;
	scanLinesOn = false;
	vignetteOn = true;
	window.cancelAnimationFrame(animate);
	animate = null;
}


