function isPrime(number)
{
   for(let i=2; i<number; i++)
   {
      if (number % i == 0)
      {
         console.log("NOT a prime number");
      }
      else
      {
         console.log("Prime Number");
      }
   }
}
// number = prompt();
isPrime(5);