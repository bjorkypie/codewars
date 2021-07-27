/*
Sort the Odd - 6kyu

Description:
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

PARAMETERS:
  array of integers, positive? will solve as if they might not be...
RESULTS:
  an array, sorted such that odd numbers are in ascending order
  leave even numbers at their original positions
EXAMPLES:
  [11,13,4,5] => [5,11,4,13]
PSEUDOCODE:
 new filtered array with only odd numbers and sort it
 declare iterator
 map result array, replacing odd numbers with filtered elements or leaving if even
*/

function sortArray(array) {
    let sortedOdd = array.filter(el => el % 2 !== 0).sort((a, b) => a - b);
    let counter = 0;
    return array.map(el => {
      if(el % 2 === 0){
        return el
      }else{
        counter++
        return sortedOdd[counter - 1]
      }
    })
  }