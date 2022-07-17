#include <stdio.h>
int main(void)
{
   float price, change;
   printf("Enter the product price in dollar\n");
   scanf("%f", &price);
   change = (5 - price) * 100;
   printf("You receive a change of %f cents", change);
}