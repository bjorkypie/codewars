/*
Numbers to Letters - 7kyu

Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.

PARAMETERS:
  array of numbers as strings, which represent: 
    number in alphabet in reverse order
    a=26 ... z=1
    '27', '28', '29' => '!', '?', ' '
RESULTS:
  string containing characters which correspond to letter of alphabet in reverse order
EXAMPLES:
  ['24', '26', '9', '28'] => 'car?'
  ['4', '22', '25', '27'] => 'web!'
PSEUDOCODE:
  create dictionary object
  map input to appropriate output
*/

function switcher(x){
  const dict = '0zyxwvutsrqponmlkjihgfedcba!? '
  return x.map(el => dict[Number(el)]).join('')
}
