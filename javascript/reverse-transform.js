/*
String Transformer - 6kyu 

Description:
Parameters: function takes in str
Results: string with words in reverse order, and opposite casing
Examples: 
"Example Input" => "iNPUT eXAMPLE"
"I am HUNGRY" => "hungry AM i"
Pseudocode:
turn the str into an array with split("")
to use .map to loop through the array, targeting just the element.   like el = el.toLowerCase() 
needs a conditional  ? : 
After looping use .join("") put the array back into a string 
word order needs to be reversed before joining
*/

function transform(str){
  return str.split('')
    .map((el) => el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase())
    .join('')
    .split(' ')
    .reverse()
    .join(' ')
}