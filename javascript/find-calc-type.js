/*
Find the Calculation Type - 7kyu

Description: 
You have to create a function calcType, which receives 3 arguments: 2 numbers, and the result of an unknown operation performed on them (also a number).

Based on those 3 values you have to return a string, that describes which operation was used to get the given result.

The possible return strings are: "addition", "subtraction", "multiplication", "division".

Example:
calcType(1, 2, 3) -->   1 ? 2 = 3   --> "addition"

Notes
In case of division you should expect that the result of the operation is obtained by using / operator on the input values - no manual data type conversion or rounding should be performed.
Cases with just one possible answers are generated.
Only valid arguments will be passed to the function.

parameters: 
  three integers, of which an expression containing the first two resolves to the third
return:
  string indicating which operation fits the calculation
  assume inputs only have one possible answer
example:
  calcType(1,2,3) => "addition" because 1 + 2 == 3
  calcType (6,2,3) => "division" because 6 / 2 == 3
pseudocode: 
  for each possible answer, use conditional for if the calculation is true
*/

function calcType(a, b, res) {
    return a + b == res ? "addition" : a - b == res ? "subtraction" : a * b == res ? "multiplication" : "division"
  }