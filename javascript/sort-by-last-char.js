/*
Sort by Last Character - 7kyu

Description:
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.

PARAMETERS:
  string of words
RESULTS:
  array of words, sorted alphabetically according to the final character in each word
EXAMPLES:
  'how could you do this' => ['could', 'do', 'this', 'you', 'how']
  'keep it simple stupid' => ['stupid', 'simple', 'keep', 'it']
PSEUDOCODE:
  split string with space delimiter
  sort new array with callback sort function which looks at last character in word
*/

const last = (x) => x.split(' ').sort((a, b) => a[a.length - 1] > b[b.length -1] ? 1 : a[a.length - 1] < b[b.length - 1] ? -1 : 0)