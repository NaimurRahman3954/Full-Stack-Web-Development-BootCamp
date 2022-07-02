var number1 = 25;
var number2 = "15.5";

// works on browser console NOT on VSCode.
number3 = prompt("Enter a number, Buddy!"); //takes input
number3 = parseFloat(number3); //converts string to float
//parseInt rounds off the number.
number2 = parseFloat(number2);
number2 = +number2; //alternate method
console.log(number1+number2+number3);