function isPrime(number)
{
   for(let i=2; i<number; i++)
   {
      if (number % i == 0)
      {
         return "NOT a prime number";
      }
   }
   return "Prime Number";
}
// number = prompt();
isPrime(109);