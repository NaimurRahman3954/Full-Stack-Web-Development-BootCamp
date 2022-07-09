function feetToMile(feet){
   var mile;
   mile= feet/5280; // 5280 feet = 1 mile 
   return mile;
}

var answer = feetToMile(40);
console.log(answer);
