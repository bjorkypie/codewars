/*
Ones and Zeros 7kyu
Description:
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
*/

const binaryArrayToNumber = arr => {
  //set initial value
  let num = 0
  //set binary digit multiplier 2 to power counter, given length of array
  let biP = arr.length - 1
  // loop over array
  arr.forEach(digit => {
    if(digit === 1){
      num += 2**biP
    }
    biP--
  })
  return num
  };
