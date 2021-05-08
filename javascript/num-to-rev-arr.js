/*
Convert Number to Reversed Array of Digits - 8kyu

Description:
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]

*/

function digitize(n) {
    //convert to string and split, convert to num, reverse order
    return n.toString().split('').map(item => Number(item)).reverse();
  }