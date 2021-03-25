/*
Sum of Positive - 8kyu

Description:
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

function positiveSum(arr) {
  //use reduce method
  let total = arr.reduce((acc, current) => {
    //check if positive and add, or continue reduce without adding
    return current > 0 ? acc + current : acc
    //set inital acc value to 0
    }, 0)
  return total
}
