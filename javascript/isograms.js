/*
Isograms - 7kyu

Description:

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case

*/

function isIsogram(str){
  //split and map lowercase to array
  let lowerArr = str.split('').map(char => char.toLowerCase())
  //join lowercase array to lowercase string
  let lowerStr = lowerArr.join('')
  //set repeat count to 0
  let repeats = 0
  lowerArr.forEach(char =>{
    //for each character, check if split string would have 2 or more elements
    repeats += lowerStr.split(char).length > 2 ? 1 : 0
  })
  return repeats === 0 ? true : false
}
