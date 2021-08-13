/*
Sort and Star - 8kyu

Description: 
You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

parameters: array of strings
return: first value of the input string array, after it is sorted alphabetically
example:
  ['how','much','wood','would','the','woodchuck','chuck','if','the','woodchuck', 'could', 'chuck', 'wood']
  =>
  'c***h***u***c***k'
pseudocode:
  use the sort method to sort array alphabetically
  return the first item, split and joined with astericks
*/

const twoSort = (s) => s.sort()[0].split('').join('***')