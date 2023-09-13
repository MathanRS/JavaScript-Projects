let x;
let y;
let z;

document.getElementById("roll").onclick =function(){
   x = Math.ceil(Math.random()*6);
   y = Math.ceil(Math.random()*6);
   z = Math.ceil(Math.random()*6);

   document.getElementById("x").innerHTML =x;
   document.getElementById("y").innerHTML =y;
   document.getElementById("z").innerHTML =z;
} 
