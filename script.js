var timer = 60
 var hit = " ";
var score = 0

  function newhit(){
      hit = Math.floor(Math.random()*10)
      document.querySelector("#hitval").textContent = hit 
  }
function makebubble(){ 
  var clutter =""
       
  for(i=1;i<=192;i++){
    var rn = Math.floor(Math.random()*10)
     clutter += `<div id="bubble">${rn}</div>`
  }
   document.querySelector("#pbtm").innerHTML = clutter
}

function runtimer(){
  var timeint = setInterval(function(){
        if(timer>0){
           timer-- ;
          document.querySelector("#timeval").textContent = timer
        } else{
          clearInterval(timeint);
          
          document.querySelector("#sound").innerHTML=`<audio src="sound/medieval-fanfare-6826.mp3" loop autoplay ></audio>`
           document.querySelector("#pbtm").innerHTML = `<h1>Game over <br> <strong>Congratulatation </strong> <br>your final score is<strong> ${score}</strong><h1>`


        }   
       },1000);
}
  function addscore(){
     score += 10
     document.querySelector("#scoreval").textContent = score
  }
     document.querySelector("#pbtm").addEventListener('click',function (dets) {
         var tap =  (Number(dets.target.textContent))
         if(tap===hit){
            document.querySelector("#sound").innerHTML=`<audio src="sound/shooting-sound-fx-159024.mp3" autoplay></audio>`
           makebubble()
           newhit()
           addscore()
         }
     })

     function mp3() {
     
     }
     document.querySelector(".btn").addEventListener("click",function(){
           document.querySelector("#sound").innerHTML=` <audio src="sound/mouse-click-153941.mp3" autoplay ></audio>`
     })
 

runtimer()
makebubble();
newhit()

