/*
Summation - 8kyu

Description:
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

PARAMETERS:
  positive integer greater than 0
RESULTS:
  the sum of every integer between 1 and integer passed in as an argument
EXAMPLES:
  summation(3) => 6
  summation(10) => 55
PSEUDOCODE:
  declare sum result
  for loop from 1 to number
    add to sum
  return sum
*/

var summation = function (num) {
    let sum = 0;
    for(let i = 1; i <= num; i++){
      sum += i;
    }
    return sum
  }