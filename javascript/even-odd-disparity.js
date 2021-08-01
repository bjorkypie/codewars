/*
Even Odd Disparity - 7kyu

Description:
Given an array, return the difference between the count of even numbers and the count of odd numbers. 0 will be considered an even number.

parameters: 
  array of numbers and lowercase letters (which should be ignored)
results:
  difference between number of even and odd numbers
examples:
  [4, 6, 5, 10, 17, 'e', 'l', 'w', 19] => 0
  [5, 6, 7, 't'] => 1
pseudocode:
  reduce method callback, initialize at 0:
    if current element is a number:
      check if even or odd and add 1 or subtract 1 respectively
   return absolute value of reducer
*/

function solve(a){
    return Math.abs(a.reduce((acc, c) =>{
      if(!isNaN(c)){
        acc += c % 2 === 0 ? 1 : -1
      }
    }), 0)
    
  };