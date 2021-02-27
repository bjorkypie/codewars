/*

Bit Counting 6kyu

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

*/

function countBits(n) {
  //convert input to binary with toString method
  //split the binary number into an array
  //filter the array into only 1s
  //return the length of array of 1s
  return n.toString(2).split('').filter(num => num === '1').length
};
