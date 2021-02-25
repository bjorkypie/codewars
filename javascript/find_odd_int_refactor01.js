/*
Find the Odd Integer 6kyu

Description:
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

**Refactored to use objects

*/

function findOdd(arr) {
  let instances = {}
  arr.forEach(num =>{
    instances[num] ? instances[num]++ : instances[num] = 1
  })
  for(prop in instances){
    if(instances[prop] % 2 !== 0){
      return Number(prop)
    }
  }
}
