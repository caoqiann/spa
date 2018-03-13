var pw=document.getElementById('pw');
var kk=document.getElementById('kk');

kk.onmouseover=function(){
	pw.type='text';
}
kk.onmouseleave=function(){
	pw.type='password';
}