var width = document.getElementById("rect-width");
var height = document.getElementById("rect-height");
var btn = document.getElementById('calc');
var peri = document.getElementById("rect-perimeter");
var area = document.getElementById("rect-area");

function c(){
	peri.value = width.value*2 + height.value*2;
	area.value = width.value * height.value;
}