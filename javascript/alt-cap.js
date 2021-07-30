/*
Alternate Capitalization - 7kyu

Description:
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Parameters: single string
Results: array with two strings, capitalized in alternate ways
Examples:
'doggy' => ['DoGgY', 'dOgGy']
Pseudocode:
  initialize empty result array
  loop to capitalize the string on evens and concatenate to result
  loop to capitalize string on odds and concatenate to result
  return result
*/

function capitalize(s){
    let result = ['', '']
    let evenness = 0;
    for(let i = 0; i < result.length; i++){
      for(let j = 0; j < s.length; j++){
        result[i] += j % 2 === evenness ? s[j].toUpperCase() : s[j].toLowerCase()
      }
      evenness++
    }
    return result
  };