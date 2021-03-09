/*
Meeting 6kyu

Description:
John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.

*/

function meeting(s) {
  //create array with capital names
  let names = s.split(';').map(name => name.toUpperCase());
  //create new array with proper punctuation joins
  let nameArr = names.map(name => {
    let fullName = name.split(':')
    return `(${fullName[1]}, ${fullName[0]})`
  })
  //sort names, concatenate and return
  return nameArr.sort().join('')
}
