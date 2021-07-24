/*
Max-Min Arrays - 7kyu
In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

Description: 

PARAMETERS:
  array of unique elements... integers?
RESULTS:
  array rearranged so:
    first max, first min, second max, second min, etc
EXAMPLES:
    [15,11,10,7,12] => [15,7,12,10,11]
    [42,35,12,14,8,66] => [66,8,42,12,35,14]
PSEUDOCODE:
  declare output array varaible
  loop through array
    push max
    delete it from original
    push min
    delete it from original
    etc. until no more elements
  OR
  sort original array
    pop and shift until no more elements
*/
function solve(arr){
    let output = [];
    while(arr.length > 0){
      output.push(arr.splice(arr.indexOf(Math.max(...arr)), 1)[0])
      if(arr.length >= 1){
        output.push(arr.splice(arr.indexOf(Math.min(...arr)), 1)[0])
      }
    }
    return output
  };