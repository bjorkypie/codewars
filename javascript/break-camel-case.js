/*
Break camelCase - 6kyu

Description:
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

Parameters: 
1 string, could be empty, could not have any capital letters
Results:
1 string, broken up, by capital letters of camelcase and space
Examples: above
Pseudocode:
split into letters
loop through letters to find uppercase, replace with leading space
trim in case of edge scenario where input has first capital letter
*/

const breakCamelCase = (str) => str.split('').map(l => l === l.toUpperCase() ? ` ${l}` : l).join('').trim()