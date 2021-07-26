/*
IQ Test - 6kyu

Description: 
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

PARAMETERS:
  string containing numbers with space delimiter
RESULTS:
  index of integer that differs in evenness from the others, index starts at 1
EXAMPLES:
  "4 6 8 7 10" => 7
PSEUDOCODE:
  split string into array with space delimiter & map strings to numbers
  if first and second integer modulo 2 is equal
    return index of integer modulo 2 which does not equal first integer modulo 2, + 1
  if first and second integer modulo 2 are not equal
    return index of integer modulo 2 which does not equal third integer modulo 2. + 1
*/

function iqTest(numbers){
    const arr = numbers.split(' ').map(el => Number(el))
    return arr[0] % 2 === arr[1] % 2 ? 
      arr.indexOf(arr.find(el => el % 2 != arr[0] % 2)) + 1 
      : arr.indexOf(arr.find(el => el % 2 != arr[2] % 2)) + 1
  }