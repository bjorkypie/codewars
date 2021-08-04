/*
Lost Number in Sequence - 7kyu
An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the array and no difference with it, your function should return the int 0.


Description:
PARAMETERS
  two arrays, one of which might have one number deleted
RESULTS
  the number that was deleted from the second mixed array, or 0 if no number deleted
EXAMPLES
  [5,6,7,8,9], [4,7,8,9,5] => 6
  [7,8,9,10,11,12], [12,10,7,9,8,11] => 0
PSEUDOCODE
  compare lengths, if the same return 0
  otherwise, 
    filter first array 
      callback checks whether element is included in second
    return zero index of filtered array
*/

const findDeletedNumber = (arr, mixArr) => arr.length === mixArr.length ? 0 : arr.filter(el => !mixArr.includes(el))[0]
