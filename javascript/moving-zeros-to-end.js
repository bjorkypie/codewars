/*
Moving Zeros to the End - 5kyu

Description:
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

var moveZeros = function (arr) {
  //for loop backwards 
  for(let i = arr.length - 1; i >=0; i--){
    if(arr[i] === 0){
      //use splice method to delete
      arr.splice(i, 1);
      //add 0 to end
      arr.push(0);
    }
  }
  return arr;
}