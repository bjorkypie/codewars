/*
Previous Multiple of 3 - 7kyu

Description:
Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

Return n if the input is already a multiple of three, and return null/nil/None if no such number exists.

recursive solution
parameters: positive integer
return: input edition that is a multiple of three or null
examples: see description
pseudocode: 
  if input is multiple of three, return it
  if input is empty or less than 10, return null
  call function recursively on input with removed digit
*/

const prevMultOfThree = n => {
    n = Math.floor(n)
    return n % 3 === 0 ? n : n < 10 ? null : prevMultOfThree(n / 10)
  }
  