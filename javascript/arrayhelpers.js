/*
Array Helpers - 6kyu

Description:

This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!

*/

Array.prototype.square = function() {
  return this.map(num => num**2);
}

Array.prototype.cube = function() {
  return this.map(num => num**3);
}

Array.prototype.average = function() {
  let items = this.length
  let avg
  if(items > 0){
    avg = this.reduce((acc, c) => acc + c)/items
  }
  return (items !== 0) ? avg : NaN
}

Array.prototype.sum = function() {
  return this.reduce((acc, c) => acc + c)
}

Array.prototype.even = function() {
  return this.filter(num => num % 2 == 0)
}

Array.prototype.odd = function() {
  return this.filter(num => num % 2 == 1)
}
