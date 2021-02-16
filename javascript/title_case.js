/*
Title Case 6kyu

Description:
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

###Arguments (Haskell)

First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
Second argument: the original string to be converted.
###Arguments (Other languages)

First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
###Example

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
Source: https://www.codewars.com/kata/5202ef17a402dd033c000009/javascript
*/

function titleCase(title, minorWords = '') {
  let titleArr
  let resultStr = ''
  let lower = []
  if(minorWords.length !== 0){
    //split exception words into array
    lower = minorWords.split(' ')
    lower.forEach((word, i) => lower[i] = word.toLowerCase())
  }
  //check if input string is empty
  if(title.length !== 0){
    //split title into words
    titleArr = title.split(' ')
    //loop through title words, taking first word off each time
    titleArr.forEach((word, j) => {
      //add capital first letter to words
      titleArr[j] = word[0].toUpperCase()
      //check word length and if 1+ letters, turn the rest to lowercase
      titleArr[j] += (word.length > 1) ? word.slice(1).toLowerCase() : ''
    })
    //check for exceptions, if any provided
    if(lower.length > 0){
      //loop through words in title
      titleArr.forEach((word, k) =>{
        //loop through exception words
        lower.forEach((lowerWord, l) => {
          //if not first word of title and words match, replace
          if(k > 0 && word.toLowerCase() === lowerWord){
            titleArr[k] = lowerWord
          }
        })
      })
    }
    console.log(titleArr)
    //add uppercase first letter (no matter the word) to result string
    result = titleArr.join(' ')
  }else{
    result = title
  }
  return result
}

//tests
titleCase('')
titleCase('a clash of KINGS', 'a an the of')
titleCase('THE WIND IN THE WILLOWS', 'The In')
titleCase('the quick brown fox')
