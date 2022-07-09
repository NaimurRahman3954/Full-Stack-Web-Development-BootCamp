function brickCalculator(floor){
   var brick;

   // Gotta fix if-else

   // switch(floor){
   //    case (floor<=10):
   //       brick= floor*15*1000;
   //       break;
   //    case (floor > 10 && floor <=20):
   //       brick=  (floor-10)*12*1000+10*15*1000;
   //       break;
   //    case (floor>20):
   //       brick= (floor-20)*10*1000+10*15*1000+10*12*1000;
   //       break;
   // }

   if (floor<=10)
   brick=brick= floor*15*1000;      // upto 10 stories floor height is 15 feet
   else if (floor > 10 && floor <=20)
         brick=  (floor-10)*12*1000+10*15*1000; // from 11 to 20 stories floor height is 12 feet
   else
         brick= (floor-20)*10*1000+10*15*1000+10*12*1000; // from 21 stories onward floor height is 10 feet

   return brick;
}

var answer = brickCalculator(12);
console.log(answer);
