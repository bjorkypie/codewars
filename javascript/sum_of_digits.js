/*
Sum of Digits / Digital Root 6kyu

Description:
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
*/

function digital_root(n) {
  //check if n has more than one digit
  let sum = n
  if(n < 10){
    return sum
  }else{
    let numArr
    while(sum > 9){
      numArr = sum.toString().split('')
      sum = numArr.reduce((acc, c) => {
        return acc + Number(c)
      }, 0);
    }
    return sum
  }
}
