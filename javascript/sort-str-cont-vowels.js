/*
PARAMETERS:
  array of strings
RESULTS:
  sorted in order of the single longest substring of contiguous vowels 
  (NOT contiguous same vowels)
EXAMPLES:
  ["how about now","a beautiful trio of"] => ["a beautiful trio of","how about now"]
  ["high","day","boot"] => ["boot","high","day"]
PSEUDOCODE:
  create vowel dictionary
  create counter variable, initialize to zero
  create max vowel variable, initialize to zero
  sort method with callback function:
    loop through letters in string,
      set counter to zero
      if letter is vowel add 1
        if max is greater than counter, set max to counter
      if letter is not vowel, set counter to zero
    return max of a and b??

    https://www.codewars.com/kata/5d2d0d34bceae80027bffddb/train/javascript
*/
