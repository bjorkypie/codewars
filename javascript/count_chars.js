/*
Count Characters in Your String 6kyu

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count (string) {  
  return (string.length > 0) ? string
    .split('')
    .reduce((allLetters, letter) => {
      if (letter in allLetters) {
        allLetters[letter]++;
      }else{
        allLetters[letter] = 1;
      }
      return allLetters;
    }, {}) : {};
}