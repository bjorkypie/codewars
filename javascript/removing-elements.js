/*
Removing Elements - 8kyu

Description:
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
None of the arrays will be empty, so you don't have to worry about that!

*/

function removeEveryOther(arr){
    //return filtered array
    return arr.filter((el, i) => {
      //remove only odd indexes - this keeps 0th and even elements
      return i % 2 === 1 ? false : true;
    })
  }