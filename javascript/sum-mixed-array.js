/*
Sum Mixed Array - 8kyu

Description:
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

Parameters: single array of integers as strings and numbers
Return: integer
Examples: see below
Pseudocode:
    map input array and turn to Numbers
    reduce to find sum
*/

function sumMix(x){
    return x.map(el => Number(el)).reduce(((acc, cur) => acc + cur), 0)
}

//tests
assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 