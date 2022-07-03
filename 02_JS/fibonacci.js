function fibonacci(number){
   if(number == 0 || number == 1){
      return number;
   }
   else{
      return fibonacci(number-2) + fibonacci(number-1);
   }
}

let nthTerm = prompt();
for (let i=0; i<nthTerm; i++)
{
   console.log(fibonacci(i));
}



//copied from Programmiz

// program to display fibonacci sequence using recursion
function fibonacci(num) {
   if(num < 2) {
       return num;
   }
   else {
       return fibonacci(num-1) + fibonacci(num - 2);
   }
}

// take nth term input from the user
const nTerms = prompt('Enter the number of terms: ');

if(nTerms <=0) {
   console.log('Enter a positive integer.');
}
else {
   for(let i = 0; i < nTerms; i++) {
       console.log(fibonacci(i));
   }
}