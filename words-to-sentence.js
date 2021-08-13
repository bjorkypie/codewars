/*
Words to Sentence - 7kyu

Description:
Write function which will create a string from a list of strings, separated by space.

Example:
["hello", "world"] -> "hello world"

parameters: array of words
return: string combining words
example: ["let's","go","to","the","store"] => "let's go to the store"
pseudocode: 
  return joined words array, with space delimiter
*/
function wordsToSentence(words) {
    return words.join(' ');
  }