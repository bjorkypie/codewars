/*
Absent Vowel - 7kyu

Description:
Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.

PARAMETERS
  vowel dictionary with index of AEIOU => 01234
  string argument that contains all lowercase vowels but one
RESULTS
  index of the vowel missing from the input string
EXAMPLES
  "How much wood cn I even chop?" => 0, missing "a"
  "Look at the hge blister on yor foot" => 4, missing "u"
PSEUDOCODE
  loop through dictionary, 
  if the string doesn't include the current loop, return the index
*/

function absentVowel(x){
    const vowels = "aeiou"
    for(let i = 0; i < vowels.length; i++){
      if(!x.includes(vowels[i])){
        return i
      }
    }
  }