/*
Unique In Order - 6kyu

Description:
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

Parameters: iterable, string or array
Results: array of items in order but removing repeats next to one another
Examples:
  'ABBCcAD' => ['A', 'B', 'C', 'c', 'A', 'D']
Pseudocode:
  check if an array, else split with no delimiter
  filter array which checks values L -> R
*/

var uniqueInOrder=function(iterable){
    return [...iterable].filter((el, i, a) => (i === 0) ? true : (el == a[i-1]) ? false : true);
  }