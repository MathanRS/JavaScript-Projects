let temp=32;
temp =toCelsius(temp);
console.log(temp);

temp =toFahrenheit(temp);
console.log(temp);


document.getElementById("sb").onclick =function(){
   let temp ;

   if(document.getElementById("cbutton").checked){
      temp = document.getElementById("input").value ;
      temp =Number(temp);
      temp = toCelsius(temp);
      document.getElementById("result").innerHTML= temp + "°"; 
   }
   else if(document.getElementById("fbutton").checked){
      temp = document.getElementById("input").value ;
      temp =Number(temp);
      temp = toFahrenheit(temp);
      document.getElementById("result").innerHTML= temp +`° F` ; 
   }
   else{
      document.getElementById("result").innerHTML = `Enter appropriate value` ;
   }



}
function toCelsius(temp){
 return (temp-32)*(5/9);
}
function toFahrenheit(temp){
   return (temp * (9/5)) + 32 ;
}