/*
Small Enough? Beginner - 7kyu

Description:
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

*/

function smallEnough(a, limit){
  //filter based on limit value
  let newA = a.filter(num => {
    return num <= limit;
  })
  //check if length is the same
  return newA.length === a.length ? true : false;
}
