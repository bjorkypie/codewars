/*
Simple Pig Latin - 5kyu

Description:
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

PARAMETERS:
  string
RESULTS:
  string translated to pig latin, leave punctuation untouched
EXAMPLES:
  pigIt('Hey everybody!') => 'eyHay verybodyeay!'
PSEUDOCODE:
  create a-z dictionary
  split by space
  map, if element is all alphabetic, to newly concatenated strings
  join and return
*/

function pigIt(str){
    let regex = /[^A-Za-z]/
    return str
      .split(' ')
      .map(el => el.match(regex) ? 
           el : 
           `${el.slice(1)}${el.slice(0, 1)}ay`)
      .join(' ')
  }