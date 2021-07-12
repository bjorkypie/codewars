/*
Sum of Array Singles - 7kyu

Description:
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.


Parameters: an array of numbers, two occur once and the rest occur twice
Return: sum of numbers that only occur once
Examples: [3, 4, 5, 3, 4, 6] => 5 + 6 = 11;
Pseudocode:
create an object with array, assigning values to number of occurances
refactor to use filter, indexOf, then reduce
*/

function repeats(arr){
    //filter out elements which appear twice
    let appearOnce = arr.filter((el, i, arr) => arr.indexOf(el) != arr.lastIndexOf(el) ? false : true);
    //reduce array with single appearance numbers to sum
    return appearOnce.reduce((acc, cur) => acc + cur, 0)
  };

//using an object
  function repeatsObj(arr){
    let obj = arr.reduce((acc, cur) => {
      if(cur in acc){
        acc[cur] += 1
      }else{
        acc[cur] = 1;
      }
      return acc
    }, {})
    let result = 0
    for (let num in obj) {
      if(obj[num] === 1){
        result += Number(num)
      }
    }
    return result
  };