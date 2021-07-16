/*
Meeting - 6kyu

Description:
John has invited some friends. His list is:
"Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

Could you make a program that

- makes this string uppercase
- gives it sorted in alphabetical order by last name.
- When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.


So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

Parameters:
given the names of friends, seperated by semicolons. first name is first, last name is last and they're separated by colons.
Results:
string where all the letters are uppercase
lastnames are first and the first names are last, sorted, first and last name are sep by commas, and the names are in ()
Examples: see above
Pseudocode:
split everything by semi colon first
loop thru that array, reversing and capitalizing everything
*/


function sortedNames (s) {
return s.toUpperCase()
  .split(";")
  .map(name=> name.split(":").reverse())
  .sort()
  .map(name => `(${name[0]}, ${name[1]})`)
  .join("")
}