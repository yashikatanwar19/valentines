
function moveRandom(eve){
    eve.style.position="absolute";
    eve.style.top= Math.floor(Math.random()*90 +5)+"%";
    eve.style.left= Math.floor(Math.random()*90 +5)+"%";
}

const move= document.querySelector("#move-random");
move.addEventListener("mouseover",function(e){
    moveRandom(e.target);
})
