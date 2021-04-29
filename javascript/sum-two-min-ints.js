/*
Sum of Two Lowest Positive Integers - 7kyu

Description:
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

*/

function sumTwoSmallestNumbers(numbers) {
  //find minimum, move it to new sum variable
  let sum = Math.min(...numbers);
  //splice method
  numbers.splice(numbers.indexOf(sum), 1);
  //find new minimum, add it to sum
  sum += Math.min(...numbers);
  return sum;
}
