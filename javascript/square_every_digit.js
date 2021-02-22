/*
Square Every Digit 7kyu

Description:
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

function squareDigits(num){
  //convert to string, separate
  let inputArr = num.toString().split('')
  //convert each character to int
  inputArr.forEach((char, i) => inputArr[i] = Number.parseInt(char))
  //square each int
  inputArr.forEach((int, j) => inputArr[j] = Math.pow(int, 2))
  //convert digits to strings
  inputArr.forEach((int, k) => inputArr[k] = int.toString())
  //return concatenated digits as integer
  return Number.parseInt(inputArr.join(''))
}
