/*
Moving Zeros to the End - 5kyu

Description:
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

let moveZeros = function (arr) {
  //new array and filter 0s
  let endZeros = arr.filter(item => {
    return item !== 0 ? true : false;
  })
  //calc zeros needed
  let needZeros = arr.length - endZeros.length;
  //add to end of array
  for(let i = 0; i < needZeros; i++){
    endZeros.push(0);
  }
  return endZeros;
}