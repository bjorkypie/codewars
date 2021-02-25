/*
Find the Unique Number 6kyu

Description: There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

function findUniq(arr) {
  //set empty object to count instances
  let nums = {}
  //set empty calculated key
  let key = ''
  //set variable for unique num
  let unique = NaN
  //iterate through each number in given array
  arr.forEach(number =>{
    //calculate key
    key = number.toString()
    //if number exists in object, add 1, else count 1st instance
    nums[key] ? nums[key] += 1 : nums[key] = 1
  })
  console.log(nums)
  //iterate through counts in object
  for (let num in nums){
    //if number count is equal to 1, assign to unique; else unique equals self
    unique = nums[num] === 1 ? Number(num) : unique
  }
  return unique
}
