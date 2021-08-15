/*
Ensure Question - 8kyu

Description:
Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

parameters:
  string input
return:
  string, with a question mark added to the end, unless one is already there
examples:
  "How's it going" => "How's it going?"
  "" => "?"
  "Seriously!?" => "Seriously!?"
pseudocode:
  check if question mark is at the end of the string with index -1
  if no question mark, add one and return string
*/

const ensureQuestion = (s) => s.slice(-1) == "?" ? s : `${s}?`


