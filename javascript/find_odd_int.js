/*
Find the Odd Integer 6kyu

Description:
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(arr) {
  let nums = []
  let count = []
  let oddNum
  arr.forEach(num =>{
    if(nums.includes(num)){
      count[nums.indexOf(num)] += 1
    }else{
      nums.push(num)
      count.push(1)
    }
  })
  count.forEach((count, index) =>{
    if(count % 2 === 1){
      oddNum = nums[index]
    }
  })
  return oddNum
}
