/*
Remove First and Last Character: 8kyu

Description:
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

*/

function removeChar(str){
  //split string
  let trimmed = str.split('');
  //remove first char
  trimmed.shift();
  //remove last char
  trimmed.pop();
  //return joined string
  return trimmed.join('');
};
