/*
Counting Duplicates - 6kyu

Description:
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

function duplicateCount(text){
  //object with letter counts
  let countObj = {}
  let char = ''
  //populate object
  for( let i = 0; i < text.length; i++){
    //set char variable to current letter, ignoring case
    char = text[i].toLowerCase();
    //if character is not in object, add it and assign count to 1
    countObj[char] = (!countObj[char]) ? 1 : countObj[char] + 1
  }
  //declare variable for counter of characters that occur more than once
  let total = 0;
  //iterate through counting object to find how many chars occur more than once
  for (const j of Object.values(countObj)){
    total += (j > 1) ? 1 : 0
  }
  console.log(text)
  console.log(countObj)
  return total
}
