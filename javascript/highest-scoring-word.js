/*
Highest Scoring Word - 6kyu

Description:
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

PREP
Parameters: Given a string of words, all lowercase
Result: word with the highest score according to points definition.
Example: below
Pseudocode:
set an object with letter points system
initialize maximum score word index variable at 0
split string into array of word subarrays
loop through parent array
  calculate points for current word subarray
  compare score of current word index points to maximum score variable
  if higher, replace with word index
  if equal, do not replace
return word at index of original string
*/

function high(x){
    const alpha = {
      "a": 1,
      "b": 2,
      "c": 3,
      "d": 4,
      "e": 5,
      "f": 6,
      "g": 7,
      "h": 8,
      "i": 9,
      "j": 10,
      "k": 11,
      "l": 12,
      "m": 13,
      "n": 14,
      "o": 15,
      "p": 16,
      "q": 17,
      "r": 18,
      "s": 19,
      "t": 20,
      "u": 21,
      "v": 22,
      "w": 23,
      "x": 24,
      "y": 25,
      "z": 26,
    }
    let maxScoreIndex = 0;
    let maxScore = 0;
    let points = 0;
    let words = x.split(' ')
    let arr = words.map(el => el.split(''));
    for(let i = 0; i < arr.length; i++){
      points = arr[i].map((el, j) => {
        return alpha[arr[i][j]]
        })
        .reduce((acc, c) => {
        return acc + c
      }, 0);
      if(maxScore < points){
        maxScore = points;
        maxScoreIndex = i;
      }  
    }
    return words[maxScoreIndex]
      
  }