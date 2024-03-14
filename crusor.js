var main = document.querySelector("body")
var csr = document.querySelector("#csr")
main.addEventListener("mousemove",function(dets){
      
    csr.style.left = dets.x + "px"
    csr.style.top = dets.y + "px"

})