window.onload=function(){
    

  var val = document.getElementById('btn');
  var  i = 10;
  var setid;

  function time(){
    if(i!=0){
      i--;
      val.value="同意("+i+"s)";
    }
    else{
      val.value="同意";
      val.disabled=false;
      val.onclick = function(){
        alert("就知道你会同意的！");
      }
      clearInterval(setid);
    }
  }
  setid=setInterval(function(){time()},1000);

};

