/*
Find the Parity Outlier - 6kyu

Description:
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

Parameter: array of integers
Results: outlier integer from rest of array, even or odd
Examples: 
  [3, 5, 19, 22] => 22
  [46, -4, 344, 5, 22] => 5
Pseudocode:
  check the first two integers
    if both are even or odd, 
      traverse array searching for opposite
    if they are different, 
      look at third integer to determine which one should be returned

*/
function findOutlier(integers){
    const evenTest = (x) => Math.abs(x % 2)
    if(evenTest(integers[0]) === evenTest(integers[1])){
      for(let i = 2; i < integers.length; i++){
        if(evenTest(integers[0]) !== evenTest(integers[i])){
          return integers[i];
        }
      }
    }else{
      return evenTest(integers[0]) !== evenTest(integers[2]) ? integers[0] : integers[1];
    }
  }