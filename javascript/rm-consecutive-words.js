/*
Remove Consecutive Duplicate Words - 7kyu

Description:
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"

Parameters: Single string, possibly with consecutive duplicate words
Results: single string with no consecutive duplicate words
Example: "how much wood would a wood chuck chuck" -> "how much wood would a wood chuck"
Pseudocode:
split string to array with space delimiter
filter array, if previous element is not equal to current element
join string with space delimiter

*/

const removeConsecutiveDuplicates = s => {
    let arr = s.split(' ')
    let filtered = arr.filter((el, i, array) => {
        return el === array[i - 1] ? true : false;
    })
    return filtered.join(' ')
}