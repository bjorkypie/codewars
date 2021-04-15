/*
Abbreviate a Two Word Name - 8kyu

Description:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

*/

function abbrevName(name){
  //capitalize split the string
  let splitName = name.toUpperCase().split(' ');
  //return first letter of each name concatenated with '.'
  return `${splitName[0][0]}.${splitName[1][0]}`;
}
