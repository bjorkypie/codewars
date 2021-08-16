/*
V  A  P  O  R  C  O  D  E - 7kyu

Description: 
Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

parameters: string
return: an altered string, with 2 spaces between each character, and uppercased
examples: 'love summertime' => 'L  O  V  E  S  U  M  M  E  R  T  I  M  E'
pseudocode: 
  split the string by character
  filter everything that's not a space
  join with two spaces in between and change to uppercase
*/

const vaporcode = string => string.split('').filter(el => el !== ' ' ? true : false).join('  ').toUpperCase()