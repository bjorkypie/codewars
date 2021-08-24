/*
Find Multiples of a Number - 8kyu

Description:
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

parameters: two integers
return: array of the 1st input multiples, up to the 2nd input limit
example: 
  findMultiples(3, 18) => [3,6,9,12,15,18]
  findMultiples(9, 71) => [9,18,27,36,45,54,63]
pseudocode
  for loop index up to limit
    multiply input 1 by index
    push to result array
  return result array
*/

function findMultiples(integer, limit) {
    let result = []
    for(let i = 1; i <= limit/integer; i++){
      result.push(i * integer)
    }
    return result
  }
  