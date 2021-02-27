/*
Stop Spinning My Words! 6kyu

Description:
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"

spinWords( "This is a test") => returns "This is a test"

spinWords( "This is another test" )=> returns "This is rehtona test"

*/
function spinWords(str){
  //declare empty array to store word(s)
  let result = []
  //split words and iterate through them
  str.split(' ').forEach((word, i) => {
    //if word is 5+ letters, split into individual chars and reverse, store joined word into array
    //if less than 5 letters store original word in array
    result[i] = word.length > 4 ? word.split('').reverse().join('') : word
  })
  //join the reversed and original words into string and return
  return result.join(' ').toString()
}
