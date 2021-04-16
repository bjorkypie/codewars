/*
Filter Long Words - 7kyu

Description:
Write a function filterLongWords that takes a string sentence and an integer n.

Return a list of all words that are longer than n.

Example:

filterLongWords("The quick brown fox jumps over the lazy dog", 4) = ['quick', 'brown', 'jumps']

*/

function filterLongWords(sentence, n) {
  //split sentence and assign to array
  let words = sentence.split(' ');
  //new array with filtered words
  let longWords = words.filter(word => {
    return word.length > n ? true : false;
  })
  return longWords;
}
