/*
You are given a list of integers nums that used to be an arithmetic sequence. Given that a number was removed, and that the number was not the first or the last element, return the removed number.

Constraints

2 ≤ n ≤ 100,000
Example 1
Input
nums = [1, 3, 5, 9]
Output
7
Explanation
If we add 7 in to this sequence, we get [1, 3, 5, 7, 9] which is an arithmetic sequence.

*/

solve(nums) => len(nums)+1)*(nums[-1]+nums[0])/2-sum(nums)