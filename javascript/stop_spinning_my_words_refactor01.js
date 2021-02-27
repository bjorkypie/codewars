/*
Stop Spinning My Words! 6kyu

Description:
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"

spinWords( "This is a test") => returns "This is a test"

spinWords( "This is another test" )=> returns "This is rehtona test"

**refactor using map method

*/
function spinWords(str){
  //create result variable to store mapped array of words
  let result = str.split(' ').map((word) => {
    //if word is 5+ letters, split into individual chars and reverse, return joined reversed word
    //if less than 5 letters return original word
    return word.length > 4 ? word.split('').reverse().join('') : word
  })
  //join the reversed and original words into string and return
  return result.join(' ').toString()
}
