/*
Count Characters in Your String 6kyu

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count (string) {
  //declare empty object
  let obj = {}
  //declare and initialize computed object key to empty string
  let key = ''
  //split the string into array of characters
  let strArr = string.split('')
  //iterate over each character
  strArr.forEach(char =>{
    //assign the comupted key to current char
    key = char
    //if the current char exists in object, add 1
    if(obj[key]){
      obj[key]++
    //else if current char is not in object, set count equal to 1
    }else{
      obj[key] = 1
    }
  })
  return obj
}
