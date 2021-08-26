/*
Character with Longest Consecutive Repetition - 6kyu

Description:
For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:
["", 0]

parameters: string
return: array containing: 
  character with the longest consecutive repetition
  length of that repetition
example:
  'sssssieeiejflsjkkk' => ['s', 5]
pseudocode:
  create max char, max count, current char, current count variables
  loop through string to find max repeats
    if current character matches the previous character, add current count 1
    if count is greater than max count, replace max char and max count with current
    otherwise initialize new current char and current count at 1
  return max char and count in array
*/

function longestRepetition(s) {
    let maxChar = '';
    let maxCount = 0;
    let curChar = '';
    let curCount = 1;
    for(let i = 0; i < s.length; i++){
      curChar = s[i]
      curCount = (i != 0 && curChar == s[i-1]) ? curCount + 1 : 1
      if(curCount > maxCount){
        maxChar = curChar
        maxCount = curCount
      }
    }
    return [maxChar, maxCount]
  }
