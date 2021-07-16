/*
Two to One - 7kyu

Description:
Take 2 strings, s1 and s2, including only letters from a-z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


parameters:
two strings, all lowercase, 
results:
sorted string, longest possible with unique letters
examples:
pseudocode:
concatenate/join, sort, new set 

*/

const sortedJoined = (a,b) => [...new Set(a+b)].sort().join('');