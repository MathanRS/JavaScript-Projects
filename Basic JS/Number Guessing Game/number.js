const answer =Math.floor(Math.random()*10 + 1);
let guess =0 ;
document.getElementById("st").onclick =funtion()
{
   guess =document.getElementById("guess").value
   guess +=1;

   if(guess==answer){
   alert (`${answer} is the #.It took you ${guess} guess.`);
}
  else if(answer > guess){
   alert("Too small") ;
}
else {
   alert ("Too Large");
}

  }
