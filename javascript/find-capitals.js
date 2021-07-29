/*
Find the Capitals - 7kyu

Description:
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

PARAMETERS: string
RESULTS: ordered list containing indexes of all capital letters
EXAMPLE: 
'OkeY DOkey' => [0, 3, 5, 6]
PSEUDOCODE:
loop through string characters
  for each character which doesn't equal the letter to lowercase
  push index to result array
*/

const capitals = (word) => [...word].filter(letter => letter !== letter.toLowerCase()).map(el => word.indexOf(el))