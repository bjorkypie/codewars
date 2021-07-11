/*
Multiplication Table - 8kyu

Description: 
Your goal is to return multiplication table for number that is always an integer from 1 to 10.

Parameters: single integer between 1 and 10

Return value: string containing multiplication table for each number 1-10 multiplied by given input

Pseudocode:
for loop which concatenates the line for product of current loop integer and input
use es6 template literals to insert input
convert inputs to string within literal
*/

function multiTable(number) {
    let result = ''
    for(let i = 1; i <= 10; i ++){
      result += i!==10 ? `${i} * ${number} = ${number * i}\n` : `${i} * ${number} = ${number * i}`
    }
    return result

  }