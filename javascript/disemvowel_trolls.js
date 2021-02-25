/*
Disemvowel Trolls 7kyu

Description:
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str) {
  let strArr = str.split('')
  let newStr = ''
  strArr.forEach(char =>{
    switch(char.toLowerCase()){
      case 'a':
        break
      case 'e':
        break
      case 'i':
        break
      case 'o':
        break
      case 'u':
        break
      default:
        newStr += char
    }
  })
  console.log(newStr)
  return newStr;
}
