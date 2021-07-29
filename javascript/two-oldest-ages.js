/*
Two Oldest Ages - 7kyu

Description:
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example:

twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]

parameters: array of integers
results: array of two or more integers containing two oldest ages
examples:
  [14, 14, 12, 2, 6] => [12, 14, 14]
  [6, 4, 5, 2, 3, 6, 5, 5]  => [5, 5, 5, 6, 6]
pseudocode:
a) sort and splice the last two ages
b) create result array 
    add maximum with Math max method, remove from original array, and repeat
c) consider edge cases where more than one of the oldest or second oldest age:
    use Set from sorted array and filter any items equal to the two oldest ages in Set
*/

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    return ages.sort((a, b) => a-b).slice(-2)
    
  }

  
  