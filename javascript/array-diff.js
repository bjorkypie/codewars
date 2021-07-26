/*
Array.diff - 6kyu

Description:
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

PARAMETERS:
  two arrays
RESULTS:
  an array with only the values unique to first array
  all instances of values in second array should be removed
EXAMPLES:
  arrayDiff( [4,5,5,6,7,7,10] , [4,7] ) => [5,5,6,10]
PSEUDOCODE:
  filter method
    if second array includes value, false
    otherwise true
*/

function arrayDiff(a, b) {
  return a.filter(el => b.includes(el) ? false : true)
}

