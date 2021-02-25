/*
Find the Stray Number 7kyu

Description:
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

*/

function stray(arr) {
  let stray = arr[0]
  if(arr[0] != arr[1]){
    return (arr[0] === arr[2]) ? arr[1] : arr[0]
  }else{
    arr.forEach(number => {
      if(number != arr[0]){
        stray = number
      }
    })
  }
  return stray
}
