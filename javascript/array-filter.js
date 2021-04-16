/*
Array Filter - 7kyu

Description:
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/

function getEvenNumbers(numbersArray){
  // fx to filter out the odd numbers
  function evenNums(num){
    return num % 2 === 0 ? true : false;
  }
  //return filtered array using fx
  return numbersArray.filter(evenNums)
}
