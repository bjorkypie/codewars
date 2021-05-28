/*
Where My Anagrams At? - 5kyu

Description:

Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

function anagrams(word, words) {
    let letters = word.split('').sort().join('');
    let thisLetter;
    return words.filter((el, i) => {
      thisLetter = el.split('').sort().join('');
      return thisLetter === letters ? el : '';
    })
  }