/*

Anagram Detection - 7kyu

Description:
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

*/

function isAnagram (str1, str2) {
  //sort the letters of both strings by splitting and rejoining sorted arrays
  let sort1 = str1.toLowerCase().split('');
  console.log(sort1);
  sort1.sort();
  let sort2 = str2.toLowerCase().split('');
  console.log(sort2);
  sort2.sort();
  //check for equality, conditional statement
  return (sort1.join('') === sort2.join('')) ? true : false;
}
