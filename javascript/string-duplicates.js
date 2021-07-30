/*
String Array Duplicates - 6kyu

Description:
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].
Strings will be lowercase only, no spaces. See test cases for more examples.


Parameters: array of strings, lowercase letters, no spaces
Results: array of strings with duplicate letters removed
Example: 
['hiiii', 'thereee', 'you'] => ['hi', 'there','you']
Pseudocode:
initialize variable for use inside map
return mapped array
  set mapped value to empty string
  for loop for each letter
    if previous element is not equal to current element, add to mapped value
*/

function dup(s) {
  let toMap = '';
  return s.map(el => {
    toMap = '';
    for(let i = 0; i < el.length; i++){
      if(el[i] !== el[i-1]){
        toMap += el[i]
      }
    }
    return toMap
  })
};

console.log(dup(['hiiii', 'thereee', 'you', 'i']))