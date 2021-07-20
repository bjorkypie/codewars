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
    const alpha = ' abcdefghijklmnopqrstuvwxyz'
    const words = x.split(' ')
    let points = words.map((el, i) => {
      return el.split('').reduce((acc, c) => {
        return alpha.indexOf(c) + acc;
      }, 0)
    })
    let max = Math.max(...points)
    return words[points.indexOf(max)]
}