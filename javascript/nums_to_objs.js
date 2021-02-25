/*
Numbers to Objects 7kyu

Description:

You will be given an array of numbers.

For each number in the array you will need to create an object.

The object key will be the number, as a string. The value will be the corresponding character code, as a string.

Return an array of the resulting objects.

All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.
*/

function numObj(arr){
  //declare variable to store computed key
  let key
  //declare empty array to place objects in
  let objArr = []
  //iterate over numbers in given array
  arr.forEach(num =>{
    //assign key variable to the current number as a string
    key = num.toString()
    //push an object with computed key + computed property
    //property is char calcuted from num as character code
    objArr.push({[key]: String.fromCharCode(num)})
  })
  return objArr
}
