/*

Anagram Detection - 7kyu

Description:
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

Refactored 
*/

// write the function isAnagram, refactored
function isAnagram(test, original) {
  //convert to lowercase
  return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('') ? true : false;
};
