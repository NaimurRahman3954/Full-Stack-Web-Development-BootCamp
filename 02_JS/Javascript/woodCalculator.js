function woodCalculator(chair,table,bed){
   var wood;
   wood = chair+table*3+bed*5;   // chair takes 1cft wood, table takes 3 and bed takes 5.
   return wood;
}

var answer = woodCalculator(1,1,1);
console.log(answer);
