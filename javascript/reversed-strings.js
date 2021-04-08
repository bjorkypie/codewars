/*
Reversed Strings - 8kyu

Description:
Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'
*/

function solution(str){
  //split string to array
  let strArr = str.split('')
  //reverse array, join and return
  return strArr.reverse().join('')
}
