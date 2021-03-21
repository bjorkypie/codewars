/*
Duplicate Encoder - 6kyu

Description:
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("

Notes:
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

*/

function duplicateEncode(word){
  //split word into array of chars
  let ogChars = word.split('')
  let chars = ogChars.map(char => char.toLowerCase())
  //use reduce to count iterations
  let countedChars = chars.reduce(function (allChars, char){
    if(char in allChars){
      allChars[char]++;
    }else{
      allChars[char] = 1;
    }
    return allChars
  }, {});
  //create empty string to push parentheses
  let phrase = ''
  //iterate through counted chars object to create parentheses string
  for(let i = 0; i < chars.length; i++){
    if (countedChars[chars[i]] > 1){
      phrase += ')'
    }else{
      phrase += '('
    }
  }
  return phrase
}
