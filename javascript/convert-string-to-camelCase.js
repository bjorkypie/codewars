/*
Convert String to camelCase - 6kyu

Description:
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

*/


function toCamelCase(str){
  //create regex to store splitting punctuation dash "-" or underscore "_"
  let punct = /[_-]/g
  //split the string into an array of words
  let strArr = str.split(punct)
  //empty word for changing cases
  let camelWord = ''
  //empty array to store camelCase words
  let camelCaseArr = strArr.map((word, i) => {
    //exclude first word from first letter change, else capitalize
    camelWord = (i === 0) ? word[0] : word[0].toUpperCase()
    //loop through rest of word
    for(let j = 1; j < word.length; j++){
      //lowercase remaining letters
      camelWord += word[j].toLowerCase()
    }
    return camelWord
  })
  //return joined camelCase string
  return camelCaseArr.join('')
}
