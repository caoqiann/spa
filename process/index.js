var pg=document.getElementById('pg');
var start=document.getElementById('start');
var pause=document.getElementById('pause');
var reset=document.getElementById('reset');
var time;
start.onclick=function(){
	clearInterval(time);
	time = setInterval(function(){
		if(pg.value != 100){
			pg.value ++;
		}
	},100);
}

pause.onclick=function(){
	clearInterval(time);
}

reset.onclick=function(){
	pg.value=0;
}
