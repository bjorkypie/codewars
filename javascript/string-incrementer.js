/*
String Incrementer - 5kyu

Description:
Your job is to write a function which increments a string, to create a new string.
If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.

Examples:
foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementString (str) {
  //new array split string
  if(str.length > 0){
    //regex to split string into array
    let splitStr = str.match(/[\d\.]+|\D+/g);
    //regex for numbers
    const isDigit = /\d/g;
    //abstract length of split string array
    let last = splitStr.length - 1;
    //set number of digits to keep leading zeros
    let digits = splitStr[last].length;
    //check if digits at end of split string array
    if(splitStr[last].match(isDigit) && splitStr.length > 0){
      //increment digit by 1 and add any leading zeros
      splitStr[last] = String(Number(splitStr[last]) + 1).padStart(digits, '0');
    }else{
      //if not digit at end, add 1 to end of string
      splitStr.push('1');
    }
    // return incrementedString
    return splitStr.join('');
  }else{
    //return 1 if string is empty
    return '1'
  }
}
