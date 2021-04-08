/*
Beginner Series #3 Sum of Numbers - 7kyu

Description:
Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
*/

function getSum(a,b)
{
   //if equal, return a
  if(a == b){
    return a;
  }
  //set sorted values and sum to 0
  let c, d, sum = 0;
  //if a is less than b, assign to c & d
  if(a < b){
    c = a;
    d = b;
  // if a is greater than b, sort into d & c
  }else if (a > b){
    c = b;
    d = a;
  }
  //loop through all integers between a and b (now c and d) and increment sum
  for(let i = c; i <= d; i++){
    sum += i
  }
  return sum;
}
