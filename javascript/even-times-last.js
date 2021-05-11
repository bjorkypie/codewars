/*
Even Times Last - 7kyu

Description:
Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

Indexes in sequence start from 0.

If the sequence is empty, you should return 0.

*/

//refactored shorter

function evenLast(numbers) {
  //filter even numbers to new array
  let even = numbers.filter((num, i) => i % 2 === 0);
  //reduce
  let evenSum = even.reduce((acc, c) => {return acc + c}, 0);
  //calculate and return
  return numbers.length > 0 ? numbers[numbers.length - 1] * evenSum : 0;
}