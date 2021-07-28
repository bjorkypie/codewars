/*
Printer Errors - 7kyu

Description:
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

Parameters:
  string containing letters a-z
Results:
  control string should only have letters a-m
  string with error rate: number of errors / length of control string
Examples:
  printer_error('aasssdkfjlweldk') => "4/15"
Pseudocode:
  set counter variable
  loop through string, each time letter is not within set, increment counter
  return template literal with proper numbers
*/


function printerError(s) {
    let errors = 0;
    let valid = 'abcdefghijklm';
    for(let i = 0; i < s.length; i++){
      if (!valid.includes(s[i])){
        errors += 1
      }
    }
    return `${errors}/${s.length}`
  }