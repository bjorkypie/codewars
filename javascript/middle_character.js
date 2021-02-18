/*
Get the Middle Character 7kyu

Description:
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"
#Input

*/

function getMiddle(s)
{
  //conditional for even or odd length
  return s.length % 2 === 0 ? `${s[(s.length/2) - 1]}${s[(s.length/2)]}` : `${s[(s.length - 1)/2]}`
}
