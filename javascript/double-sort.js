/*
Double Sort - 7kyu

Description:
Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

Note that numbers written as strings are strings and must be sorted with the other strings.

PARAMETERS:
  array with numbers or strings, will not be empty
RESULTS:
  single array with numbers in ascending order, then strings in alphabetical, with types retained
EXAMPLES:
  [4,7,"240","7","google","abc",1] => [1,4,7,"7","240","abc","google"]
PSEUDOCODE:
  initialize number array, filter numbers
    sort in ascending order
  initialize string array, filter strings
    sort in alphabetical order
  return concatenated arrays
*/

function dbSort(a){
    let nums = a.filter(el => typeof(el) === 'number').sort((el1, el2) => el1 - el2)
    let strs = a.filter(el => typeof(el) === 'string').sort((elA, elB) => elA < elB ? -1 : 1)
    return nums.concat(strs)
  }