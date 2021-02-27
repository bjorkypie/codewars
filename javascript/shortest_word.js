/*
Shortest Word 7kyu

Description:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
  //split string into array of words and map word lengths
  //use spread operator to find minimum word length and return
  return Math.min(...s.split(' ').map(word => {
    return word.length
  }))
}
