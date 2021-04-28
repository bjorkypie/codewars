/*
Even Times Last - 7kyu

Description:
Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

Indexes in sequence start from 0.

If the sequence is empty, you should return 0.

*/

function evenLast(numbers) {
  //filter even index
  let evenNums = numbers.filter((num, i) => {
    return i % 2 === 0 ? true : false;
  })
  //reduce to find sum
  let sum = evenNums.reduce((acc, c) => {
    return acc + c;
  }, 0)
  //return multiplied by last index of input array
  let result = sum * numbers[numbers.length - 1]
  //conditional to satisfy when result is NaN
  return result ? result : 0;
}
